const express = require('express')
const mongodb = require('mongodb')

const app = express()
let db
app.use(express.json())
const PORT = 5000

app.get('/testRoute', (req, res) => res.end('Hello from Server!'))



let connectionString = `mongodb://localhost:27017/test`

mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, client) {
    db = client.db()
    app.listen(5000)
  }
)

app.get('/', function (req, res) {
  // getting all the data
  db.collection('new')
    .find()
    .toArray(function (err, items) {
      res.send(items)
    })
})

app.post('/create-data', function (req, res) {
  // Sending request to create a data
  db.collection('new').insertOne({ text: req.body.text }, function (
    err,
    info
  ) {
    res.json(info.ops[0])
  })
})


app.put('/update-data', function (req, res) {
  // updating a data by it's ID and new value
  db.collection('new').findOneAndUpdate(
    { _id: new mongodb.ObjectId(req.body.id) },
    { $set: { text: req.body.text } },
    function () {
      res.send('Success updated!')
    }
  )
})


app.delete('/delete-data', function (req, res) {
  // deleting a data by it's ID
  db.collection('new').deleteOne(
    { _id: new mongodb.ObjectId(req.body.id) },
    function () {
      res.send('Successfully deleted!')
    }
  )
})



















