const mongojs = require("mongojs");
const db = mongojs("mongodb://127.0.0.1/fullapp", ["gradovi"]);

const deleteGradController = (req, res) => {
    let gradId = req.params.gradId;
    db.gradovi.remove({ _id: mongojs.ObjectID(gradId) }, (err, docs) => {
        res.send("ok");
    })
}

module.exports = deleteGradController;