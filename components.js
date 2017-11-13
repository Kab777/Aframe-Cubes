AFRAME.registerComponent('box', {
    schema: {
        scale: {type: 'number', default: 1},
        color: {type: 'color', default: '#AAA'}
    },
    /**
     * Initial creation and setting of the mesh.
     */
    multiple: true,
    init: function () {
        var data = this.data;
        var el = this.el;

        var geometry = new THREE.BoxBufferGeometry(data.scale, data.scale, data.scale);
        var edges = new THREE.EdgesGeometry(geometry);
        var cube = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: data.color}));
        el.setObject3D('box', cube);
    }
});