working_list = [function () { },
]

/* BASIC FUNCTIONS 
 * MOVE(N units) done.
 * TURN/ROTATE(AXIS,ANGLE) done. Only for X and Y or Lat and Long
 * UP/DOWN PEN(__no__args__) 
 * CURVE(ANGLE, RADIUS)
 * REPEAT(INSTANCES,COMMAND A, COMMAND B)
 * 
 * RENDER PREBUILTS ? (TARGET STRING) : TREE, LEAVES etc. : SEE 
 * 
 * RECORD COMMANDS TO RENDER WITH PREBUILT ?
 * 
 * SET_COLOR(#RRGGBB)
*/


turtle_heading = 0;


function template_base(keyword, params) {
	currentFunction = working_list[keyword];
	currentFunction(params);
	recomputePositions(); // Do something about the position of turtle
}



function postLoad() {
	debugger;
	console.log("Aloha")
	var geometry = new THREE.BoxGeometry();
	var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
	var cube = new THREE.Mesh(geometry, material);
	scene.add(cube);

	camera.position.z = 5;

	function animate() {
		requestAnimationFrame(animate);
		renderer.render(scene, camera);
	}

	animate();
}