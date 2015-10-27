exports.render = function (request, response) {
	console.log('Rendering index');

	console.log(request.session);

	if (request.session.lastVisit) {
		console.log('Last visit: ' + request.session.lastVisit);
	}

	request.session.lastVisit = new Date();

	response.render('index', {
		title: 'Hello World'
	});
};