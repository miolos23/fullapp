const mongojs = require("mongojs");
const db = mongojs("mongodb://127.0.0.1/fullapp", ["proizvodi"]);

const deleteProizvodController = (req, res) => {
    let proizvodId = req.params.proizvodId;
    db.proizvodi.remove({ _id: mongojs.ObjectID(proizvodId) }, (err, docs) => {
        res.send("ok");
    })
}

module.exports = deleteProizvodController;