const mongoose =require('mongoose')

const connectdb=async()=>{
    try {
       await mongoose.connect('mongodb://127.0.0.1:27017/contactdb')
       console.log("data base  is connected") 
    } catch (error) {
       console.log(error) 
    }
}
module.exports=connectdb