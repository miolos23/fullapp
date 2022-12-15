const mongojs = require("mongojs");
const db = mongojs("mongodb://127.0.0.1/fullapp", ["users", "gradovi"]);

const createGrad = (req, res) => {
    let name = req.body.name;
    let zip = req.body.zip;

    db.gradovi.insert(
        {
            name: name,
            zip: zip
        },
        (err, docs) => {
            if (err) {
                console.log(err);
            } else {
                res.redirect("/admin")
            }
        }
    );
}

module.exports = createGrad;