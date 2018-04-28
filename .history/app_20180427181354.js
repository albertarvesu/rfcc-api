import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import router from './router';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

dotenv.config();

app.use('/', router);

const PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`)
});