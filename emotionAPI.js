require('dotenv').config({ path: './.env' })

const pd = require('paralleldots');

pd.apiKey = process.env.PARALLELDOTS_API_KEY;

const getEmotion = async (text) => {
    const result = await pd.emotion(text);
    return result;
}

module.exports = getEmotion;