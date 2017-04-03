export default function ($query, $http, ngDialog, $scope, modals) {
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

	self.modalAl =  function(href) {
		modals.album(href, $http, $scope, ngDialog, modals);
	}

	self.modalAr = function(id, artistName, img) {
		modals.artist(id, artistName, img, $http, $scope, ngDialog, modals);
	}

}