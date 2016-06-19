/**
 * Created by btrabon on 6/18/16.
 */

var mongoose = require('mongoose');
var express = require('express');
var morgan = require('morgan');
var cors = require('cors');
var passport = require('passport');
var bodyParser = require('body-parser');
var routes = require('./routes/routes');
var config = require('./config/database');
var User = require('./model/user');

mongoose.connect(config.database);
mongoose.connection.on('open', function() {
    console.log('mongo is open');
    var app = express();
    app.use(cors());
    app.use(morgan('dev'));
    app.use(passport.initialize());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    app.use(routes);

    // Uncomment when we need to create a new test user
    // var testUser = new User({
    //     name: 'somename',
    //     password: 'somepassword'
    // });
    //
    // testUser.save(function(err, data) {
    //     if (err) console.log(err);
    //     else console.log('Success: ' + data);
    // });

    require('./config/passport')(passport);



    app.listen(3333, function (err) {
        console.log('server is running');
    });
});