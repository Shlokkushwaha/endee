const natural = require("natural");

const tokenizer = new natural.WordTokenizer();

function getEmbedding(text){

    const words = tokenizer.tokenize(text.toLowerCase());

    const vector = {};

    words.forEach(word=>{
        vector[word] = (vector[word] || 0) + 1;
    });

    return vector;
}

module.exports = getEmbedding;