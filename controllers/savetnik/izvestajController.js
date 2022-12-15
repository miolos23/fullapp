const mongojs = require("mongojs");
const db = mongojs("mongodb://127.0.0.1/fullapp", ["termini"]);

const izvestajController = (req, res) => {
    let user = req.session.user;
    let id = req.params.id;

    // console.log(user);

    db.termini.update({ _id: mongojs.ObjectID(id) }, {
        $set: {
            active: false
        }
    }, (err, docs) => {
        if (err) throw err;
        res.redirect("/savetnik");
    })

}

module.exports = izvestajController;