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

server.get('/tweets', (req, res) => {
    const lastTweets = [];
    if(tweets.length > 10){
        for(let i=tweets.length-1; i >= tweets.length-10; i--){
            lastTweets.push(tweets[i]);
        }
        res.send(lastTweets);
    }else{
        res.send(tweets);
    }
});


server.listen(5000);