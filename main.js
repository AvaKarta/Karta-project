
"use strict"
import * as THREE from 'three'; 
import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from './node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { FlyControls } from './node_modules/three/examples/jsm/controls/FlyControls.js'

const GLTF = new GLTFLoader();

const loader =  new THREE.TextureLoader()

const scene = new THREE.Scene();
scene.background = new THREE.CubeTextureLoader().setPath( 'Bilder/skyimage/').load(['Daylight Box_Right.jpg','Daylight Box_Left.jpg','Daylight Box_Top.jpg','Daylight Box_Bottom.jpg','Daylight Box_Front.jpg','Daylight Box_Back.jpg'])

let height = window.innerHeight * 0.9

const camera = new THREE.PerspectiveCamera(75,window.innerWidth / height, 0.1, 10000);
camera.position.set(0,30,0)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
})

renderer.setPixelRatio( window.devicePixelRatio); 
renderer.setSize(window.innerWidth, window.innerHeight * 0.9)

camera.position.setZ(30)

const grass = loader.load('/Bilder/grass.jfif')
grass.wrapS = THREE.RepeatWrapping;
grass.wrapT = THREE.RepeatWrapping;
grass.repeat.set( 64, 64 );

const fieldPlane = new THREE.PlaneGeometry(10000,10000)
const fieldTexture = new THREE.MeshStandardMaterial({ map: grass})
const field = new THREE.Mesh(fieldPlane,fieldTexture)
field.rotation.x -= Math.PI/2
field.position.set(0,-4,0)
scene.add(field)
console.log(window.innerWidth)

// const pointLight = new THREE.PointLight(0xffffff,1)
// pointLight.position.set(200,100,200)
// const pointLight2 = new THREE.PointLight(0xffffff,1)
// pointLight2.position.set(-500,50,-200)


// scene.add(pointLight)
// scene.add(pointLight2)


// const hemisphereLight = new THREE.HemisphereLight(); 
// scene.add(hemisphereLight)


const hlight = new THREE.HemisphereLight( 0xffeeb1, 0x080820, 1 );
scene.add( hlight );


// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(50, 50);
// scene.add(lightHelper,gridHelper)

const oControls = new OrbitControls(camera, renderer.domElement);
oControls.minPolarAngle = 0;
oControls.maxPolarAngle =  Math.PI * 0.5;

// const fControls = new FlyControls( camera, renderer.domElement);
// fControls.movementSpeed = 30;
// fControls.rollSpeed = Math.PI / 6;
// fControls.dragToLook = true;


GLTF.load('/3D-modeler/plan2.glb', function (gltf){
  scene.add( gltf.scene);
}, undefined, function(error){
  console.error(error);
});




// function addStar() {
//   const geometry = new THREE.SphereGeometry(0.25, 24, 24);
//   const material = new THREE.MeshStandardMaterial({ color: 0x0FFFFFF});
//   const star = new THREE.Mesh( geometry, material);

//   const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ) );

//   star.position.set(x, y, z);
//   scene.add(star)
// }

// Array(200).fill().forEach(addStar)

// const spaceTexture = new THREE.TextureLoader().load('blueSpace.jpg')
// scene.background = spaceTexture



// const ft = loader.load('../skyimage/Daylight Box_Front.jpg')
// const bt = loader.load('../skyimage/Daylight Box_Bottom.jpg')
// const up = loader.load('../skyimage/Daylight Box_Top.jpg')
// const dn = loader.load('../skyimage/Daylight Box_Bottom.jpg')
// const rt = loader.load('../skyimage/Daylight Box_Right.jpg')
// const lf = loader.load('../skyimage/Daylight Box_Left.jpg')

// let skyBoxarray = []

// skyBoxarray.push(new THREE.MeshBasicMaterial({ map: ft}))
// skyBoxarray.push(new THREE.MeshBasicMaterial({ map: bt}))
// skyBoxarray.push(new THREE.MeshBasicMaterial({ map: up}))
// skyBoxarray.push(new THREE.MeshBasicMaterial({ map: dn}))
// skyBoxarray.push(new THREE.MeshBasicMaterial({ map: rt}))
// skyBoxarray.push(new THREE.MeshBasicMaterial({ map: lf}))

// for(let i=0; i<6; i++){
//   skyBoxarray[i].side = THREE.BackSide;
// }


// let skyBoxgeo = new THREE.BoxGeometry(1000,1000,1000)
// let skybox = new THREE.Mesh(skyBoxgeo,skyBoxarray)
// scene.add(skybox)


const infoBox = document.querySelector("#infoBox")
const dataList = document.querySelector("#salar")


console.log(infoBox)


function resize() {
  let factor = 0.9; // percentage of the screen
  let w = window.innerWidth ;
  let h = window.innerHeight * factor;
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}; 

window.addEventListener("resize", resize);


const salar = {
  2248:{orbitcenter:[-210.3,-2.5,-50],
        level:2,
        side:"Nord"
       },
  2247:{orbitcenter:[-170.2,-2.5,-50],
        level:2,
        side:"Nord"
       },
  2250:{orbitcenter:[-144.7,-2.5,-50],
        level:2,
        side:"Nord"
       }
}

const salLista = Object.keys(salar);
salLista.forEach(sal => {
  dataList.innerHTML += `<option>${sal}</option>`
});

let cameraTarget = new THREE.Vector3(0,30,30)
let orbitTarget = new THREE.Vector3()
let nextCameratarget =  new THREE.Vector3()
let lerpKey = false

addEventListener("submit", (event) => {
  event.preventDefault();
  let input = document.getElementById("search").value
  console.log(input)
  console.log(salar[input].level)
    
  cameraTarget.set(salar[input].orbitcenter[0],salar[input].orbitcenter[1]+20,salar[input].orbitcenter[2]+20);
  orbitTarget.set(salar[input].orbitcenter[0],salar[input].orbitcenter[1],salar[input].orbitcenter[2]);
  nextCameratarget.set(salar[input].orbitcenter[0],salar[input].orbitcenter[1]+21,salar[input].orbitcenter[2]+20);
  // oControls.target.set(salar[input].orbitcenter[0],salar[input].orbitcenter[1],salar[input].orbitcenter[2]);
  // camera.position.set(salar[input].orbitcenter[0],salar[input].orbitcenter[1]+20,salar[input].orbitcenter[2]+20)
  lerpKey = true
  oControls.autoRotate = false
});



console.log(cameraTarget.x)
let multiplier = 1.00001

function animate(){
  requestAnimationFrame(animate);
  
  
 infoBox.innerHTML = `Position: X${camera.position.x.toFixed(1)}, Y${camera.position.y.toFixed(1)}, Z${camera.position.z.toFixed(1)}`
 

  oControls.update(0.01);
  if(lerpKey == true){  
    if (camera.position.x.toFixed(1) == cameraTarget.x && camera.position.y.toFixed(1) == cameraTarget.y && camera.position.z.toFixed(1) == cameraTarget.z ){
      lerpKey = false
      oControls.autoRotate = true
  }
    else{
    camera.position.lerp(cameraTarget,0.02*multiplier)
    oControls.target.lerp(orbitTarget,0.02*multiplier)
    multiplier += 0.01
  }}

  renderer.render(scene, camera);
  
}

animate()

