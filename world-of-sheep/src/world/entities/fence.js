import * as THREE from 'three';
import { mat_brown } from './materials'


function createFence(scene) {
  console.log('Création de la barrière');

  const pi = Math.PI;
  const fence = new THREE.Group();
  const wood = [];
  const geo_wood = new THREE.BoxGeometry(1, 1, 1);
  for (let i = 0; i < 4; i++) {
    wood[i] = new THREE.Mesh(geo_wood, mat_brown);
    fence.add(wood[i]);
    wood[i].castShadow = true;
    wood[i].receiveShadow = true;
  }
  wood[0].scale.set(0.15, 1.7, 0.4);
  wood[1].scale.set(0.15, 1.8, 0.4);
  wood[2].scale.set(0.1, 0.3, 3.2);
  wood[3].scale.set(0.1, 0.3, 3.2);

  wood[0].position.set(0, 1.2, -1);
  wood[1].position.set(0, 1, 1);
  // wood[2].position.set(.12,1.5,0);
  wood[2].position.set(0, 1.5, 0);
  wood[3].position.set(0.12, 0.9, 0);

  wood[3].rotation.x = pi / 32;
  wood[2].rotation.x = -pi / 32;
  wood[2].rotation.y = pi / 32;

  fence.position.set(3, 0, 2);
  fence.rotation.y = pi / 5;
  scene.add(fence);
}
export { createFence };