var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var path = require("path");

app.get('/', function(req, res) {
    console.log('root called. Returning index.html');
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/myPost', function(req, res) {
    console.log('post called. Returning data');
    var fullname = req.body.firstname + ' ' + req.body.lastname;
    console.log(req.body.firstname);
    console.log(req.body.lastname);
    console.log(fullname);
    res.json({"fullname" : fullname});
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});