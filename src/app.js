require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const Home = require('../routes/homeRoute.js');
const Project = require('../routes/projectRoute.js');
const About = require('../routes/aboutRoute.js');
const Contact = require('../routes/contactRoute.js');
const Err404 = require('../routes/errorRoute.js');


const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,"..","public")));

app.set('view engine','ejs');

app.use("/", Home);
app.use("/project", Project);
app.use("/contact", Contact);
app.use("/about", About);
app.use("*", Err404);





app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});