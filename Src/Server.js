const express = require('express');
const bodyParser = require('body-parser');

const articleInfo = {
    "learn-react": {
        comments: []
    },
    "learn-node": {
        comments: []
    },
    "my-thoughts-on-learning-react": {
        comments: []
    }
}

const app = express();

app.use(bodyParser.json());

app.post("/api/articles/:name/add-comments", (req, res) => {
    const { username, text } = req.body;
    const articleName = req.params.name;

    articleInfo[articleName].comments.push({ username, text });
    res.status(200).send(articleInfo[articleName]);;
})

app.listen(8000, () => console.log("Listening on port 8000"));