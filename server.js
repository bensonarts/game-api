import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import api from './api/controllers';
import morgan from 'morgan';

let app = express();
app.server = http.createServer(app);

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', api());
app.server.listen(process.env.PORT || 3000, () => {
    console.log(`RESTful API server started on: ${app.server.address().port}`);
});
