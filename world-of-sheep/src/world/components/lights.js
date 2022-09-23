import * as THREE from 'three';
import { Group } from 'three';

// Doc : https://threejs.org/docs/#api/en/lights/Light

function createLights(scene, helpersLayer) {

  //lights, 3 point lighting
  const col_light = 0xffffff; // set

  const light = new THREE.AmbientLight(col_light, 0.6);

  const keyLight = new THREE.DirectionalLight(col_light, 0.6);
  keyLight.position.set(20, 30, 10);
  keyLight.castShadow = true;
  keyLight.shadow.camera.top = 20;

  const fillLight = new THREE.DirectionalLight(col_light, 0.3);
  fillLight.position.set(-20, 20, 20);

  const backLight = new THREE.DirectionalLight(col_light, 0.1);
  backLight.position.set(10, 0, -20);

  scene.add(light, keyLight, fillLight, backLight);

  const keyLightHelper = new THREE.DirectionalLightHelper(keyLight);
  const fillLightHelper = new THREE.DirectionalLightHelper(fillLight);
  const backLightHelper = new THREE.DirectionalLightHelper(backLight);
  const shadowHelper = new THREE.CameraHelper(keyLight.shadow.camera);
  
  const helpersGroup = new THREE.Group();
  helpersGroup.add(keyLightHelper, fillLightHelper, backLightHelper, shadowHelper);  
  
  // Put helpers in a separate layer
  helpersGroup.traverse( (child) => {
    child.layers.set(helpersLayer);
  })
  
  scene.add(helpersGroup);
}

export { createLights };
