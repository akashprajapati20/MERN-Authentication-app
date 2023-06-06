const mongoose =require("mongoose");
const DB ="mongodb+srv://akashprajapati224224:Prajapati20@cluster0.ldulayf.mongodb.net/authentication_app?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{console.log("Database connected")}).catch((err)=>{
    console.log(err);
})