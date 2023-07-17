const express = require('express');


const { getPasswords, postPassword} = require('../controllers/password')


const router = express.Router();


router.post('/', postPassword); //Save Password



router.get('/', getPasswords); //List Password


module.exports = router;
