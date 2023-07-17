const express = require('express');

const Password = require('./password');
const router = express.Router();

router.use('/password', Password);



module.exports = router;
