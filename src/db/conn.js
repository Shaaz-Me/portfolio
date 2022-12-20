import { connect } from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
connect(process.env.DATABASE, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {})
.catch((err) => {
    console.log("No Database Connection");
});