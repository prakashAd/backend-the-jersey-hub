const User = require('../model/user')

exports.createUser = async (req,res)=>{

    let userToAdd = new User({
        username :req.body.username
    })
    userToAdd = await userToAdd.save()
    if(!userToAdd){
        return res.status(400).json ({error:"username is not valid"})
    }
    res.send(userToAdd)
}

