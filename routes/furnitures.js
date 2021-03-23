const express = require('express');
const Furniture = require('../models/furniture');

const router = express.Router();

router.get('/', (request, response) => {

  response.render('pages/index', {pageTitle: "Smile Furnitures"});
})

router.get('/:id', async (req, res, next) => {
  try {
    const furniture = await Furniture.findOne({id: req.params.id});
    if(furniture) return res.render('pages/singleitem', 
      {pageTitle: "Smile Furnitures",
      furniture: furniture
  });
    return next(new Error ('Failed to find'));
  }catch(err){
    return next(err);
  }
});

module.exports = router