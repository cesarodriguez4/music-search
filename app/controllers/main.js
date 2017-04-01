export default function ($query, $http, ngDialog, $scope) {
	var self = this;
	self.squares = '';
	self.albums = '';
	self.artists = '';
	self.albumIcon = 'assets/images/album-icon@2x.png';
	self.artistIcon = 'assets/images/artist-icon@2x.png';
	self.shownum = 6;

	$scope.albumName = '';
	$scope.albumTracks = [];
	$scope.albumImg = '';
	$scope.artistName = '';
	$scope.artistImg = '';
	$scope.artistAlbums = [];

	self.sendQuery = (string) => {
		var href = $query.query(string);
		$http({method:'GET',url: href})
		.then((response) => {
			console.log(response.data);
			self.albums = response.data.albums.items;
			self.artists = response.data.artists.items;
		}, (error) => {
			self.squares = 'Sorry, something went wrong x(';
		});
	};
	self.modalAl = (href) => {
		$http({method: 'GET', url:href})
		.then((response) => {
			console.log(response);
			var album = response.data;
			$scope.albumName = album.name;
			$scope.albumImg = album.images[0].url;
			$scope.albumTracks = album.tracks.items;
		});
		ngDialog.open({ template: '../views/album.html', 
			className: 'ngdialog-theme-default', 
			scope: $scope });
	};
	self.modalAr = (id, artistName, img) => {
		var href = 'https://api.spotify.com/v1/artists/'+id+'/albums';
		console.log(href);
		$http({method: 'GET', url:href})
		.then((response) => {
			console.log(response);
			var artist = response.data;
			$scope.artistName = artistName;
			$scope.artistImg = img;
			$scope.artistAlbums = artist.items;
		});
		ngDialog.open({ template: '../views/artist.html', 
			className: 'ngdialog-theme-default', 
			scope: $scope });
	};

}