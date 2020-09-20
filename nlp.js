require('dotenv').config({ path: './.env' })

// Sentiment Score (overall emotional leaning of the text)
// -1 = negative, 1 = positive
// Sentiment Magnitude (overall strength of emotion)
// doesn't normalize like score, each expression of emotion contributes
// longer text blocks may have greater magnitudes
// how much emotional content is present 
// Each sentence has a sentiment score and magnitude as well 

const language = require('@google-cloud/language');
const credentials = require(process.env.GOOGLE_APPLICATION_CREDENTIALS);
// Instantiates a client
const client = new language.LanguageServiceClient();

const getSentimentData = async (text) => {
    const document = {
        content: text,
        type: 'PLAIN_TEXT',
    };
    const features = {
        extractEntitySentiment: true, 
        extractDocumentSentiment: true 
    }
    const [result] = await client.annotateText({document, features})
    // console.log(result);

    data = {}
    data.documentSentiment = result.documentSentiment; // overall stats

    // parse entity data and store to return 
    data.entities = {};
    result.entities.forEach((entity) => {
        data.entities[entity.name] = {
            type: entity.type, 
            score: entity.sentiment.score, 
            magnitude: entity.sentiment.magnitude, 
            freq: entity.mentions.length
        }
    })
    return data 

}

// testing
// const result = getSentimentData(`I love R&B music. Marvin Gaye is the best.
// // 'What's Going On' is one of my favorite songs. Marvin Gaye
// // It was so sad when Marvin Gaye died`)
// result.then((data) => {
//     console.log(data)
// });

module.exports = getSentimentData; 