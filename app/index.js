import './scss/normalize.scss';
import './scss/app.scss';
import '../node_modules/ng-dialog/css/ngDialog.css';
import '../node_modules/ng-dialog/css/ngDialog-theme-default.css';
import angular from 'angular';
import ngDialog from 'ng-dialog';
import query from './factory/query';
import mainController from './controllers/main';

export default angular.module('app', ['ngDialog'])
	.factory('$query', query)
	.controller('main', ['$query', '$http', 'ngDialog', '$scope', mainController])
	.directive('ngApp', () => {
		return {
			templateUrl: 'views/app.html'
		}
	})
	.directive('ngmain', () => {
		return {
			templateUrl: 'views/main.html'
		}
	})
	.directive('ngsearch', () => {
		return {
			templateUrl: 'views/search.html'
		}
	})
	.directive('ngresults', () => {
		return {
			templateUrl: 'views/results.html'
		}
	})
	.directive('ngempty', () => {
		return {
			templateUrl: 'views/empty.html'
		}
	})
	.directive('ngcontent', () => {
		return {
			templateUrl: 'views/content.html'
		}
	})
	.directive('ngfooter', () => {
		return {
			templateUrl: 'views/footer.html'
		}
	});

