const mongojs = require("mongojs");
const db = mongojs("mongodb://127.0.0.1/fullapp", ["users"]);

const loginController = (req, res) => {
    // preuzeti podatke
    let nameIzForme = req.body.name;
    let passIzForme = req.body.password;

    // console.log(nameIzForme, passIzForme);

    db.users.find({ first_name: nameIzForme, password: passIzForme }, (err, docs) => {
        if (err) {
            console.log('greska pri logovanju');
            res.redirect("/");
        } else {
            // console.log(docs.length);
            if (docs.length === 1) {
                //korisnik pronadjen
                let user = docs[0];
                req.session.user = user;
                // console.log(user);
                if (user.role == "admin") {
                    res.redirect("/admin");
                    console.log("korisnik je admin");
                } else if (user.role == "operater") {
                    res.redirect("/operater");
                    console.log("korisnik je operater");
                } else if (user.role == "savetnik") {
                    res.redirect("/savetnik");
                    console.log("korisnik je savetnik");
                } else {
                    res.redirect("/");
                    console.log("nije admin");
                }
            } else {
                //podaci nisu tacni
                res.redirect("/");
                console.log("podaci nisu tacni");

            }
        }

    })
}

module.exports = loginController;