
define(['layer', 'classutil', 'ol', 'olsourceprovider'],
    function (Layer, classUtil, ol, olSourceProvider) {
        var _class = function (parmeter) {
            var par = parmeter || {};
            Layer.call(this, par);

            var source = new olSourceProvider(par).getSource();
            this.provider = new ol.layer.Tile({
                source: source,
            });
        }

        classUtil.extend2(_class, Layer);

        return _class;
    });