///////////////
//userCtrl.js//
///////////////
var users = [
    {
        name: 'Preston McNeil',
        password: 'password1',
        friends: ['Lindsey Mayer', 'Terri Ruff']
    },
    {
        name: 'Ryan Rasmussen',
        password: '$akgfl#',
        friends: ['Lindsey Mayer']
    },
    {
        name: 'Terri Ruff',
        password: 'hunter2',
        friends: ['Lindsey Mayer', 'Preston McNeil']
    },
    {
        name: 'Lindsey Mayer',
        password: '777mittens777',
        friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
    }
];

module.exports = {
  users: users,
  login: function(req,res,next){
    users.forEach(function(user, index) {
      if(req.body.name === user.name){
        if(req.body.password === user.password){
          req.session.currentUser = user;
          res.send({userFound: true, session: req.session});
        }
      } else {
        res.send({userFound: false});
      }
    });
  }
};
