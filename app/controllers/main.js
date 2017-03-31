export default function ($query, $http, ngDialog) {
	var self = this;
	self.squares = '';
	self.albums = '';
	self.artists = '';
	self.albumIcon = '../assets/images/album-icon@2x.png';
	self.sendQuery = (string) => {
		var href = $query.query(string);
		$http({method:'GET',url: href})
		.then((response) => {
			console.log(response.data);
			self.albums = response.data.albums.items;
			//self.artists = response.data.artists;
		}, (error) => {
			self.squares = 'Sorry, something went wrong x(';
		});
	};
	self.modal = (string) => {
		ngDialog.open({ template: '../views/album.html', className: 'ngdialog-theme-default' });
	};
}