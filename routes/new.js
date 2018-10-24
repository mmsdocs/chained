let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log(req)
  res.render('new', {
    title: 'Chained',
  });
});

router.post('/', function (req, res, next) {
  console.log()
  let title = req.body.new_title
  let tags = req.body.new_tags
  let link = req.body.new_link
  res.render('new', {
    title: 'Chained',
    message: "Added link!"
  });
});

module.exports = router;
