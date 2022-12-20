import "../src/db/conn.js";
import Contact from "../src/models/contactMe.js";

class contactController{

    static get = (req, res) => {
        res.render('contact', { msg: "" });
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
            res.status(201).render('contact', { msg: "Submitted Successfully" });
        } catch (err) {
            res.status(400).render('contact', { msg: "Invalid details" });
        }
    }
}



export default contactController;