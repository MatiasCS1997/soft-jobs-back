const express = require('express')
const router = express.Router()
const { postUsers, getAllUsers } = require('../controllers/usersController')
const {isLogin} = require("../middlewares/isLogin")

router.post('/usuarios', postUsers);
router.get('/usuarios', isLogin, getAllUsers)

module.exports = router;