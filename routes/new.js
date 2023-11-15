const express = require("express")
const router = express.Router();
const indexModule = require("./index")
const messages = indexModule.messages;

router.get("/", function (req, res) {
    res.render("form")
});

router.post("/", function (req, res) {
    messages.push({ text: req.body.message, user: req.body.name, added: new Date() })
    res.redirect("/")
})

module.exports = router;
