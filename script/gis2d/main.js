require.config({
    paths: {
        gis2dmodule: 'gis2d/gis2dmodule',
        ////map
        map: 'gis2d/map/map',
        olmap: 'gis2d/map/ol/olmap',
        bmap: 'gis2d/map/baidu/bmap',
        ////layer
        layer: 'gis2d/layer/layer',
        oltilelayer: 'gis2d/layer/ol/oltilelayer',
        olsourceprovider: 'gis2d/layer/ol/olsourceprovider',
        ////controller 

    },
    shim: {
        ol: {
            exports: 'ol',
        }
    },
});

require([],
    function () { });