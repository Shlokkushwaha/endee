const store = [];

function addVector(vector, text){
    store.push({vector, text});
}

function cosineSimilarity(vec1, vec2){

let dot = 0;
let normA = 0;
let normB = 0;

for(let key in vec1){
    if(vec2[key]){
        dot += vec1[key] * vec2[key];
    }
    normA += vec1[key] * vec1[key];
}

for(let key in vec2){
    normB += vec2[key] * vec2[key];
}

return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

function search(queryVector){

let scores = [];

for(let item of store){

let score = cosineSimilarity(queryVector, item.vector);

scores.push({
text: item.text,
score: score
});

}

scores.sort((a,b)=> b.score - a.score);

return scores[0]?.text;

}

module.exports = { addVector, search };