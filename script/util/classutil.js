define(function () {
    var _classUtil = function () { }

    _classUtil.extend = function (child, parent) {
        var F = function () { };
        F.prototype = par.prototype;
        child.prototype = new F();
        child.prototype.constructor = child;
        child.uber = parent.prototype;
    }

    _classUtil.extend2 = function (child, parent) {
        var p = parent.prototype;
        var c = child.prototype;
        for (var i in p) {
            c[i] = p[i];
        }
        c.uber = p;
    }

    return   _classUtil;
});