/**
 * Hype Commerce
 *
 * @package		Hype
 * @version		0.0.1.0
 * @author		Hype Commerce Team <team@hypejs.com>
 * @copyright	Copyright (c) 2014, Hype Commerce, Inc. (http://www.hypejs.com/)
 * @license		http://www.hypejs.com/license
 */
 
var	fs = require('fs'),
	url = require('url'),
	path = require('path'),
	express = require('express'),
	app = express(),
	server = require('./Hype/Server')(app),
	hype = require('./Hype')(app);

module.exports = (function() {
	"use strict";

	hype.log('Preparing for launch');

	// Connect to mongo
	hype.connect();

	// Load core plugins
	hype.loadPlugins(path.resolve('./app/core/Plugins'));

	// Load third-party plugins
	fs.readdirSync(path.resolve('./app/plugins'), function(file) {
		hype.loadPlugins(path.resolve('./app/plugins/' + file));
	});

	// Start Hype
	hype.start();

	// Start the server
	server.start(app, express, hype);

	hype.log('Successfully launched your Hype Commerce store');
})();
