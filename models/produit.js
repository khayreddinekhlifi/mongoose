const mongoose =require('mongoose')
const schema =mongoose.Schema
const produitschema= new schema({

    name:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true
    },
    cathegory:{
        type:String,
        required:true
    },

    description:{
         type:String,
         required:false
    },
})

const product = mongoose.model('produit',produitschema)

module.exports= product