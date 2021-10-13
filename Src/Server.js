const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require("mongodb");
const app = express();

app.use(bodyParser.json());

const withDB = async (operation) => {
    try {
        const articleName = req.params.name;
        const client = await MongoClient.connect('mongodb://localhost:27017', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const db = client.db("myblog")
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(articleInfo);
        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error Connecting to db', error });
    }
}

app.get('/api/articles/:name', async (req, res) => {
    try {
        const articleName = req.params.name;
        const client = await MongoClient.connect('mongodb://localhost:27017', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const db = client.db("myblog")
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(articleInfo);
        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error Connecting to db', error });
    }
});

app.post("/api/articles/:name/add-comments", (req, res) => {
    const { username, text } = req.body;
    const articleName = req.params.name;

    articleInfo[articleName].comments.push({ username, text });
    res.status(200).send(articleInfo[articleName]);;
})

app.listen(8000, () => console.log("Listening on port 8000"));