let hammerTime = false;

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("battleArea"),
  antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight * .80);
renderer.setClearColor('rgb(2,15,20)',.15);
renderer.setPixelRatio( window.devicePixelRatio );

//Camera
const camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  1,
  2500
);

const scene = new THREE.Scene();

//Lights
let dirLight = new THREE.HemisphereLight( 0x0000ff, 0xffffff, .95 );
dirLight.position.set(1, 1, 1);

scene.add(dirLight);

const geometryHead = new THREE.BoxGeometry(100, 100, 90);
const geometryHandle = new THREE.BoxGeometry(100, 100, 10);

const material = new THREE.MeshPhongMaterial({
  color: 0xffffff,
  specular: 0xf9d71c,
  shininess: 255,
})

const material2 = new THREE.MeshPhongMaterial({
  color: 0xFF0000,
  specular: 0xFFD700,
  shininess: 255,
})

let meshHead = new THREE.Mesh(geometryHead, material);
let meshHandle = new THREE.Mesh(geometryHandle, material);
let meshHandle2 = new THREE.Mesh(geometryHandle, material);
let meshHandle3 = new THREE.Mesh(geometryHandle, material);
let meshHandle4 = new THREE.Mesh(geometryHandle, material);
let meshHandle5 = new THREE.Mesh(geometryHandle, material);

meshHead.position.set(0, 0, -1000);
meshHead.rotation.set(180, 180, 0);

meshHandle.position.set(125, -125, -1070);
meshHandle.rotation.set(180, 180, 0);

meshHandle2.position.set(125, 125, -1070);
meshHandle2.rotation.set(180, 180, 0);

meshHandle3.position.set(-125, 125, -1070);
meshHandle3.rotation.set(180, 180, 0);

meshHandle4.position.set(-125, -125, -1070);
meshHandle4.rotation.set(180, 180, 0);

// meshHandle5.position.set(75, -75, -1070);
// meshHandle5.rotation.set(180, 180, 0);

scene.add(meshHead, meshHandle, meshHandle2, meshHandle3, meshHandle4, meshHandle5);

renderer.render(scene, camera);

//RENDER LOOP
requestAnimationFrame(render);

function render() {


  if(hammerTime === true){
    meshHandle.rotation.x -= Math.PI / Math.sin(.1);
    meshHandle2.rotation.x += Math.PI / Math.sin(.1);

    meshHandle3.rotation.x -= Math.PI / Math.sin(.1);
    meshHandle4.rotation.x += Math.PI / Math.sin(.1);

    meshHandle5.rotation.x -= Math.PI / Math.sin(.1);

    dirLight.color.r = 1;
    dirLight.color.g = 0;
    dirLight.color.b = 0;
    dirLight.color.a = 1;

    dirLight.needsUpdate = true;
  } else {
    dirLight.color.r = 0;
    dirLight.color.g = 0;
    dirLight.color.b = 1;
    dirLight.color.a = .25;

    dirLight.needsUpdate = true;
   }


  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

const setHammerActive = () => {
  if(hammerTime === true){
    hammerTime = false;
  } else {
    hammerTime = true;
  }
}