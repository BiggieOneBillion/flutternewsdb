const express = require('express')
const {createUser,logInUser} = require('../controller/userAuth')
const {deleteSavedPost, getSavedPost} = require('../controller/post')

const route = express.Router();

route.post('/user', createUser);

route.post('/user/login', logInUser);

route.get('/user/:id', getSavedPost);

route.delete('/user/:id', deleteSavedPost);

module.exports = route

