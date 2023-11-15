var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "hi there",
    user: "Amando",
    added: new Date()
  },
  {
    text: "hello world",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Message Board", messages: messages });
});

// router.post("/new", function (req, res) {
//   messages.push({text: req.body.message, user: req.body.name, added: new Date()})
//   res.redirect("/")
// })

module.exports = {
  router: router,
  messages: messages
}
