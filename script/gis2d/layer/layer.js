define([],
    function () {
        var _class = function (parmeter) {
            var par = parmeter || {};

            this.id = par.id;
            this.name = par.name;
        }

        return _class;
    });