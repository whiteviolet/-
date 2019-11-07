var db=require("../modules/db.js");

//建立模型
var userSchema=new db.Schema({
    username:{
        type:String,//数据类型
        trim:true,//去除空格
        default:""
    },
    password:{
        type:String,//数据类型
        trim:true,//去除空格
        default:""
    },
    name:{
        type:String,
        trim:true,
        default:""
    },
    age:{
        type:Number,
        trim:true,
        default:0
    },
    head:{
        type:String,
        default:""
    },
    token:{
        type:String,
        default:""
    }
});

//建立集合
module.exports=db.model("User",userSchema);
