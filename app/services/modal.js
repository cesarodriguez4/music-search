export default function() {
	return {
		album: function(href, $http, $scope, ngDialog, modals) {
			$http({method: 'GET', url:href})
			.then((response) => {
			var album = response.data;
			$scope.albumName = album.name;
			$scope.albumImg = album.images[0].url;
			$scope.albumTracks = album.tracks.items;
		});
		ngDialog.open({ template: '../views/album.html', 
			className: 'ngdialog-theme-default', 
			scope: $scope });
		}, 
		artist: function(id, artistName, img, $http, $scope, ngDialog, modals) {
			var href = 'https://api.spotify.com/v1/artists/'+id+'/albums';
			$http({method: 'GET', url:href})
			.then((response) => {
				var artist = response.data;
				$scope.artistName = artistName;
				$scope.artistImg = img;
				$scope.artistAlbums = artist.items;
			});
			ngDialog.open({ template: '../views/artist.html', 
				className: 'ngdialog-theme-default', 
				scope: $scope });
		}
	}
}