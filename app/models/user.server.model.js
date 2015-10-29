var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var UserSchema = new Schema({
	firstName: String,
	lastName: String,
	email: {
		type: String,
		index: true,
		match: /.+\@.+\..+/
	},
	username: {
		type: String,
		trim: true,
		unique: true,
		required: true
	},
	password: {
		type: String,
		validate: [
			function (password) {
				return password.length >= 6;
			},
			'Password needs to be 6 characters or more'
		]
	},
	created: {
		type: Date,
		default: Date.now
	},
	role: {
		type: String,
		enum: ['Admin', 'Owner', 'User']
	},
	website: {
		type: String,
		default: 'No website specified',
		set: function (url) {
			if (!url) {
				return url;
			} else {
				if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
					url = 'http://' + url;
				}
			}

			return url;
		},
		get: function (url) {
			if (!url) {
				return url;
			} else {
				if (url !== 'No website specified') {
					return url + '/testthing?ok=true';
				} else {
					return url;
				}
			}
		}
	}
});

UserSchema.virtual('fullName')
	.get(function () {
		return this.firstName + ' ' + this.lastName;
	})
	.set(function (fullName) {
		var splitName = fullName.split(' ');
		this.firstName = splitName[0] || '';
		this.lastName = splitName[1] || '';
	});

// Custom static method (one function on the entire UserSchema object)
UserSchema.statics.findOneByUsername = function (username, callback) {
	this.findOne({username: new RegExp(username, 'i')}, callback);
};

// Custom instance method (one function that runs on an individual object in the UserSchema object)
UserSchema.methods.authenticate = function (password) {
	return this.password === password;
};

UserSchema.set('toJSON', {
	getters: true
});

mongoose.model('User', UserSchema);