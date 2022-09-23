import * as THREE from 'three';
import { mat_orange, mat_grey, mat_yellow, mat_dark, mat_brown, mat_stone } from './materials'

function createGround(scene, scaleFactor = 1) {
  console.log('Création du sol')
  
  const pi = Math.PI;

  const ground = new THREE.Group();

  const layers = [];
  for (let i = 0; i < 5; i++) {
    const h = 0.1;
    const geometry = new THREE.CylinderGeometry(8 - i - 0.01, 8 - i, h, 9);
    layers.push(new THREE.Mesh(geometry, mat_orange));
    layers[i].position.y = h * i;
    layers[i].receiveShadow = true;
    ground.add(layers[i]);
  }

  const scales = [
    [0.80, 1, 1.00],
    [0.77, 1, 0.91],
    [0.80, 1, 0.91],
    [0.75, 1, 0.92],
    [0.70, 1, 0.93]];
  // const scaleFactor = 1.4
  const rotInc = (2 * pi) / 9;
  const rotFactors = [0, 0.6, 0.3, 0.7, 0.9]
  layers.forEach((l, i) => {
    const scalexyz = scales[i].map(v => v * scaleFactor);
    l.scale.set(...scalexyz);
    l.rotation.y = rotInc * rotFactors[i];
  })

  const geo_base = new THREE.CylinderGeometry(8, 1, 10, 9);
  const base = new THREE.Mesh(geo_base, mat_dark);
  base.scale.set(...layers[0].scale)
  base.position.y = -5 * scaleFactor;
  ground.add(base);

  scene.add(ground);
}

export { createGround };