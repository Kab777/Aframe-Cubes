const tetrahedronVertices = [
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 0, 40),
    new THREE.Vector3(0, 30, 0),
    new THREE.Vector3(40, 0, 0)
]

const cuboidVertices = [
    new THREE.Vector3(75, 0, 0),
    new THREE.Vector3(75, 0, 40),
    new THREE.Vector3(100, 0, 0),
    new THREE.Vector3(100, 0, 40),

    new THREE.Vector3(75, 30, 0),
    new THREE.Vector3(75, 30, 40),
    new THREE.Vector3(100, 30, 0),
    new THREE.Vector3(100, 30, 40)
]

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
    },

    update: function (oldData) {
        var data = this.data;
        var el = this.el;
        // If `oldData` is empty, then this means we're in the initialization process.
        // No need to update.
        if (Object.keys(oldData).length === 0) {
            return;
        }
    }
});

AFRAME.registerComponent('cone', {
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

        var geometry = new THREE.ConeBufferGeometry(data.scale, 4 * data.scale, 5 * data.scale);
        var edges = new THREE.EdgesGeometry(geometry);
        var cone = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: data.color}));
        el.setObject3D('cone', cone);
    },

    update: function (oldData) {
        var data = this.data;
        var el = this.el;
        // If `oldData` is empty, then this means we're in the initialization process.
        // No need to update.
        if (Object.keys(oldData).length === 0) {
            return;
        }
    }
});

AFRAME.registerComponent('dodecahedron', {
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

        var geometry = new THREE.DodecahedronBufferGeometry(data.scale);
        var edges = new THREE.EdgesGeometry(geometry);
        var dodecahedron = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: data.color}));
        el.setObject3D('dodecahedron', dodecahedron);
    },

    update: function (oldData) {
        var data = this.data;
        var el = this.el;
        // If `oldData` is empty, then this means we're in the initialization process.
        // No need to update.
        if (Object.keys(oldData).length === 0) {
            return;
        }
    }
});

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const shapes = ["cube_material", "cone_material", "dodecahedron_material"];


function findPointOnTheLine(start, end, scale) {
    return new THREE.Vector3(start.x + scale * (end.x - start.x), start.y + scale * (end.y - start.y), start.z + scale * (end.z - start.z));
}

var result_points = [];


function buildTetrahedron(vertices) {
    let point_x = vertices[0];
    let point_y = vertices[1];
    let point_z = vertices[2];
    let peak = vertices[3];
    result_points.push([point_x, point_y]);
    result_points.push([point_x, point_z]);
    result_points.push([point_y, point_z]);

    result_points.push([point_x, peak]);
    result_points.push([point_y, peak]);
    result_points.push([point_z, peak]);
}

// Drawing line method
function buildCuboid(vertices) {
    let point_1 = vertices[0];
    let point_2 = vertices[1];
    let point_3 = vertices[2];
    let point_4 = vertices[3];
    let point_5 = vertices[4];
    let point_6 = vertices[5];
    let point_7 = vertices[6];
    let point_8 = vertices[7];

    // base rectangle
    result_points.push([point_1, point_2]);
    result_points.push([point_1, point_3]);
    result_points.push([point_2, point_4]);
    result_points.push([point_3, point_4]);

    // vertical lines
    result_points.push([point_1, point_5]);
    result_points.push([point_2, point_6]);
    result_points.push([point_3, point_7]);
    result_points.push([point_4, point_8]);

    result_points.push([point_5, point_6]);
    result_points.push([point_5, point_7]);
    result_points.push([point_6, point_8]);
    result_points.push([point_7, point_8]);
}

