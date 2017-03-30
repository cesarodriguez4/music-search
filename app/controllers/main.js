export default function ($query) {
	var self = this;
	self.q = '';
	self.sendQuery = function(string) {
		console.log('Hey');
		$query.query(string);
	};
}