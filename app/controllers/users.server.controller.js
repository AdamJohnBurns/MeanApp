var User = require('mongoose').model('User');

exports.create = function (request, response, next) {
	var user = new User(request.body);

	user.save(function (error) {
		if (error) {
			return next(error);
		} else {
			response.json(user);
		}
	})
};

exports.list = function (request, response, next) {
	User.find({}, function (error, users) {
		if (error) {
			return next(error);
		} else {
			response.json(users);
		}
	});
};

exports.read = function (request, response) {
	response.json(request.user);
};

exports.update = function (request, response, next) {
	User.findByIdAndUpdate(request.user.id, request.body, function (error, user) {
		if (error) {
			return next(error);
		} else {
			response.json(user);
		}
	});
};

exports.delete = function (request, response, next) {
	request.user.remove(function (error) {
		if (error) {
			return next(error);
		} else {
			response.json(request.user);
		}
	});
};

exports.userByID = function (request, response, next, id) {
	User.findOne({
		_id: id
	}, function (error, user) {
		if (error) {
			return next(error);
		} else {
			request.user = user;
			next();
		}
	})
};