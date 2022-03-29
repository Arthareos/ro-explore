const functions = require("firebase-functions");

const admin = require('firebase-admin');
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const express = require("express");
const cors = require("cors");

// REST API Methods
// GET		Retrieve information about the REST API resource
// POST		Create a REST API resource
// PUT		Update a REST API resource
// DELETE	Delete a REST API resource or related component

// Main app
const app = express();
app.use(cors({origin: true}));

// Main database reference
const db = admin.firestore();

// Routes
app.get("/", (req, res) => {
	return res.status(200).send("Hello world!");
});

// Create -> post()
app.post("/destinations/create", (req, res) => {
	(async () => {
		try {
			await db.collection("destinations").doc().create({
				name: req.body.name,
				coordinates: [req.body.coordX, req.body.coordY]
			})

			return res.status(200).send({status: "Success", message: "Destination created successfully!"});
		} catch (error) {
			return res.status(500).send({status: "Error", message: error});
		}
	})();
});

// Get -> get()
app.get("/destinations", (req, res) => {
	(async () => {
		try {
			const query = db.collection("destinations");
			let response = [];

			await query.get().then((data) => {
				let docs = data.docs;

				docs.map((doc) => {
					const currentItem = {
						name: doc.data().name,
						coordinates: doc.data().coordinates,
					};

					response.push(currentItem);
				});

				return response;
			})

			return res.status(200).send({status: "Success", data: response});
		} catch (error) {
			return res.status(500).send({status: "Error", message: error});
		}
	})();
});

app.get("/destinations/:id", (req, res) => {
	(async () => {
		try {
			const requestedDocument = db.collection("destinations").doc(req.params.id);
			let documentData = await requestedDocument.get();
			let response = documentData.data();

			return res.status(200).send({status: "Success", data: response});
		} catch (error) {
			return res.status(500).send({status: "Error", message: error});
		}
	})();
});

// Update -> put()

// Delete -> delete()

// exports the api to firebase cloud functions
exports.api = functions.region('europe-west1').https.onRequest(app);