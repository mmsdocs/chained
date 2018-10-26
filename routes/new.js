const express = require('express');
const axios = require('axios');
let router = express.Router();

let url='http://postgrest:3000/links';

router.get('/', function (req, res, next) {
  res.render('new', {
    title: 'Chained',
  });
});

router.post('/', function (req, res, next) {
  let title = req.body.new_title
  let tags = req.body.new_tags
  let link = req.body.new_link

  axios({
    method: 'post',
    url: url,
    data: {
      on_datetime: new Date,
      title: title,
      tags: tags,
      link: link
    }
  })
  .then(res=>console.log(res.data))
  .catch(err=>console.log(err))

  res.render('new', {
    title: 'Chained',
    message: "Added link!"
  });
});

module.exports = router;
