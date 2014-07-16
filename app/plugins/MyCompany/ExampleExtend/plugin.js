module.exports = {
    name: 'ExampleExtend',
    enabled: true,
    depends: {
        'core': '>=1.0.0.0'
    },
    main: require('./lib/extend'),
    models: require('./lib/models'),
    //routes: require('./lib/routes'),
    //scripts: './lib/install',   // @kurt - auto-assume this will always be a folder, or should we write
                                // something like scripts: './lib/scripts/*' ? - it's assuming right now
    version: '0.0.0.1'
};