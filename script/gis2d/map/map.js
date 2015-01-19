define([],
    function () {
        var _map = function () {
            this.layers = [];
            this.tool = null;
            this.cursor = null;
        }

        _map.prototype.init = function () {

        }

        _map.prototype.bindElement = function (id) {

        }

        _map.prototype.onMouseDown = function (e) {
            if (this.tool) {
                this.tool.onMouseDown(e);
            }
        }

        _map.prototype.onMouseMove = function (e) {
            if (this.tool) {
                this.tool.onMouseMove(e);
            }
        }

        _map.prototype.onMouseUp = function (e) {
            if (this.tool) {
                this.tool.onMouseUp(e);
            }
        }

        _map.prototype.addLayer = function (layer) {
            this.layers.push(layer);
        }

        _map.prototype.removeLayer = function (layer) {
            var idx = this.layers.indexOf(layer);
            this.layers.splice(idx, 1);
        }

        _map.prototype.findLayerByName = function (name) {
            for (var i = 0; i < this.layers.length; i++) {
                var lyr = this.layers[i];
                if (lyr.name = name) {
                    return lyr;
                }
            }
            return null;
        }

        _map.prototype.findLayerById = function (id) {
            for (var i = 0; i < this.layers.length; i++) {
                var lyr = this.layers[i];
                if (lyr.id = id) {
                    return lyr;
                }
            }
            return null;
        }

        _map.prototype.setCurrentTool = function (tool) {
            if (this.tool) {
                this.tool.deactivate();
            }

            this.tool = tool;
            this.cursor = tool.cursor;
        }

        return _map;
    });