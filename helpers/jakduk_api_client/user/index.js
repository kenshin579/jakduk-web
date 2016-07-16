'use strict';

var rest = require('restler');
var querystring = require('querystring');

module.exports = function(ApiClient) {
  var callback = ApiClient.prototype._callback;

  ApiClient.prototype.profile = function() {
    return new Promise(function(resolve) {
      rest.json(this.serverUrl + '/user/profile/me', null, {
        headers: {
          Cookie: this.session
        }
      }).on('complete', callback.bind(null, resolve));
    }.bind(this))
  };
};