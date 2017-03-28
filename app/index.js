import './scss/normalize.scss';
import './scss/app.scss';
import angular from 'angular';
import mainController from './controllers/main';

export default angular.module('app', [])
	.controller('main', mainController)
	.directive('ngApp', function() {
		return {
			templateUrl: '../views/app.html'
		}
	});