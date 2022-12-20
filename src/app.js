import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import bodyParser from 'body-parser';
const { urlencoded } = bodyParser;
import { fileURLToPath } from 'url';
import path from 'path';
import Home from '../routes/homeRoute.js';
import Project from '../routes/projectRoute.js';
import About from '../routes/aboutRoute.js';
import Contact from '../routes/contactRoute.js';
import Err404 from '../routes/errorRoute.js';


const port = process.env.PORT || 8000;

app.use(urlencoded({ extended: false }));
app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)),"..","public")));

app.set('view engine','ejs');

app.use("/", Home);
app.use("/project", Project);
app.use("/contact", Contact);
app.use("/about", About);
app.use("*", Err404);





app.listen(port, () => {console.log(`Server is started`);});