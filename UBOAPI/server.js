const express = require('express')
const app = express()
const port = 5000
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const { MongoClient, ObjectId } = require('mongodb');
const url =  "mongodb+srv://tsthrivishnu:Admin123321@cluster0.czh4i3h.mongodb.net/";
const client = new MongoClient(url);

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
  
    await client.close();
  }
}
async function myGetAllUtilities() {
    try {
      await client.connect();
      const db = client.db();
      const utilityCollection = db.collection('Utility');
      const all = await utilityCollection.find({});
      const results = await all.toArray();
      return results
    } catch(err) {
      console.log("error: " + err)
    } finally {
      await client.close();
    }
  }

  async function myDeleteutility(json) {
    try {
      await client.connect();
      const db = client.db();
      let id = new ObjectId(json._id);
      const utilityCollection = db.collection('Utility');
     // await utilityCollection.deleteOne(MongoClient.ObjectID(id));
     await utilityCollection.deleteOne({_id: id});
      return "Successfully deleted"
    }
     catch(err) {
      console.log("error: " + err)
    } 
  }

  // async function myUpdateutility(info){
  //   try{
  //     await client.connect();
  //     const db = client.db();
  //     const updateCollection = db.collection('Utility')
  //     var myquery = info.query
  //     if (myquery._id != undefined || myquery._id != null) {
  //       myquery._id = new ObjectId(myquery._id)
  //     }
  //    const newvalues = { $set: {} }; // Initialize an empty $set object
  //   for (const key in info.values) {
  //     if (info.values.hasOwnProperty(key) && info.values[key] !== null) {
  //       newvalues.$set[key] = info.values[key];
  //     }
  //   }
  //     await updateCollection.updateOne(myquery,newvalues);
  //     return "Successfully Updated"
  //   }
  //   catch(err) {
  //     console.log("error:" + err)
  //   }
  // }

  async function myUpdateutility(info) {
    try {
      const { query, values } = info;
      await client.connect();
      const db = client.db();
      const updateCollection = db.collection('Utility');
  
      const myquery = { _id: new ObjectId(query._id) };
      const newvalues = { $set: values };
  
      await updateCollection.updateOne(myquery, newvalues);
      return "Successfully Updated";
    } catch (err) {
      console.log("error:", err);
      throw err;
    }
  }

  app.post('/newutility', (req, res) => {
    let a = req.body
    myNewUtility(a).then( 
      function(value) {res.send(value);},
    )
    .catch(console.error);
  });
  
  app.get('/getallutilities', (req, res) => {
    myGetAllUtilities().then( 
      function(value) {res.send(value);},
  )
  .catch(console.error);
  })
  app.post('/deleteutility', (req, res) => {
    let a = req.body
    myDeleteutility(a).then( 
      function(value) {res.send(value);},
    )
    .catch(console.error);
  });

  app.post('/updateutility', (req, res) => {
    const { query, values } = req.body;
    myUpdateutility({ query, values })
      .then(value => {
        res.send(value);
      })
      .catch(error => {
        console.error(error);
        res.status(500).send("Error updating utility");
      });
  });

  // app.post('/updateutility',(req,res) => {
  //     let a = req.body
  //     myUpdateutility(a).then(
  //       function(value) {res.send(value);},

  //     )
  //     .catch(console.error);

  //   });

  app.listen(port, () => {
    console.log(`UBO App listening on port ${port}`)
  })