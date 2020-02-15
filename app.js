const express=require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const app=express();
const morgan=require('morgan');
const postRouters=require('./routers/post');

dotenv.config();

mongoose
.connect(process.env.MONGO_URI,{useNewUrlParser:true} )
    .then(()=>console.log("DB Connected"));

mongoose.connection.on("error",err=>{
    console.log(`DB connection error:${err.message}`);
});

app.use(morgan("dev"));
app.use("/",postRouters);

const port=8080;
app.listen(port,()=>{
    console.log(`A Node Js API is listening on port:${port}`);
});

