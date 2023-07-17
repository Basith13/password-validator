const crypto = require('crypto');

//Models
const PasswordModel = require('../models/password');

//Password List
const getPasswords = async (request, response) => {
    try {

    const passwords = await PasswordModel.find({});
        return response.status(200).send(passwords);
    } catch (e) {
        console.log(e);
        return response.status(500).send({error: true, message:'Internal server error!'});
    }
};

//Save Password
const postPassword = async (request, response) =>{
    const {password  } = request.body
    try{
        if(!password) throw new Error('Invalid password')

        //Password Encryption
        const encryptedPassword = crypto
        .createHash("sha256", "Test")
        .update(password)
        .digest("hex");

        const data = await PasswordModel.create({
            password : encryptedPassword
        });
        await data.save();
        return response.status(200).send({ message: 'Password Success!!!'});

    } catch(e){
        console.log(e);
        return response.status(500).send({error:true,message: 'Internal server error!!'});
    }
};

module.exports = {getPasswords, postPassword};
