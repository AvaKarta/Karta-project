"use strict";
import * as THREE from "https://unpkg.com/three@0.138.0/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.138.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://unpkg.com/three@0.138.0/examples/jsm/loaders/GLTFLoader.js";
import { FlyControls } from "https://unpkg.com/three@0.138.0/examples/jsm/controls/FlyControls.js";

const GLTF = new GLTFLoader();

const loader = new THREE.TextureLoader();

const scene = new THREE.Scene();
let skySphere = new THREE.SphereGeometry(4000, 100, 100);
skySphere.scale(-1, 1, 1);
let skyMaterial = new THREE.MeshBasicMaterial({
  map: loader.load("Bilder/skyimage/CasualDay4K.jpg"),
});
let Sky = new THREE.Mesh(skySphere, skyMaterial);
scene.add(Sky);

let height = window.innerHeight * 0.9;
let width = window.innerWidth;

const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 10000);
camera.position.set(0, 30, 0);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height);

camera.position.setZ(30);

console.log(window.innerWidth);

// const alight = new THREE.AmbientLight(); // soft white light
// scene.add(alight);

const lightCordinates = [
  new THREE.Vector3(100, 100, -100),
  new THREE.Vector3(100, 100, 100),
  new THREE.Vector3(-100, 100, 100),
  new THREE.Vector3(-100, 100, -100),
  new THREE.Vector3(100, -100, -100),
  new THREE.Vector3(100, -100, 100),
  new THREE.Vector3(-100, -100, 100),
  new THREE.Vector3(-1000, -100, -100),
];

for (let index = 0; index < lightCordinates.length; index++) {
  let lightCordinate = lightCordinates[index];
  console.log(lightCordinate);
  let sunLight = new THREE.DirectionalLight("#ffffff", 0.4);
  sunLight.castShadow = true;
  sunLight.shadow.camera.far = 20;
  sunLight.shadow.mapSize.set(1024, 1024);
  sunLight.shadow.normalBias = 0.05;
  sunLight.position.set(lightCordinate.x, lightCordinate.y, lightCordinate.z);
  scene.add(sunLight);
}

const oControls = new OrbitControls(camera, renderer.domElement);
oControls.minDistance = 400;
oControls.maxPolarAngle = Math.PI * 0.4;
oControls.enabled = false;
oControls.target.set(-90, 0, 50);
oControls.autoRotate = true;

GLTF.load(
  "/3D-modeler/skolasommar2023blend.glb",
  function (gltf) {
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

let infoBox = document.querySelector("#infoBox");

console.log(infoBox);

function resize() {
  let factor = 0.9; // percentage of the screen
  let w = window.screen.width;
  let h = window.innerHeight * factor;
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}

window.addEventListener("resize", resize);

let orbitTarget = new THREE.Vector3();

function animate() {
  requestAnimationFrame(animate);
  Sky.position.set(camera.position.x, camera.position.y, camera.position.z);
  oControls.update(0.01);
  renderer.render(scene, camera);
}

animate();
