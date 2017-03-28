import './scss/app.scss';
import angular from 'angular';
import mainController from './controllers/main';


export default angular.module('app', [])
	.controller('main', mainController);