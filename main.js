"use strict";
import * as THREE from "https://unpkg.com/three@0.138.0/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.138.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://unpkg.com/three@0.138.0/examples/jsm/loaders/GLTFLoader.js";
import { FlyControls } from "https://unpkg.com/three@0.138.0/examples/jsm/controls/FlyControls.js";

const apiKey = "ea9430c8ead841e493b132724231602";

const api =
  "https://api.weatherapi.com/v1/current.json?key=ea9430c8ead841e493b132724231602&q=Taby&aqi=no";

async function getWeather(url) {
  let response = await fetch(url);
  // Detta gör om resultatet från APIet till ett JSON-objekt.
  let json = await response.json();
  console.log(json);
  return json.current.condition.text;
}

console.log(await getWeather(api));

getWeather(api);

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

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / height,
  0.1,
  10000
);
camera.position.set(-230, 40, -20);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight * 0.9);

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

const sunLight = new THREE.DirectionalLight("#ffffff", 0.5);
sunLight.castShadow = true;
sunLight.shadow.camera.far = 20;
sunLight.shadow.mapSize.set(1024, 1024);
sunLight.shadow.normalBias = 0.05;
sunLight.position.set(100, 100, -100);
scene.add(sunLight);

const sunLight2 = new THREE.DirectionalLight("#ffffff", 0.5);
sunLight2.castShadow = true;
sunLight2.shadow.camera.far = 20;
sunLight2.shadow.mapSize.set(1024, 1024);
sunLight2.shadow.normalBias = 0.05;
sunLight2.position.set(100, 100, 100);
scene.add(sunLight2);

const sunLight3 = new THREE.DirectionalLight("#ffffff", 0.5);
sunLight3.castShadow = true;
sunLight3.shadow.camera.far = 20;
sunLight3.shadow.mapSize.set(1024, 1024);
sunLight3.shadow.normalBias = 0.05;
sunLight3.position.set(-100, 100, 100);
scene.add(sunLight3);

const sunLight4 = new THREE.DirectionalLight("#ffffff", 0.5);
sunLight4.castShadow = true;
sunLight4.shadow.camera.far = 20;
sunLight4.shadow.mapSize.set(1024, 1024);
sunLight4.shadow.normalBias = 0.05;
sunLight4.position.set(-100, 100, -100);
scene.add(sunLight4);

const oControls = new OrbitControls(camera, renderer.domElement);
oControls.minPolarAngle = 0;
oControls.maxPolarAngle = Math.PI * 0.5;
oControls.target.set(0, 0, -80);

// const fControls = new FlyControls(camera, renderer.domElement);
// fControls.movementSpeed = 30;
// fControls.rollSpeed = Math.PI / 2;
// fControls.dragToLook = true;

