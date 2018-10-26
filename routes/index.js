const express = require('express');
const axios = require('axios');
let router = express.Router();

let url='http://postgrest:3000/';

function allLinks(view) {
  axios(url + 'links')
  .then(content=>{
    view.render('index', {
      title: 'Chained',
      searchLabel: 'What you desire?',
      searchEndpoint: 'q',
      results: content.data
    });
  })
  .catch(err=>console.log(err));
}

function search(view, query) {
  axios(
    {
      method: 'post',
      url: url + 'rpc/to_find',
      data: {
        "set_tag": query
      }
    }
  )
  .then(content=>{
    view.render('index', {
      title: 'Chained',
      searchLabel: 'What you desire?',
      searchEndpoint: 'q',
      results: content.data
    });
  })
  .catch(err=>console.log(err));
}

/* GET home page. */
router.get('/', function (req, res, next) {
  // load json file with all results
  let query = req.query.q;
  query == undefined ? allLinks(res) : search(res, query)
});

module.exports = router;
