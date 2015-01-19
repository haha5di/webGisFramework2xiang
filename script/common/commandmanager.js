define([],
    function () {
        var _commandManager = function (options) {
            var opts = options || {};
            this.commands = {};
        }

        _commandManager.prototype.add = function (name, cmd) {
            this.commands[name] = cmd;
        }

        _commandManager.prototype.onCreate = function (hook) {
            for (var i in this.commands) {
                i.onCreate(hook);
            }
        }

        _commandManager.prototype.active = function (name, parameter) {
            this.commands[name].onClick(parameter);
        }

        return _commandManager;
    });