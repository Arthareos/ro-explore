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
// POST		Retrieve information about the REST API resource (with body)
// PUT		Create a REST API resource
// UPDATE	Update a REST API resource
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
				coordinates: {
					x: req.body.coordX,
					y: req.body.coordY,
				},
				image: req.body.image,
				description: req.body.description,
			})

			return res.status(200).send(JSON.stringify({status: "Success", message: "Destination created successfully!"}));
		} catch (error) {
			return res.status(500).send(JSON.stringify({status: "Error", message: error}));
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
						id: doc.id,
						name: doc.data().name,
						coordinates: {
							x: doc.data().coordinates.x,
							y: doc.data().coordinates.y
						},
						image: doc.data().image,
						description: doc.data().description,
					};

					response.push(currentItem);
				});

				return response;
			})

			return res.status(200).send(JSON.stringify({status: "Success", data: response}));
		} catch (error) {
			return res.status(500).send(JSON.stringify({status: "Error", message: error}));
		}
	})();
});

app.get("/destinations/:id", (req, res) => {
	(async () => {
		try {
			const requestedDocument = db.collection("destinations").doc(req.params.id);
			let documentData = await requestedDocument.get();
			let response = documentData.data();

			if (response)
				return res.status(200).send(JSON.stringify({status: "Success", data: response}));

			return res.status(404).send(JSON.stringify({status: "Error", message: "Resource not found!"}));
			
		} catch (error) {
			return res.status(500).send(JSON.stringify({status: "Error", message: error}));
		}
	})();
});

// Update -> patch()
app.patch("/destinations/update/:id", (req, res) => {
	(async () => {
		try {
			await db.collection("destinations").doc(req.params.id).update({
				name: req.body.name,
				coordinates: {
					x: req.body.coordX,
					y: req.body.coordY,
				},
				image: req.body.image,
				description: req.body.description,
			});
			return res.status(200).send(JSON.stringify({status: "Success", data: "Destination updated successfully!"}));
		} catch (error) {
			console.log(error);
			return res.status(500).send(JSON.stringify({status: "Error", message: error}));
		}
	})();
});

// Delete -> delete()
app.delete("/destinations/delete/:id", (req, res) => {
	(async () => {
		try {
			await db.collection("destinations").doc(req.params.id).delete();
			return res.status(200).send(JSON.stringify({status: "Success", data: "Destination deleted successfully!"}));
		} catch (error) {
			return res.status(500).send(JSON.stringify({status: "Error", message: error}));
		}
	})();
});

// exports the api to firebase cloud functions
exports.api = functions.region('europe-west1').https.onRequest(app);

// For future reference
// let response = {
// 	numberOfResults: 0,
// 	documentData: null
// };

// await query.get().then((data) => {
// 	let docs = data.docs;

// 	let documents = [];
// 	docs.map((doc) => {
// 		const currentItem = {
// 			id: doc.id,
// 			name: doc.data().name,
// 			coordinates: doc.data().coordinates,
// 			description: doc.data().description,
// 		};

// 		documents.push(currentItem);
// 	});

// 	response = {
// 		numberOfResults: data.size,
// 		documentData: documents
// 	};

// 	return response;
// })