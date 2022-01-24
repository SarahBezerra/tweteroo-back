import express from 'express';
import cors from 'cors';

const server = express();
server.use(express.json());
server.use(cors());

let user = [];

server.post('/sign-up', (req, res) => {
    user = req.body;
    res.send("OK");
});


server.listen(5000);