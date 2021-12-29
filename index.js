const express = require("express");
const app = express();
// const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', '.');

const hostname = "127.0.0.1"
const port = 3000

app.listen(port || 3000, () => {
    console.log(`Server running on http://${hostname}:${port}/`);
})

let ratesJsonArray = [];

app.post("/", (req, res) => {
    console.log("received: " + req.body);
    ratesJsonArray.push(req.body);
    res.status(200).send("OK");
})

// app.post("/result", (req, res) => {
//     console.log("POST: /result");
//     res.status(200).send("OK");
// })

app.get('/', function (req, res) {
    res.render('index', { title: 'Electric Rates Comparision', result: ratesJsonArray });
    ratesJsonArray = [];
});

module.exports = {
    app
}