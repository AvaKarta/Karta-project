"use strict";
import * as THREE from "https://unpkg.com/three@0.138.0/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.138.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://unpkg.com/three@0.138.0/examples/jsm/loaders/GLTFLoader.js";
import { FlyControls } from "https://unpkg.com/three@0.138.0/examples/jsm/controls/FlyControls.js";

const GLTF = new GLTFLoader();

const loader = new THREE.TextureLoader();

const scene = new THREE.Scene();
scene.background = new THREE.CubeTextureLoader()
  .setPath("Bilder/skyimage/")
  .load([
    "Daylight Box_Right.jpg",
    "Daylight Box_Left.jpg",
    "Daylight Box_Top.jpg",
    "Daylight Box_Bottom.jpg",
    "Daylight Box_Front.jpg",
    "Daylight Box_Back.jpg",
  ]);

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

const grass = loader.load("/Bilder/grass.jfif");
grass.wrapS = THREE.RepeatWrapping;
grass.wrapT = THREE.RepeatWrapping;
grass.repeat.set(64, 64);

const fieldPlane = new THREE.PlaneGeometry(10000, 10000);
const fieldTexture = new THREE.MeshStandardMaterial({ map: grass });
const field = new THREE.Mesh(fieldPlane, fieldTexture);
field.rotation.x -= Math.PI / 2;
field.position.set(0, -4, 0);
scene.add(field);
console.log(window.innerWidth);

const hlight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 1);
scene.add(hlight);

const oControls = new OrbitControls(camera, renderer.domElement);
oControls.minDistance = 400;
oControls.maxPolarAngle = Math.PI * 0.4;
oControls.enabled = false;
oControls.target.set(-90, 0, 50);
oControls.autoRotate = true;

GLTF.load(
  "/3D-modeler/plan2.glb",
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

  oControls.update(0.01);
  renderer.render(scene, camera);
}

animate();
