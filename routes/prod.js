const express=require('express')
const product=require('../models/produit')
const productRouter=express.Router()

//add a new product 

productRouter.post('/add',async(req,res)=>{
    try {
        const newproduct= new product(req.body)
        const result = await newproduct.save()
        res.send({product:result,msg:"product added sucessfully"})
    } catch (error) {
        console.log(error)
    }
})

//get all product 

productRouter.get('/all',async(req,res)=>{
    try {
        const result = await newproduct.find()
        res.send({product:result,msg:"all product finded "})
    } catch (error) {
        console.log(error)
    }
})

// get product by id

productRouter.get('/:id',async(req,res)=>{
    try {
        const result = await newproduct.findById({_id:req.params.id})
        res.send({product:result,msg:"product finded"})
    } catch (error) {
        console.log(error)
    }
})

//delete by id


productRouter.delete('/:id',async(req,res)=>{
    try {
        const result = await newproduct.findByIdAndDelete({_id:req.params.id})
        res.send({msg:"product  is deleted"})
    } catch (error) {
        console.log(error)
    }
})

// update product 


productRouter.put('./:id',async(req,res)=>{
    try {
        const result = await newproduct.findByIdAndUpdate({_id:req.params.id})
        res.send({product:result,msg:"product is updated"})
    } catch (error) {
        console.log(error)
    }
})

module.exports=productRouter