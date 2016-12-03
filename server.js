// configuration
var express    = require('express');
var app        = express();
var morgan     = require('morgan');
var bodyParser = require('body-parser');

// configuration
//set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));
app.use( '/bower_components', express.static( 'bower_components' ) );
//log every request to the console
app.use(morgan('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({'extended':'true'}));
// parse application/json
app.use(bodyParser.json());

// app.get('*', (req, res) =>  res.send('./public/index.html'))

//cors and preflight filtering

// app.all('*', function(req, res, next){
// //preflight needs to return exact request-header
// res.set('Access-Control-Allow-Headers', req.headers['access-control-request-headers']); 
// if ('OPTIONS' == req.method) {
// 	return res.send(204);
// }
// next();
// });

// app.all('*', function(req, res, next) {
//        res.header("Access-Control-Allow-Origin", "*");
//        res.header("Access-Control-Allow-Headers", "X-Requested-With");
//        res.header('Access-Control-Allow-Headers', 'Content-Typeyayaya');
//        next();
// });

// listen (start app with node server.js)
app.listen(9000);
console.log("App listening on port 9000");
