const express = require('express');

const nanoid = require('nanoid');



const Url = require('../models/Url');

const router = express.Router();



router.get('/:id', async (req, res) => {

  const items = await Url.find();
  console.log(items);
   items.map(k => {
   if (k.shortUrl === req.params.id){
     res.status(301).redirect(k.originalUrl);
   }else {
     res.status(404).send('not found')
   }
 });

});

router.post('/',  async (req, res) => {
  const productData = req.body;
  productData.shortUrl = nanoid(7);

  const url = new Url(productData);
  try {
    await url.save();

    return res.send(url);
  } catch (e) {
    return res.status(400).send(e);
  }

});

module.exports = router;
