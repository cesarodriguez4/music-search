export default function(href, $http, self) {
	var href = $query.query(string);
	$http({method:'GET',url: href})
	.then((response) => {
		console.log(response.data);
		self.albums = response.data.albums.items;
		self.artists = response.data.artists.items;
	}, (error) => {
		self.squares = 'Sorry, something went wrong x(';
	});
}