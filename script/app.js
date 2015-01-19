define(['classutil', 'ngapp',
    'modulemanager', 'commandmanager', 'gis2dmodule'],
    function (classUtil, ngApp,
        ModuleManager, CommandManager, Gis2dModule) {
        var _that;
        var _app = function () {
            _that = this;
            this.commandMgr = new CommandManager();
            this.moduleMgr = new ModuleManager();

            this.ngApp = ngApp;
        }

        _app.prototype.run = function () {
            this.ngApp
                .config(function ($routeProvider) {
                    $routeProvider
                        .when('/ol', {
                            templateUrl: 'script/gis2d/view/gispage.html',
                            controller: 'appInitController',
                        })
                        .otherwise({
                            redirectTo: '/',
                        });
                })
                .controller('appInitController',
                    function ($rootScope) { 
                        $rootScope.commands = _that.commandMgr;
                        _that.init(); 
                    });
        }

        _app.prototype.init = function () {
            this.moduleMgr.add(new Gis2dModule());
            this.moduleMgr.init();
        }

        return _app;
    });