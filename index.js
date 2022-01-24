import express from 'express';
import cors from 'cors';

const server = express();
server.use(express.json());
server.use(cors());

let user = [];
const tweets = [];

server.post('/sign-up', (req, res) => {
    user = req.body;
    res.send("OK");
});

server.post('/tweets', (req, res) => {
    const tweet = req.body;
    tweet.avatar = user.avatar;
    tweets.push(tweet);
    res.send("OK");
});


server.listen(5000);