// Dependencies

var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var handleBars = require("handlebars");
var methodOverride = require('method-override')
var path = require("path");
var routes = require("./controllers/controllers.js");



// Express App
var app = express();
var PORT = process.env.PORT || 3000;

// static content
app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//location of  views folder
app.use('/static', express.static(path.join(__dirname, '/views')));
// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
app.use(express.static("public"));

// Set Handlebars as the view engine
app.engine('handlebars', exphbs({ 
defaultLayout: 'main',
partialsDir: __dirname + "/views/partials"
 }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
// var routes = require("./controllers/controller.js");
app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});