const express = require('express');
const bodyParser = require('body-parser');
const path = require("path")
const pino = require('express-pino-logger')();
var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGODB_URI || "mongodb://localhost:27017/";
const publicPath = path.join(__dirname, "../client/build");

const app = express();
const port = process.env.PORT || 3001;

// ... other app.use middleware 
app.use(express.static(publicPath));

app.use(bodyParser.urlencoded({ extended: false,
  limit: '50mb',
  parameterLimit: 100000 }));

  app.use(bodyParser.json({
    limit: '50mb',
    parameterLimit: 100000
  }))

app.use(pino);

app.get('/api/highScores', function (req, res) {
  console.log('hit')
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("quizScoresDB");
    dbo.collection("scores").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result)
      res.json(result);
      db.close();
    });
  });

}) 

app.post('/api/add', function (req, res) {
  console.log('hit')
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("quizScoresDB");
    var myobj = req.body
    dbo.collection("scores").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  }); 
})

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () =>
  console.log('Express server is running on localhost:3001')
);