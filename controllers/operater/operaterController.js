const mongojs = require("mongojs");
const db = mongojs("mongodb://127.0.0.1/fullapp", ["users", "gradovi", "proizvodi"]);

const operaterController = (req, res) => {
    let user = req.session.user;
    // console.log(user);

    db.gradovi.find({}, (err, gradovi) => {
        db.users.find({ role: "savetnik" }, (err, savetnici) => {
            db.termini.find({ operater: user.first_name + " " + user.last_name }, (err, termini) => {


                res.render("operater/index", {
                    name: user.first_name,
                    savetnici: savetnici,
                    gradovi: gradovi,
                    brojTermina: termini.length
                });
            })
        })
    })

}

module.exports = operaterController;