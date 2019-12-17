const passport = require('passport');

module.exports = app => {
  app.get('/welcome',
    (req, res) => {
      res.send('this is working!');
    }
  );

  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      console.log(req.user);
      res.send(req.user);
    }
  );

  app.get(
    '/api/logout',
    (req, res) => {
      req.logout();
      res.redirect('/');
    }
  );

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);

    // res.send({ hi: "there" });
    // console.log(req.user);
  });
};


