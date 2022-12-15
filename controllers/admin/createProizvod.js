const mongojs = require("mongojs");
const db = mongojs("mongodb://127.0.0.1/fullapp", ["users", "proizvodi"]);

const createProizvod = (req, res) => {
    let name = req.body.name;
    let price = req.body.price;

    db.proizvodi.insert(
        {
            name: name,
            price: price
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

module.exports = createProizvod;