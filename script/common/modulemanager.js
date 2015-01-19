define(['classutil'],
    function (classUtil) {
        var _moduleManager = function (options) {
            this.modules = [];
        }
          
        _moduleManager.prototype.add = function (module) {
            this.modules.push(module); 
        }

        _moduleManager.prototype.configure = function () {
            for (var i = 0; i < this.modules.length; i++) {
                this.modules[i].configure();
            }
        }
        _moduleManager.prototype.createService = function () {
            for (var i = 0; i < this.modules.length; i++) {
                this.modules[i].createService();
            }
        }

        _moduleManager.prototype.createCommand = function () {
            for (var i = 0; i < this.modules.length; i++) {
                this.modules[i].createCommand();
            }
        }

        _moduleManager.prototype.createView = function () {
            for (var i = 0; i < this.modules.length; i++) {
                this.modules[i].createView();
            }
        }

        _moduleManager.prototype.init = function () {
            this.configure();
            this.createService();
            this.createCommand();
            this.createView();
        }

        return _moduleManager;
    });