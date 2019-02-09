var express = require('express');
var router = express.Router();
const {getAllUsers, getOneUser, editOneUser, addNewUser} = require('../db/queries/userQueries.js')

/* GET users listing. */
router.get('/', getAllUsers)
router.get('/:id',getOneUser)
router.put('/:id', editOneUser)
router.post('/', addNewUser)

module.exports = router;
