const express=require('express');
const app=express();
const mongoose=require('mongoose');
const morgan=require('morgan');

const bodyParser=require('body-parser');
const expressValidator=require('express-validator');

const dotenv=require('dotenv');

dotenv.config();

mongoose
.connect(process.env.MONGO_URI,{useNewUrlParser:true} )
    .then(()=>console.log("DB  Connected"));

mongoose.connection.on("error",err=>{
    console.log(`DB connection error:${err.message}`);
});


const postRouters=require('./routers/post');

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/",postRouters);

const port=8080;
app.listen(port,()=>{
    console.log(`A Node Js API is listening on port:${port}`);
});

