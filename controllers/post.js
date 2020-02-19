const Post=require('../models/post');

exports.getPosts=(req,res)=>
{
    res.json({
        post:[{title:'first post'},{body:'second post'}]
    });
};


exports.createPosts= (req,res) => {

    const post =new Post(req.body);
    post.save().then(result =>
        {
            res.json({
                post:result
            });
        });
};