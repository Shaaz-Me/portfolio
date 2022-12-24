import "../src/db/conn.js";
import Contact from "../src/models/contactMe.js";

class contactController{

    static get = (req, res) => {
        res.render('contact');
    };



    static post = async (req, res) => {
        try {
            const contacter = {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                message: req.body.message
            }
            const user = new Contact(contacter);
            const result = await user.save();
            res.send({success:true});
        } catch (err) {
            res.send({success:false});
        }
    }
}



export default contactController;