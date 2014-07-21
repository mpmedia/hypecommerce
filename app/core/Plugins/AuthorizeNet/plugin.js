/**
 * Hype Commerce
 *
 * @package		Hype
 * @module		AuthorizeNet
 * @version		0.0.1.0
 * @author		Hype Commerce Team <team@hypejs.com>
 * @copyright	Copyright (c) 2014, Hype Commerce, Inc. (http://www.hypejs.com/)
 * @license		http://www.hypejs.com/license
 */

module.exports = {
    name: 'AuthorizeNet',
    enabled: true,
    depends: {
        'core': '>=1.0.0.0'
    },
    main: require('./lib/authorizenet'),
    //models: require('./lib/models'),
    version: '0.0.0.1'
};
