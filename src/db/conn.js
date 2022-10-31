const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("Database connection is successful");
}).catch((err) => {
    console.log("No Database Connection");
});