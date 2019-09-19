const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://Test:Test123@cs160-cluster-gigd4.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => { //this will connect me to the database

const db = client.db("Test");
 const collection = client.db("test").collection("devices");
 db.collection('Test').insertOne({
  item: "canvas",
  qty: 110,
  tags: ["paper"],
  size: { h: 28, w: 35.5, uom: "cm" }
})
 client.close(); //this closes the client 
});