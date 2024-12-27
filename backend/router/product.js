const express = require('express');
const router = express.Router();

const {registerUser,loginUser} = require('../controller/product')
router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/protected', (req, res) => {
    res.send('This is a protected route')
});

module.exports = router