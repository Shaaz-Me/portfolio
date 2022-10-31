require("../src/db/conn.js");
const Contact = require("../src/models/contactMe.js");

const contactController = (req,res) => {
    res.render('contact',{msg:""});
};



const contactPostController = async (req,res) => {
    try{
        const contacter = {
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            message : req.body.message
        }
        const user = new Contact(contacter);
        const result = await user.save();
        res.status(201).render('contact',{msg:"Submitted Successfully"});
    }catch(err){
        res.status(400).render('contact',{msg:"Invalid details"});
    }
}


module.exports = {contactController,contactPostController};