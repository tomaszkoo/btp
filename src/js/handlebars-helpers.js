Handlebars.registerHelper('with', function (context, options) {
	return options.fn(context);
});
Handlebars.registerHelper('list', function (context, options) {
	var ret = "<ul>";
	for (var i = 0, j = context.length; i < j; i++) {
		ret = ret + "<li>" + options.fn(context[i]) + "</li>";
	}
	return ret + "</ul>";
});
Handlebars.registerHelper('each', function (context, options) {
	var ret = "";
	for (var i = 0, j = context.length; i < j; i++) {
		ret = ret + options.fn(context[i]);
	}
	return ret;
});
Handlebars.registerHelper("ifMobile", function (options) {
	if (window.innerWidth < 768) {
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
});