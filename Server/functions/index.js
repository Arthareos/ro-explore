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
			await db.collection("destionations").doc().create({
				name: req.body.name,
				coordinates: [req.body.x, req.body.y]
			})
		} catch (error) {

		}
	})();
});

// Get -> get()

// Update -> put()

// Delete -> delete()

// exports the api to firebase cloud functions
exports.api = functions.region('europe-west1').https.onRequest(app);

// exports.helloWorld = functions.region('europe-west1').https.onRequest((request, response) => {
// 	response.status(200).send("Hello World!");
// });

// exports.destinations = functions.region('europe-west1').https.onRequest((request, response) => {

// //  functions.logger.info("Hello logs!", {structuredData: true});

// 	switch (request.method) {
// 		case "GET":
// 			response.status(200).send("This is the destinations GET endpoint");
// 			break;

// 		case "POST":
// 			let body = JSON.stringify(request.query.text);
// 			response.status(200).send(body);
// 			break;

// 		case "PUT":
// 			response.send("This is the destinations PUT endpoint");
// 			break;

// 		case "DELETE":
// 			response.send("This is the destinations DELETE endpoint");
// 			break;

// 		default:
// 			response.send("Invalid request");
// 			break;

// 	}
// });