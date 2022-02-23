const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://root:root@cluster0.hrvug.mongodb.net/MyBlog"
).then(con=>
    {console.log("connected DB")

    }).catch(err=>{
        console.log("error",err)

    })
    ;


module.exports=mongoose;