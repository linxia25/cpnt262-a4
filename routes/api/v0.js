const express = require('express');

const furnitures = require('../../data/furnitures');

const router = express.Router();

router.get('/furnitures', function(req, res) {
  res.json(furnitures);
})

module.exports = router;