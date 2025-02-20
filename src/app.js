import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// set limit for JSON data
app.use(express.json({limit: "16kb"}));

// data along with the request URL is encoded
// extended: object-within-object supported
app.use(express.urlencoded({extended: true, limit: "16kb"}));

// public directory
app.use(express.static('public'));

app.use(cookieParser());

export default app;
