const mongojs = require("mongojs");
const db = mongojs("mongodb://127.0.0.1/fullapp", ["users"]);

const deleteUserController = (req, res) => {
    let userId = req.params.userId;
    db.users.remove({ _id: mongojs.ObjectID(userId) }, (err, docs) => {
        res.send("ok");
    })
}

module.exports = deleteUserController;