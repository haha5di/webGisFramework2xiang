define(['classutil', 'modulebase', 'bmap', 'oltilelayer'],
    function (classUtil, ModuleBase, BMap, OlTileLayer) {
        var _module = function (options) {

        }

        classUtil.extend2(_module, ModuleBase);

        _module.prototype.createService = function () {
            var map = new BMap();
            //var tileLyr = new OlTileLayer({
            //    type: 'OSM'
            //});

            //map.addLayer(tileLyr);
            map.bindElement('map');
        }

        return _module;
    });