const express = require('express');
const app = express();

require('dotenv').config();
require('express-async-errors');

const userRouter = require('../router/product')
const cors = require('cors');

app.use(express.json());
app.use(cors());


const connectDB = require('../Db/connect');
app.use('/',userRouter)

app.get('/',(req,res)=>{
    res.send('Hello World');
})


const start = async()=>{
    try{
        app.listen(8080,()=>{
            console.log('Listening on port 8080');
        })
        await connectDB(process.env.MONGO_URI);
        console.log('Connected to DB');
    }catch(error){
        console.log(error);
    }
}

start()