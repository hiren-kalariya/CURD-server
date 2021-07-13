const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const CURDrouter = require('./Router/CURDrouter')
const app = express()
const port = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors())
//create database
mongoose.connect('mongodb://localhost:27017/curd', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(() => {
    console.log("create database sucessfully");
})
.catch((err) => {
    console.log(err);
})

//router create
app.use(CURDrouter)


//app listning
app.listen(port, () => console.log(`app listening on port ${port}!`))