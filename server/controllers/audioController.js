const path = require('path');
const audioQuestionsKey = require('../assets/interviewQuestions/audioQuestionsKey.json');

const audioController = {};

audioController.getAudioFile = async (req, res, next) => {
  const {id} = req.params;
  console.log('TEST getAudioFile');
  try {
    console.log(audioQuestionsKey);
    const audioPath = audioQuestionsKey[id].path;
    const filePath = path.join(
      __dirname,
      `../assets/interviewQuestions/${audioPath}`
    );
    res.locals.audioPath = filePath;
    return next();
  } catch (error) {
    console.error(error);
    return next({
      log: 'Error in getAudioFile of audioController',
      status: 400,
      message: {err: 'Error in getting audio file from audioController'},
    });
  }
};

module.exports = audioController;
