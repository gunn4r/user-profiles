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
    var found = false;
    users.forEach(function(user) {
      if(req.body.name === user.name && req.body.password === user.password){
          req.session.currentUser = user;
          found = true;
      }
    });

    if(found){
      console.log('User Found');
      res.send({userFound: true});
    } else {
      console.log('User Not Found');
      res.send({userFound: false});
    }

  }//end function

};