GLTF.load(
  "/3D-modeler/skola.glb",
  function (gltf) {
    var object = gltf.scene;
    scene.add(gltf.scene);
    console.log(gltf.scene);
    if (gltf.scene.children[0].name != "plan2") {
      location.reload();
    }
    gltf.scene.children[0].position.set(0, 0, 0);
    for (let i = 1; i < 5; i++) {
      gltf.scene.children[i].position.set(0, 0 + 8.5 * i, 0);
    }
    const salar = {
      2244: { orbitcenter: [-114, 0.5, -98.4], level: 2, side: "Nord" },
      2247: { orbitcenter: [-98.3, 0.5, -98.4], level: 2, side: "Nord" },
      2250: { orbitcenter: [-77, 0.5, -98.4], level: 2, side: "Nord" },
      2248: { orbitcenter: [-55.5, 0.5, -98.4], level: 2, side: "Nord" },
      2200: { orbitcenter: [-33, 0.5, -94], level: 2, side: "Nord" },
      2251: { orbitcenter: [-23.3, 0.5, -98.4], level: 2, side: "Nord" },
      2252: { orbitcenter: [-6.2, 0.5, -98.4], level: 2, side: "Nord" },
      2254: { orbitcenter: [17, 0.5, -98.4], level: 2, side: "Nord" },
      2255: { orbitcenter: [36.2, 0.5, -98.4], level: 2, side: "Nord" },
      2256: { orbitcenter: [50, 0.5, -98.4], level: 2, side: "Nord" },
      2257: { orbitcenter: [72, 0.5, -98.4], level: 2, side: "Nord" },
      2258: { orbitcenter: [98.5, 0.5, -98.4], level: 2, side: "Nord" },
      2260: { orbitcenter: [114.5, 0.5, -102.4], level: 2, side: "Nord" },
      2266: { orbitcenter: [122.4, 0.5, -98.4], level: 2, side: "Nord" },
      2270: { orbitcenter: [141, 0.5, -98.4], level: 2, side: "Nord" },
      2: { orbitcenter: [-5.1, 1, -98.9], level: 2, side: "Nord" },
      3: { orbitcenter: [-5.1, 9.5, -98.9], level: 3, side: "Nord" },
      4: { orbitcenter: [-5.1, 17.5, -98.9], level: 4, side: "Nord" },
      5: { orbitcenter: [-5.1, 25.7, -98.9], level: 5, side: "Nord" },
      6: { orbitcenter: [-5.1, 34.7, -98.9], level: 6, side: "Nord" },
    };

    const salLista = Object.keys(salar);
    salLista.forEach((sal) => {
      dataList.innerHTML += `<option>${sal}</option>`;
    });
    const standardCameratarget = new THREE.Vector3(-230, 40, -20);
    const standardOrbittarget = new THREE.Vector3(0, 0, -80);
    let cameraTarget = new THREE.Vector3(0, 30, 30);
    let orbitTarget = new THREE.Vector3();
    let cameraKey = false;
    let animationKey = false;
    let plantest = new THREE.Vector3(0, 100, 0);
    let level = 0;
    addEventListener("submit", (event) => {
      event.preventDefault();
      let input = document.getElementById("search").value;
      if (salar.hasOwnProperty(input)) {
        console.log(input);
        console.log(salar[input].level);

        level = salar[input].level;
        cameraTarget.set(
          salar[input].orbitcenter[0],
          salar[input].orbitcenter[1] + 30,
          salar[input].orbitcenter[2] + 30
        );
        orbitTarget.set(
          salar[input].orbitcenter[0],
          salar[input].orbitcenter[1],
          salar[input].orbitcenter[2]
        );

        animationKey = true;
        oControls.autoRotate = false;
      } else {
        alert("Salen finns inte!");
      }
    });

    console.log(cameraTarget.x);
    let multiplier = 1.0015;
    let secondMultiplier = 1.0015;
    let thirdMultiplier = 1.0015;

    function animate() {
      requestAnimationFrame(animate);

      infoBox.innerHTML = `Position: X ${camera.position.x.toFixed(
        1
      )}, Y ${camera.position.y.toFixed(1)}, Z ${camera.position.z.toFixed(1)}`;

      // fControls.update(0.01);
      oControls.update(0.01);
      if (animationKey == true) {
        if (
          camera.position.x.toFixed(1) == cameraTarget.x &&
          camera.position.y.toFixed(1) == cameraTarget.y &&
          camera.position.z.toFixed(1) == cameraTarget.z
        ) {
          animationKey = false;
          multiplier = 1.0015;
          secondMultiplier = 1.0015;
          thirdMultiplier = 1.0015;
          // oControls.autoRotate = true;
        } else {
          let newLevel = level - 1;
          console.log(object.children[newLevel].position);
          if (
            object.children[newLevel].position.y.toFixed(1) ==
              150 + 8.5 * (level - 1) &&
            object.children[level - 2].position.y.toFixed(1) ==
              8.5 * (level - 2)
          ) {
            camera.position.lerp(cameraTarget, 0.02 * thirdMultiplier);
            oControls.target.lerp(orbitTarget, 0.02 * thirdMultiplier);
            cameraKey = false;
            thirdMultiplier += 0.015;
          } else {
            if (cameraKey) {
              for (let index = level - 1; index < 5; index++) {
                plantest.set(0, 150 + 8.5 * index, 0);
                object.children[index].position.lerp(
                  plantest,
                  0.02 * secondMultiplier
                );
              }
              for (let index = 0; index < level - 1; index++) {
                plantest.set(0, 8.5 * index, 0);
                object.children[index].position.lerp(
                  plantest,
                  0.02 * secondMultiplier
                );
              }
              secondMultiplier += 0.015;
            } else {
              camera.position.lerp(standardCameratarget, 0.02 * multiplier);
              oControls.target.lerp(standardOrbittarget, 0.02 * multiplier);
              if (
                camera.position.x.toFixed(1) == standardCameratarget.x &&
                camera.position.y.toFixed(1) == standardCameratarget.y &&
                camera.position.z.toFixed(1) == standardCameratarget.z
              ) {
                cameraKey = true;
              }
            }
            multiplier += 0.015;
          }
        }
      }

      renderer.render(scene, camera);
    }

    animate();
  },
  undefined,
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  function (error) {
    console.error(error);
  }
);

const infoBox = document.querySelector("#infoBox");
const dataList = document.querySelector("#salar");

console.log(infoBox);

function resize() {
  let factor = 0.9; // percentage of the screen
  let w = window.innerWidth;
  let h = window.innerHeight * factor;
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}

window.addEventListener("resize", resize);
