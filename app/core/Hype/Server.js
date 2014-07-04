/**
 * Express JS logic
 *
 *
 */
var Server,
	_ = require('underscore');

module.exports = function(Hype) {
	
	Server = function() {
		this.start = function(app, express, Hype) {
			var self = this,
				r,
				route,
				routeMethod,
				routeCallback;

			Hype.log('Preparing the server...');

			var readAndSetRoutes = function() {

				Hype.log("Setting initial routes...");

				_(Hype.routes).each(function(route, routeName) {

					// routeName is the object key, route is the object value

					// log the route addition
					Hype.log('Adding ' + route.method[0].toUppercase + route.method.slice(1) + ' route: ' + routeName)

					// using array notation to call the appropriate method
					app[route.method](routeName, route.callback);
				});

				Hype.log("Done setting routes");
			};

			app.configure(function(){
				app.use(express.cookieParser());
				app.settings.env = Hype.env || 'development';
				app.use(app.router);
				app.use(express.favicon());
				app.use(express.logger("dev"));
				app.engine('html', require('ejs').renderFile);
				app.set('views', Hype.themePath);

				// Render the theme path
				app.get('/', function (req, res) {
					res.render(Hype.themePath + '/index.html');
				});

				// Add the admin routes
				// These should be required from ./admin.js
				// app.get('/' + Hype.configuration.admin, Hype.Admin.requiredAuth(), Hype.Admin.index);
				// app.get('/' + Hype.configuration.admin + '/login', Hype.Admin.login);
				// app.post('/' + Hype.configuration.admin + '/login', Hype.Admin.loginPost);
				// app.use(express.static(__dirname + '/admin/static'));

				// This requires the Hype object which we don't have yet
				readAndSetRoutes();

				// Setup a custom 404 page
				app.use(function(req, res, next){
					res.status(404);

					// respond with html page
					if (req.accepts('html')) {
						res.render(Hype.themePath + '/404.html', { url: req.url });
						return;
					}

					// respond with json
					if (req.accepts('json')) {
						res.send({ error: 'Not found' });
						return;
					}
				});

				app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));
			});

			//Hype.log("Starting server...");
			app.listen(Hype.configuration.port, function() {
				Hype.log('Express server listening on port ' + Hype.configuration.port + ' in ' + 	app.settings.env + ' mode');
			});
		}
	}
	
	return new Server();
}