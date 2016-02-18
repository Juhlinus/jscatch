// Try-Catch
var Code = {
	fire: function(func) {
		try {
			func();
		} catch(e) {
			window.location.href = "http://stackoverflow.com/search?q=[js]+" + e.message;
		}
	}
}

module.exports = Code;