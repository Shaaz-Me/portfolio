const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {})
.catch((err) => {
    console.log("No Database Connection");
});