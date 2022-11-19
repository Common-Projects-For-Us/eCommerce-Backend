const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const morgan = require('morgan');
const cors = require('cors');
app.use(morgan('tiny'));

require('dotenv/config');
app.use(cors());
app.options('*', cors());

const usersRouters = require('./routers/users');
const api = process.env.API_URL;
app.use(`${api}/users`, usersRouters);

//Database Connection
const mongoose = require('mongoose');

const atlas_url = process.env.MONGODB_COMPASS_URL;
mongoose.connect(atlas_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'eshop'
}).then(() =>{
    console.log("Database Connection is Ready...!");
}).catch((error) =>{
    console.log(error);
})


//Port is Running
app.listen(3000, () =>{
    console.log("server is running http://localhost:3000");
})