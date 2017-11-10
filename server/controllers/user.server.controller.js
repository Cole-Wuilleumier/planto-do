// grab the user model
var User = require('../models/user.model');



exports.addUser = (res, req) => {
    // create a new user
    var newUser = User({
    name: 'Peter Quill',
    username: 'starlord55',
    password: 'password',
    admin: true
    });



    // save the user
    newUser.save(function(err) {
    if (err) throw err;

    console.log('User created!');
    });
}