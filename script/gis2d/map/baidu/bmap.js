define(['map', 'classutil', 'baidumap'],
    function (Map, classUtil) {
        var _that;
        var _class = function (parameter) {
            _that = this;
            var par = parameter || {};
            Map.call(this, par); 

            _that.provider = new BMap.Map('map');
            var point = new BMap.Point(116.404, 39.915); // 创建点坐标
            _that.provider.centerAndZoom(point, 15);
            _that.provider.enableScrollWheelZoom();
        }
         
        classUtil.extend2(_class, Map);

        _class.prototype.addLayer = function (layer) {
            this.uber.addLayer.call(this, layer);

            //this.provider.addLayer(layer.provider);
        }

        _class.prototype.bindElement = function (id) {
            //this.provider.selectBaseElement($('#map')[0]);
        }

        return _class;
    });