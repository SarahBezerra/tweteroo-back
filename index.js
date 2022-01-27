import express from 'express';
import cors from 'cors';

const server = express();
server.use(express.json());
server.use(cors());

let user = [];
const tweets = [];

server.post('/sign-up', (req, res) => {
    user = req.body;
    if(user.username && user.avatar){
        res.status(201).send("OK");
    }else{
        res.sendStatus(400);
    }
});

server.post('/tweets', (req, res) => {
    const tweet = req.body;
    if(tweet.username && tweet.tweet){
        tweets.push({ ...tweet, avatar: user.avatar });
        console.log(tweets)
        res.status(201).send("OK");
    }else{
        res.sendStatus(400);
    }
});

server.get('/tweets', (req, res) => {
    const tweetsReverse = [...tweets].reverse().slice(0, 10);
    res.send(tweetsReverse);
});


server.listen(5000);