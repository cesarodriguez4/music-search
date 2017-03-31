export default function () {
	var result = {};
	function escape(s) {
		return s.replace(/ /g, '%20');
	}
	result.query = function(string) {
		var q = escape(string);
		return "https://api.spotify.com/v1/search?q="+q+"&type=artist,album";
	}
	return result;
}