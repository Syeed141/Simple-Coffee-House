const dns = require("dns");
// Change DNS
dns.setServers(["1.1.1.1", "8.8.8.8"]);

require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const cors = require("cors");

app.use(cors());

app.use(express.json());

const uri = `mongodb+srv://${process.env.Name}:${process.env.Pass}@cluster0.9fnc4o2.mongodb.net/?appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const database = client.db("Coffee_DB");
    const collections = database.collection("coffees");

    // route for getting the apis

    app.get("/coffees", async (req, res) => {
    
        const cursor = collections.find();
        const result = await cursor.toArray();
        res.send(result);
      
    });

    // Route for posting
    app.post("/coffees", async (req, res) => {
      const newCoffee = req.body;

      console.log(newCoffee);

      const result = await collections.insertOne(newCoffee);

      res.send(result);
    });

    await client.connect();

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
