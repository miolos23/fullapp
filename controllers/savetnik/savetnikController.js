const mongojs = require("mongojs");
const db = mongojs("mongodb://127.0.0.1/fullapp", ["termini"]);

const savetnikController = (req, res) => {
    let user = req.session.user;
    // console.log(user);
    db.termini.find({ savetnik: user.first_name + " " + user.last_name, active: true }, (err, termini) => {
        res.render("savetnik/index", {
            name: user.first_name,
            termini: termini
        })
    })


}

module.exports = savetnikController;