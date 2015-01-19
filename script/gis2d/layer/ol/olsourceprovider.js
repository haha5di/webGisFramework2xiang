define(['ol'],
    function (ol) {
        var _class = function (parmeter) {
            var par = parmeter || {};

            this.type = par.type;
            this.url = par.url;
        }

        _class.prototype.getSource = function () {
            var ret = {};
            switch (this.type) {
                case 'OSM':
                    ret = new ol.source.OSM();
                    break;
                case 'XYZ':
                    ret = new ol.source.XYZ({
                        url: this.url,
                    });
                    break;
                default:
                    break;
            }

            return ret;
        }

        return _class;
    });