//code content of APP.JS
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
//MIDDLEWARE (CORS)
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//DATABASE
// **** change this below DB link to your mongoDB cluster ****
const DB = "mongodb+srv://tinbaltz:3SIWhymQ7ZpxYHrN@classapp-formative.qujj5pb.mongodb.net/class_app_database?retryWrites=true&w=majority";//insert your mongoDB link that emerges out of the process described in teams for step by step mongoDB creation. replace <password> part with password you have given to your main project at cluster creation
const PORT = 4000;
mongoose.connect(
    DB,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected to Database");
    })
    .catch(err => console.log(err))
//ROUTES  
app.use(bodyParser.json());
app.get("/", (res, req) => {
    res.send("reached homepage");
});
// this below 'ProjectRoute' is a variable for this project (not syntax)
const ProjectsRoute = require('./routes/projects');
app.use('/projects', ProjectsRoute);
app.listen(PORT, () => {
  console.log("listening on port 4000");
});