// function buildCuboid(width, height, depth, start) {
//     const geometry = new THREE.BoxGeometry(width, height, depth);
//     const vertices = geometry.vertices;
//     let point_1 = vertices[0];
//     let point_2 = vertices[1];
//     let point_3 = vertices[2];
//     let point_4 = vertices[3];
//     let point_5 = vertices[4];
//     let point_6 = vertices[5];
//     let point_7 = vertices[6];
//     let point_8 = vertices[7];
//     console.log(point_1);
//
//     // base rectangle
//     result_points.push([point_1, point_2]);
//     result_points.push([point_1, point_3]);
//     result_points.push([point_2, point_4]);
//     result_points.push([point_3, point_4]);
//
//     // vertical lines
//     result_points.push([point_1, point_5]);
//     result_points.push([point_2, point_6]);
//     result_points.push([point_3, point_7]);
//     result_points.push([point_4, point_8]);
//
//     result_points.push([point_5, point_6]);
//     result_points.push([point_5, point_7]);
//     result_points.push([point_6, point_8]);
//     result_points.push([point_7, point_8]);
// }

var shape_arr = [];


function build3dObjects(type, vertices) {
    switch (type) {
        case 'tetrahedron':
            buildTetrahedron(vertices);
            break;
        case 'cuboid':
            buildCuboid(vertices);
            break;
        default:
            return;
    }
}


build3dObjects('tetrahedron', tetrahedronVertices);
build3dObjects('cuboid', cuboidVertices);

var density_scale = 0.5; // how many points are there between 2 unit point

for (let s of result_points) {
    let distance = s[0].distanceTo(s[1]);
    let scale_unit = 1 / (distance * density_scale);
    for (i = 0; i <= 1; i += scale_unit) {
        let point = findPointOnTheLine(s[0], s[1], i);
        shape_arr.push(point);
    }
}


// for (i = 0; i < 10; i++) {
//     let p = new Point(0, 2 * i, -5);
//     let p_1 = new Point(2 * i, 0, -5 + 1.5 * i);
//     let p_2 = new Point(-1.5 * i, 0, -5 + 2 * i);
//     shape_arr.push(p);
//     shape_arr.push(p_1);
//     shape_arr.push(p_2);
// }

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
}

function load() {
    // shuffle(shape_arr);
    let sceneEl = document.querySelector('a-scene');
    setInterval(function () {
        let entityEl = document.createElement('a-entity');
        let start_x = randomIntFromInterval(-80, 80);
        let start_z = randomIntFromInterval(-25, 25);
        const entity_shape = 'cube_material' //shapes[randomIntFromInterval(0, shapes.length - 1)];
        if (shape_arr.length > 0) {
            let point_value = shape_arr.pop();
            entityEl.setAttribute('position', {x: start_x, y: 80, z: start_z});
            entityEl.setAttribute('mixin', `${entity_shape} cube_rotate_1`);
            entityEl.setAttribute('animation__2', `property: position; easing:linear; dur: 4000; to: ${point_value.x} ${point_value.y} ${point_value.z};`);
            sceneEl.appendChild(entityEl);
        }

    }, 10);

    // animation falling
    // setInterval(function () {
    //     var entityEl = document.createElement('a-entity');
    //     let start_x = randomIntFromInterval(-80, 80);
    //     let start_z = randomIntFromInterval(-25, 25);
    //     const entity_shape = randomIntFromInterval(0, shapes.length - 1);
    //
    //
    //     entityEl.setAttribute('position', {x: start_x, y: 80, z: start_z});
    //     entityEl.setAttribute('mixin', `${shapes[entity_shape]} cube_rotate_1`);
    //     entityEl.setAttribute('animation__2', `property: position; easing:linear; dur: 5000; to: ${start_x} -50 ${start_z};`);
    //     entityEl.addEventListener('click', function () {
    //         console.log('clickasdsad');
    //     });
    //     sceneEl.appendChild(entityEl);
    // }, 500);

    // for (i = 0; i < 10; i++) {
    //     var entityEl = document.createElement('a-entity');
    //     entityEl.setAttribute('position', {x: 0, y: 2 * i, z: -5});
    //     entityEl.setAttribute('mixin', 'cube_material cube_rotate_1 cube_falling');
    //     entityEl.addEventListener('click', function () {
    //         console.log('clickasdsad');
    //     });
    //     sceneEl.appendChild(entityEl);
    // }
}

window.onload = load;

