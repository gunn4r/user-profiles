var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    session = require('express-session'),
    config = require('./config'),
    userCtrl = require('./controllers/userCtrl'),
    profileCtrl = require('./controllers/profileCtrl');

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: true,
  resave: true
}));

app.use(cors({
  origin: 'http://localhost:3000'
}));


app.post('/api/login', userCtrl.login);

app.get('/api/profiles', profileCtrl.friendProfiles);


var port = 3000;
app.listen(port, function(){
  console.log('Now listening on port ' + port + '.');
});
