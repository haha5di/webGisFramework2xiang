/**
 * Created by Xiangliubo on 2014/12/29.
 */
require.config({
    baseUrl: './script',
    packages: ['gis2d', 'common', 'ngcommon'],
    paths: {
        jquery: 'lib/jquery-1.11.2',
        domready: 'lib/domReady',
        angular: 'lib/angular.min',
        bootstrap: 'lib/bootstrap/js/bootstrap',
        ol: 'lib/ol',
        baidumap: 'lib/baidumap',
        ////util
        classutil: "util/classutil",
        app: 'app',
        ngapp: 'ngapp',
    },
    shim: {
        'angular': {
            deps: ['jquery'],
            exports: 'angular',
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap',
        },
        'baidumap': {
            export: 'baidumap',
        }
    },
});

require(['domready', 'angular', 'common', 'ngcommon', 'gis2d', 'app'],
    function (DomReady, angular, common, ngCommon, gis2d, app) {
        var app = new app();
        app.run();

        DomReady(function () {
            angular.bootstrap(document.documentElement, ['ngApp']);
        });
    });