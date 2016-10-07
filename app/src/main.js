import angular from 'angular';
import './css/main.css';
import app from './app.js';

angular.bootstrap(document, [app.name]); // app.name = name of angular component that comes from app.js
