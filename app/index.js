import './scss/normalize.scss';
import './scss/app.scss';
import angular from 'angular';
import query from './factory/query';
import mainController from './controllers/main';

export default angular.module('app', [])
	.factory('$query', query)
	.controller('main', ['$query', mainController])
	.directive('ngApp', () => {
		return {
			templateUrl: '../views/app.html'
		}
	})
	.directive('ngmain', () => {
		return {
			templateUrl: '../views/main.html'
		}
	})
	.directive('ngsearch', () => {
		return {
			templateUrl: '../views/search.html'
		}
	})
	.directive('ngresults', () => {
		return {
			templateUrl: '../views/results.html'
		}
	})
	.directive('ngempty', () => {
		return {
			templateUrl: '../views/empty.html'
		}
	})
	.directive('ngcontent', () => {
		return {
			templateUrl: '../views/content.html'
		}
	})
	.directive('ngfooter', () => {
		return {
			templateUrl: '../views/footer.html'
		}
	});

