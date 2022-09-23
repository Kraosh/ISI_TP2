import * as THREE from 'three';
import { mat_stone } from './materials'


function createStones(scene) {
    console.log('Création des pierres');

    const pi = Math.PI;
    const geo_stone = new THREE.DodecahedronGeometry(1, 0);
    const stone = [];
    for (let i = 0; i < 2; i++) {
        stone[i] = new THREE.Mesh(geo_stone, mat_stone);
        scene.add(stone[i]);
        stone[i].castShadow = true;
    }
    stone[0].rotation.set(0, 12, pi / 2);
    stone[0].scale.set(3, 1, 1);
    stone[0].position.set(-1, 1, 4.6);

    stone[1].rotation.set(0, 0, pi / 2);
    stone[1].scale.set(1, 1, 1);
    stone[1].position.set(0, 0.7, 5.3);


  }

  export { createStones };