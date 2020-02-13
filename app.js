const express=require('express');

const app=express();

const postRouters=require('./routers/post');


app.use("/",postRouters);

app.listen(4000);