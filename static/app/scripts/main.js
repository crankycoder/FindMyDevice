/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

'use strict';

require.config({
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    }
  },
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/underscore/underscore',
    text: '../bower_components/requirejs-text/text',
    mustache: '../bower_components/mustache/mustache',
    stache: '../bower_components/requirejs-mustache/stache',
    reconnectingWebsocket: '../bower_components/reconnectingWebsocket/reconnecting-websocket'
  }
});

require([
  'jquery',
  'backbone',
  'router',
  'collections/devices'
], function ($, Backbone, Router, Devices) {
  // Bring on the globals
  window.devices = new Devices();

  // Fetch devices from the server
  window.devices.fetch().then(function () {
    // Now that we have devices we can start
    Backbone.history.start();
  });
});
