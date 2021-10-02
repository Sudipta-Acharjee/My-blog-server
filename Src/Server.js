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

app.get('/hello', (req, res) => res.send("Hellos"));
app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}`));
app.get("/hello/:name", (req, res) => res.send(`Hello ${req.params.name}`));

app.listen(8000, () => console.log("Listening on port 8000"));