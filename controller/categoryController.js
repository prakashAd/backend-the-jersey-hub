const Category = require('../model/categoryModel')

//to create category

exports.addCategory = async(req,res)=>{

    let categoryToAdd  =new Category({
        category_name: req.body.category_name


    })

    categoryToAdd = await categoryToAdd.save()
    if(!categoryToAdd){
        return res.status(400).json({error:"Unable to save this category"})

    }

    res.send(categoryToAdd)
}