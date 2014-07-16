/**
 * Hype Commerce
 *
 * @package		Hype
 * @version		0.0.1.0
 * @author		Hype Commerce Team <team@hypejs.com>
 * @copyright	Copyright (c) 2014, Hype Commerce, Inc. (http://www.hypejs.com/)
 * @license		http://www.hypejs.com/license
 */
 
module.exports = {
	version: "1.0.0.0",								// Hype Version
	install: "Fri, 06 Jun 2014 12:30:23 +0000",		// May delete this line
	secret: "8e7be24bb81205f20befd8e65e21a596",		// Encryption string
	environment: "development",						// Runtime environment
	
	server: {
		development: {
			theme: "ractive",
			url: "http://127.0.0.1/",
			port: 4973, // "HYPE" on a phone keypad =)
			log: true,
			debug: true,
			admin: "supersecretarea", // url for the admin
			nodes: 2, // for clustering
			db: {
				type: "mongo",
				mongo: {
					host: "127.0.0.1",
					port: 27017,
					username: "",
					password: "",
					dbname: "hype_development"
				}
			},
			https: {
				port: 4443
			},
			session: {
				storage: "redis",
				redis: {
					host: "localhost",
					port: 6379,
					db: "hype_development",
					pass: "u2T2BvKcXXGk9pKXjfXw",
					secret: "XMGnKPtQEuZbWYWLp5CZ",
					cookie: { path: "/", maxAge: 3600000 }
				}
			}
		},

		staging: {
			theme: "ractive",
			url: "http://staging.hypecommerce.com/",
			port: 5000,
			admin: "admin",
			db: {
				type: "mongo",
				mongo: {
					host: "127.0.0.1",
					port: 27017,
					username: "",
					password: "",
					dbname: "hype_development"
				}
			},
			https: {
				port: 4443
			},
			session: {
				storage: "redis",
				redis: {
					host: "localhost",
					port: 6379,
					db: "hype_development",
					pass: "u2T2BvKcXXGk9pKXjfXw",
					secret: "XMGnKPtQEuZbWYWLp5CZ",
					cookie: { path: "/", maxAge: 3600000 }
				}
			}
		},

		production: {
			theme: "ractive",
			url: "http://www.hypecommerce.com/",
			port: 80,
			db: {
				type: "mongo",
				mongo: {
					host: "127.0.0.1",
					port: 27017,
					dbname: "hype_production"
				}
			},
			session: {
				storage: "redis"
			}
		}
	}
}