/**
 * Created by btrabon on 6/19/16.
 */

var User = require('../model/user');
var jwt = require('jwt-simple');
var config = require('../config/database');

var functions = {
    authenticate: function(request, response) {
        User.findOne({
            name: request.body.name
        }, function(err, user) {
            if (err) throw err;
            if (!user) {
                return response.status(403).send({success: false, msg: 'Authentication failed, user not found.'});
            } else {
                user.comparePassword(request.body.password, function(err, isMatch) {
                    console.log(isMatch);
                    if (isMatch && !err) {
                        var token = jwt.encode(user, config.secret);
                        response.json({success: true, token: token});
                    } else {
                        return response.status(403).send({success: false, msg: 'Authentication failed'});
                    }
                });
            }
        })
    }
};

module.exports = functions;