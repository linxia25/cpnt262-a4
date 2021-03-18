//// Load dependencies
const express = require('express');
const router = express.Router();
const config = require('../config');

//Objects are used to pass data to the rendered template
router.use((req, res, next) => {
  res.locals = config
  next()
})

router.get('/', (req, res) => {
  res.render('pages/index', {pageTitle: "Smile Furnitures"})
})

router.get('/login', (req, res) => {
  res.render('pages/login', {pageTitle: "Smile Furnitures - Login"})
})

router.get('/register', (req, res) => {
  res.render('pages/register', {pageTitle: "Smile Furnitures - Register"})
})

module.exports = router;