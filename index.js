module.exports = function(func) {
	try {
		func();
	} catch (e) {
		console.error("http://stackoverflow.com/search?q=[js]+" + e.message);
	}
};