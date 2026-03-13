require("dotenv").config();
const express = require("express");
const cors = require("cors");
const getEmbedding = require("./embed");
const {addVector,search} = require("./vectorStore");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/add", async(req,res)=>{

    const text = req.body.text;

    const vector = await getEmbedding(text);

    addVector(vector,text);

    res.send("Document added");
});

app.post("/search", async(req,res)=>{

    const query = req.body.query;

    const vector = await getEmbedding(query);

    const result = search(vector);

    res.json({answer:result});
});

app.listen(3000,()=>{
    console.log("Server running on port 3000");
});