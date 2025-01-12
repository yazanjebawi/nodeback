const bro = require('../models/userModel');
//  get method to get all users
const getallbros = async (req ,res)=>{
    try{
        const bros = await bro.find();
        res.status(200).json(bros);
    }
    catch(error){
        console.log(error);
    }
}

const createNewbro = async (req,res)=>{
    console.log('this api for create user');
    try {
        const bro = req.body;
        console.log(bro);
        //  create new user in the mongo model 
        const newbro = new User(bro);
        //  save the user in the database
        await newbro.save();
        res.status(201).json(newbro);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:error});
        
    }
}

module.exports= {getallbros,createNewbro};