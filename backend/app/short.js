const express = require('express');

const nanoid = require('nanoid');



const Url = require('../models/Url');

const router = express.Router();



router.get('/:shortUrl', async (req, res) => {

  try{
      const item = await Url.findOne({shortUrl: req.params.shortUrl});
      if(!item) {
         return res.status(404).send("not found")
      }
      res.status(301).redirect(item.originalUrl)
  }catch (e) {
      res.status(404).send('not found')
  }
});

router.post('/',  async (req, res) => {
  const Data = req.body;
  Data.shortUrl = nanoid(7);

  const url = new Url(Data);
  try {
    await url.save();

    return res.send({
        shortUrl: url.shortUrl
    });
  } catch (e) {
    return res.status(400).send(e);
  }

});

module.exports = router;
