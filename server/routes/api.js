const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {});

var post = require('../controllers/post.server.controller');
router.get('/posts', post.getPosts);
router.get('/post/:id', post.getPost);
router.post('/createPost', post.createPost);
router.put('/post/:id', post.updatePost);
router.delete('/post/:id', post.deletePost);


var user = require('../controllers/user.server.controller');
//router.get('/user/:id', user.getUser);
router.get('/addUser', user.addUser);
//router.put('/user/:id', user.updateUser);
//router.delete('/user/:id', user.deleteUser);


module.exports = router;