/**
 * Hype Commerce
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Hype Commerce Creative Commons License that is bundled with
 * this package in the file LICENSE.txt. It is also available through the world-wide-web at this
 * URL {@link http://www.hypecommerce.com/license}. If you did not receive a copy of the license
 * and are unable to obtain it through the world-wide-web, please send an email to
 * {@link mailto:license@hypecommerce.com} so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Hype Commerce to newer versions in the
 * future. If you wish to customize Hype Commerce for your needs please refer to
 * {@link http://www.hypecommerce.com/} for more information.
 *
 * @package		Hype
 * @version		0.0.1.0
 * @author		Hype Commerce Team <team@hypecommerce.com>
 * @copyright	Copyright (c) 2014, Hype Commerce, Inc. (http://www.hypecommerce.com/)
 * @license		http://www.hypecommerce.com/license
 */

// Define variables
var config	= require("./app/config.json"),
	modules	= require('./app/modules.json'),
	express = require("express"),
	routes = require("./routes.js"),
	dbs = require("./libs/connectDbs.js"),
	app = express();

// Grab the environment
var env = config.hype.environment;

// Set our server
var hype = config.server[env];

// Set the url and port
hype.port = process.env.PORT || hype.port;
hype.url = process.env.URL || hype.url;

// Configure express
app.configure(function(){

	app.use(express.favicon());
	app.use(express.logger("dev"));

	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.use(express.methodOverride());

	app.use(app.router);

	app.use(express["static"]('./public'));

});

// Configure development environment
app.configure("development", function() {
    app.use(express.errorHandler({
        dumpException: true,
        showStack: true
    }));
});

// Connect to the database
dbs.connect(config.dbs, function(errs, clients){
	var db;
	if(errs){
		for(db in errs){
			console.log("Error: db[" + db + "] " + errs[db]);
		}
	}else{
		routes.load(app, clients);
		app.listen(hype.port);
		console.log("App listening on port: " + hype.port);
	}
});