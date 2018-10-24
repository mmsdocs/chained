var express = require('express');
var router = express.Router();

function allLinks() {
  // the file is loaded once, further calls will use the cache.
  let links = require('../saved_links.json');
  return links;
}

function queryLinks(query) {
  // the file is loaded once, further calls will use the cache.
  let links = require('../saved_links.json');
  splitted_query = query.split(" ");
  results = links.filter(
    link => link.tags.find(tag => splitted_query.find(single_query => tag === single_query)) || splitted_query.find(single_query => single_query === link.title)
  );
  return results;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  // load json file with all results
  let query = req.query.q;
  console.log(query);
  res.render('index', {
    title: 'Chained',
    results: query == undefined ? allLinks() : queryLinks(query)
  });
});

module.exports = router;
