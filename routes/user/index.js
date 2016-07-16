'use strict';

var express = require('express');

function index(req, res) {
  res.render('user/profile', {
    title: ['common.jakduk', 'user.profile'],
    head_page: 'head_profile'
  });
}

function editProfile(req, res) {
  req.api.footballClubs(req.locale).then(function (response) {
    res.render('user/profile_edit', {
      title: ['common.jakduk', 'user.profile.update'],
      head_page: 'head_profile',
      footballClubs: response.data
    });
  });
}

function updateProfile(req, res, next) {
  next();
}

function editPassword(req, res) {
  req.api.footballClubs(req.locale).then(function (response) {
    res.render('user/password_edit', {
      title: ['common.jakduk', 'user.password.change'],
      head_page: 'head_profile'
    });
  });
}

function updatePassword(req, res, next) {
  next();
}

module.exports.setup = function (app) {
  var router = express.Router();

  router.use(function(req, res, next) {
    if (!req.isAuthenticated) {
      res.redirect('/login');
      return;
    }
    next();
  });

  router.get('/profile', index);

  router.get('/profile/edit', editProfile);

  router.post('/profile/update', updateProfile);

  router.get('/password/edit', editPassword);

  router.post('/password/update', updatePassword);

  app.use('/user', router);
};
