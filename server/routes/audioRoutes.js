const express = require('express');
const router = express.Router();

const audioController = require('../controllers/audioController');

console.log('Audio router');
router.get('/:id', audioController.getAudioFile, (req, res, next) => {
  console.log(res.locals.audioPath);
  res.status(200).sendFile(res.locals.audioPath);
});

module.exports = router;
