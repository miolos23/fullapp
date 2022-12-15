const mongojs = require("mongojs");
const db = mongojs("mongodb://127.0.0.1/fullapp", ["termini"]);

const savetnikTerminiController = (req, res) => {
    let name = req.params.name;
    let user = req.session.user;

    db.termini.find({ savetnik: name }, (err, termini) => {
        // console.log(termini);
        res.render("admin/savetnikTermini", {
            name: name,
            termini: termini
        })
    })
}

module.exports = savetnikTerminiController;