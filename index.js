var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    session = require('express-session'),
    config = require('./config'),
    userCtrl = require('./controllers/userCtrl'),
    profileCtrl = require('./controllers/profileCtrl');

var app = express();

var corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: true,
  resave: true
}));
app.use(bodyParser.json());
// 
// app.use(function(req,res,next){
//   console.log(req.session);
//   next();
// });

app.get('/api/profiles', profileCtrl.friendProfiles);

app.post('/api/login', userCtrl.login);

var port = 3000;
app.listen(port, function(){
  console.log('Now listening on port ' + port + '.');
});
