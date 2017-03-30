export default function () {
	var result = {};
	function escape(s) {
		return s.replace(' ', '%20');
	}
	result.query = function(string) {
		console.log('string', string);
		var q = escape(string);
		console.log("https://api.spotify.com/v1/search?q="+q+"&type=artist,album");
		return "https://api.spotify.com/v1/search?q="+q+"&type=artist,album";
	}
	return result;
}