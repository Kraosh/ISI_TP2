import * as THREE from 'three';
import { mat_dark, mat_grey } from './materials'

function createSheep(scene) {
    console.log('Création du mouton');
  
    const pi = Math.PI;
    //sheep body
  const sheep = new THREE.Group();
  // const geo_sheepHead=new THREE.SphereGeometry(.5,8,6);
  const geo_sheepHead = new THREE.IcosahedronGeometry(1, 0);
  const sheepHead = new THREE.Mesh(geo_sheepHead, mat_dark);
  sheepHead.scale.z = 0.6;
  sheepHead.scale.y = 1.1;
  sheepHead.position.y = 2.5;
  sheepHead.rotation.x = -0.2;
  sheepHead.castShadow = true;
  sheep.add(sheepHead);

  const geo_sheepBody = new THREE.IcosahedronGeometry(3.5, 0);
  const sheepBody = new THREE.Mesh(geo_sheepBody, mat_grey);
  sheepBody.position.set(0, sheepHead.position.y, -2.2);
  sheepBody.scale.set(0.5, 0.5, 0.6);
  sheepBody.rotation.set(0, 0, pi / 3);
  sheepBody.castShadow = true;
  sheep.add(sheepBody);

  const geo_tail = new THREE.IcosahedronGeometry(0.5, 0);
  const tail = new THREE.Mesh(geo_tail, mat_grey);
  tail.position.set(sheepHead.position.x, sheepHead.position.y + 1.2, -3.8);
  tail.castShadow = true;
  sheep.add(tail);

  const hair = [];
  const geo_hair = new THREE.IcosahedronGeometry(0.4, 0);
  for (let i = 0; i < 5; i++) {
    hair[i] = new THREE.Mesh(geo_hair, mat_grey);
    hair[i].castShadow = true;
    sheep.add(hair[i]);
  }

  hair[0].position.set(-0.4, sheepHead.position.y + 0.9, -0.1);
  hair[1].position.set(0, sheepHead.position.y + 1, -0.1);
  hair[2].position.set(0.4, sheepHead.position.y + 0.9, -0.1);
  hair[3].position.set(-0.1, sheepHead.position.y + 0.9, -0.4);
  hair[4].position.set(0.12, sheepHead.position.y + 0.9, -0.4);

  hair[0].rotation.set(pi / 12, 0, pi / 3);
  hair[1].rotation.set(pi / 12, pi / 6, pi / 3);
  hair[2].rotation.set(pi / 12, 0, pi / 3);
  hair[3].rotation.set(pi / 12, 0, pi / 3);
  hair[4].rotation.set(pi / 12, pi / 6, pi / 3);

  hair[0].scale.set(0.6, 0.6, 0.6);
  hair[2].scale.set(0.8, 0.8, 0.8);
  hair[3].scale.set(0.7, 0.7, 0.7);
  hair[4].scale.set(0.6, 0.6, 0.6);

  const legs = [];
  const geo_leg = new THREE.CylinderGeometry(0.15, 0.1, 1, 5);
  for (let i = 0; i < 4; i++) {
    legs[i] = new THREE.Mesh(geo_leg, mat_dark);
    legs[i].castShadow = true;
    legs[i].receiveShadow = true;
    sheep.add(legs[i]);
  }
  legs[0].position.set(0.5, 1.1, -1.5);
  legs[1].position.set(-0.5, 1.1, -1.5);
  legs[2].position.set(0.8, 1.1, -3);
  legs[3].position.set(-0.8, 1.1, -3);

  const feet = [];
  const geo_foot = new THREE.DodecahedronGeometry(0.2, 0);
  for (let i = 0; i < legs.length; i++) {
    feet[i] = new THREE.Mesh(geo_foot, mat_dark);
    sheep.add(feet[i]);
    feet[i].scale.set(1, 0.8, 1);
    feet[i].castShadow = true;
    feet[i].receiveShadow = true;
    feet[i].position.set(legs[i].position.x, 0, legs[i].position.z + 0.09);
  }
  feet[0].position.y = 0.56;
  feet[1].position.y = 0.66;
  feet[2].position.y = 0.7;
  feet[3].position.y = 0.7;

  //eyes
  const geo_eye = new THREE.CylinderGeometry(0.3, 0.2, 0.05, 8);
  const eyes = [];
  for (let i = 0; i < 2; i++) {
    eyes[i] = new THREE.Mesh(geo_eye, mat_grey);
    sheep.add(eyes[i]);
    eyes[i].castShadow = true;
    eyes[i].position.set(0, sheepHead.position.y + 0.1, 0.5);
    eyes[i].rotation.x = pi / 2 - pi / 15;
  }
  eyes[0].position.x = 0.3;
  eyes[1].position.x = -eyes[0].position.x;

  eyes[0].rotation.z = -pi / 15;
  eyes[1].rotation.z = -eyes[0].rotation.z;

  //eyeballs
  const geo_eyeball = new THREE.SphereGeometry(0.11, 8, 8);
  let eyeballs = [];
  for (let i = 0; i < 2; i++) {
    eyeballs[i] = new THREE.Mesh(geo_eyeball, mat_dark);
    sheep.add(eyeballs[i]);
    eyeballs[i].castShadow = true;
    eyeballs[i].position.set(
      eyes[i].position.x,
      eyes[i].position.y,
      eyes[i].position.z + 0.02
    );
  }
  

  sheep.position.set(4.8, -0.2, -1);
  sheep.scale.set(0.8, 0.8, 0.8);
  sheep.rotation.set(0, pi / 4, 0);
  scene.add(sheep);

  

  }

  
  export { createSheep };