var express = require('express');
var router = express.Router();


function parserHtml() {
    var htmlStr = '<div><span></span><img /></div>'

    return htmlStr
}

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        data: {
            title: 'Plans of 10 !',
            contents: ['文档A', '文档B', '文档C', '文档D'],
        }
    });
});

router.get('/contents.do', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.json({ newUrl: 'urlurlurlurlurlurlurlurlurlurlurl' });
});




module.exports = router;