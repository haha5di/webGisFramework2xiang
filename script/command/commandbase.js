define([],
    function () {
        var _command = function (options) {
            var opts = options || {};
            this.id = opts.id;
            this.name = opts.name;

            this.hook = null;
            this.enabled = true;
            this.checked = true;
            this.visitor = null;
        }

        _command.prototype.onCreate = function (hook) {
            this.hook = hook;
        }

        _command.prototype.onClick = function (parameter) {

        }

        _command.prototype.onEnanled = function () {
            return this.enabled;
        }

        _command.prototype.onChecked = function () {
            return this.checked;
        }

        _command.prototype.accept = function () {
            if (this.visitor) {
                this.visitor.visit(this);
            }
        }
    });