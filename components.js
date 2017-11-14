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


function load() {
    var sceneEl = document.querySelector('a-scene');
    for (i = 0; i < 10; i++) {
        var entityEl = document.createElement('a-entity');
        entityEl.setAttribute('position', {x: 0, y: 2 * i, z: -5});
        entityEl.setAttribute('mixin', 'cube_material cube_rotate_1');
        sceneEl.appendChild(entityEl);
    }

    for (i = -5; i < 6; i++) {
        var entityEl = document.createElement('a-entity');
        entityEl.setAttribute('position', {x: i * 2, y: 0, z: -5});
        entityEl.setAttribute('mixin', 'cube_material cube_rotate_2 ');
        sceneEl.appendChild(entityEl);
    }
}

window.onload = load;

