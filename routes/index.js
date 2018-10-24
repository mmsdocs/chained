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
    x => x.tags.find(y => splitted_query.find(z => y === z)) || splitted_query.find(a => a === x.title)
  )
  return results
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
