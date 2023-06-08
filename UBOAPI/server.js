const express = require('express')
const app = express()
const port = 5000
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
      // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// const mymod = require('./mymodule')

const { MongoClient } = require('mongodb');
const uri =  "mongodb+srv://uddeshnarayan2:Uddesh26@cluster0.6xzdmcz.mongodb.net/";
const client = new MongoClient(uri);

async function myNewUtility(utility) {
  try {
    await client.connect();
    const db = client.db();
    const utCollection = db.collection('Utility');

    
    await utCollection.insertOne(utility);
    return "Successfully inserted"
  } catch(err) {
    console.log("error: " + err)
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}
async function myGetAllUtilities() {
    try {
      await client.connect();
      const db = client.db();
      const utilityCollection = db.collection('Utility');
  
      const all = await utilityCollection.find({});
      // Store the results in an array
      const results = await all.toArray();
      //console.log(results);
      return results
    } catch(err) {
      console.log("error: " + err)
    } finally {
      await client.close();
    }
  }

  async function myDeleteutility() {
    try {
      await client.connect();
      const db = client.db();
      const utCollection = db.collection('Utility');
  
      await utCollection.deleteOne(_id);
  
      return "Successfully deleted"
    } catch(err) {
      console.log("error: " + err)
    } finally {
      // Close the database connection when finished or an error occurs
      await client.close();
    }
  }

  app.post('/newutility', (req, res) => {
    let a = req.body
    myNewUtility(a).then( //promises ...pipeline
      function(value) {res.send(value);},
    )
    .catch(console.error);
  });
  
  app.get('/getallutilities', (req, res) => {
    myGetAllUtilities().then( //promises ...pipeline
      function(value) {res.send(value);},
  )
  .catch(console.error);
  })
  app.post('/deleteutility', (req, res) => {
    let a = req.body
    myDeleteutility(a).then( //promises ...pipeline
      function(value) {res.send(value);},
    )
    .catch(console.error);
  });

  app.listen(port, () => {
    console.log(`UBO App listening on port ${port}`)
  })