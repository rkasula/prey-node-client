"use strict";

////////////////////////////////////////////
// (c) 2015 - Fork Ltd.
// By Mauricio Schneider - http://preyproject.com
// GPLv3 Licensed
////////////////////////////////////////////

var exec = require('child_process').exec,
    cmd = 'ls /home/';

module.exports.get_users_list = function(cb) {
  exec(cmd, function(err, stdout) {
    // stdout format: 'Guest\nShared\nsomeuser\n'
    cb(err, stdout.split("\n").slice(0, -1));
  });
};