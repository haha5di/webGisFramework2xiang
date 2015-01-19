
define([], function () {
    var _modulebase = function (options) {
        var opts = options || {};
        this.container = opts.container || {};
        this.cmds = opts.cmds;
        ////link to angular
        this.app = opts.app;
    }

    _modulebase.prototype.configure = function () { } 
    _modulebase.prototype.createService = function () { }
    _modulebase.prototype.createCommand = function () { }
    _modulebase.prototype.createView = function () { }

    _modulebase.prototype.regist = function (name, obj) {
        this.container[name] = obj;
        this.app.addService(name, obj);
    }
    _modulebase.prototype.resolve = function (name) {
        return this.container[name];
    }
    _modulebase.addCommand = function (cmd) {
        this.cmds.add(cmd);
    }
    _modulebase.prototype.addView = function (name, url, controller) {
        this.app.addView(name, url, controller);
    }

    return _modulebase;
});