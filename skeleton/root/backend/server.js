var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  userRoute = require('./api/routes/userRoute'),
  bodyParser = require('body-parser');

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://Test:Test123@cs160-cluster-gigd4.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Connect to mongo database
client.connect(err => { //this will connect me to the database

  // const db = client.db("Test");
  // const collection = client.db("test").collection("devices");
  // db.collection('Test').insertOne({
  //   item: "canvas",
  //   qty: 110,
  //   tags: ["paper"],
  //   size: {
  //     h: 28,
  //     w: 35.5,
  //     uom: "cm"
  //   }
  // })
  client.close(); //this closes the client 
});

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Register routes
userRoute(app);

// Error message for 404
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

app.listen(port);

console.log('soigne server started on: ' + port);