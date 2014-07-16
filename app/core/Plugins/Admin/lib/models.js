var crypto = require('crypto');

module.exports = {
    /**
     * Admin User
     *
     * @var String username
     * @var String password
     * @var String firstname
     * @var String lastname
     * @var Date createdAt
     * @var Date updatedAt
     */
    AdminUser: {
        schema: {
            username: String,
            _password: {

            },
            firstname: String,
            lastname: String,
            createdAt: Date,
            updatedAt: Date
        },
        deps: {
            hasOne: {
                group: 'AdminGroup'
            },
            hasMany: {
                attributes: 'Attribute'
            }
        },
        methods: {
            authenticate: function(plainText) {
                return this.encryptPassword(plainText) === this._password.hashed;
            },
            makeSalt: function() {
                return Math.round((new Date().valueOf() * Math.random())) + '';
            },
            encryptPassword: function(password) {
                if (!password) {return '';}
                return crypto.createHmac('sha1', this._password.salt).update(password).digest( 'hex' );
            }
        },
        virtuals: {
            'password': {
                get: function() {
                    return this._password.plain
                },
                set: function(password) {
                    this._password.plain = password;
                    this._password.salt = this.makeSalt();
                    this._password.hashed = this.encryptPassword(password);
                }
            }
        }
    },

    /**
     * Admin Group
     *
     * @var String label
     * @var Permission permissions
     * @var Date createdAt
     * @var Date updatedAt
     */
    AdminGroup: {
        schema: {
            label: String,
            createdAt: Date,
            updatedAt: Date
        },
        deps: {
            hasMany: {
                permissions: 'Permission'
            }
        }
    }
};