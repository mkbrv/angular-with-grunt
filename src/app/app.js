(function () {
    'use strict';


    define([
        'angular',
        'home/home-ctrl',
        'login/login-ctrl',
        'resume/resume-module',
        'services/login-service',
        'common/vis/graph.directive',
        'common/jmpress/cube.directive',
        'common/jmpress/about.slider.directive',
        'common/directive/notification',
        'bootstrap',
        'angular-ui-router',
        'angular-animate'
    ], function (angular, HomeController, LoginCtrl, resumeModule, loginService, graphDirective,
                 cube, aboutSlider, notification) {

        var app = angular.module('myApp', ['ui.router', 'ngAnimate', resumeModule.moduleName]);
        app.init = function () {
            angular.bootstrap(document, ['myApp']);
        };

        app.service("LoginService", loginService);
        app.directive('graphDirective', graphDirective);
        app.directive('impressCube', cube);
        app.directive('aboutSlider', aboutSlider);
        app.directive('appNotification', notification);
        app.controller("HomeCtrl", HomeController);
        app.controller("LoginCtrl", LoginCtrl);

        app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise('home');
            $urlRouterProvider.when("", '/');

            $locationProvider
                .hashPrefix('!');

            $stateProvider
                .state('home', {
                    url: "/",
                    templateUrl: "app/home/index.html",
                    controller: "HomeCtrl"
                })
                .state('about', {
                    url: "/about",
                    controller: "HomeCtrl",
                    templateUrl: "app/home/home.html"
                })
                .state('cube', {
                    url: "/cube",
                    templateUrl: "app/cube/cube.html"
                })
            ;
        });


        return app;
    });
}());