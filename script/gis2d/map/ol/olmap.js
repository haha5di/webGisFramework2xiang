/// <reference path="../../../util/classutil.js" />
define(['map', 'classutil', 'ol'],
    function (Map, classUtil, ol) {
        var _olmap = function (parameter) {
            var par = parameter || {};
            Map.call(this, par);

            this.provider = new ol.Map({
                view: new ol.View({
                    center: [0, 0],
                    zoom: 1
                })
            });
        }

        classUtil.extend2(_olmap, Map);

        _olmap.prototype.addLayer = function (layer) {
            this.uber.addLayer.call(this, layer);

            this.provider.addLayer(layer.provider);
        }

        _olmap.prototype.bindElement = function (id) {
            this.provider.setTarget(id);
        }

        return _olmap;
    });