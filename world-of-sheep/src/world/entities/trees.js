import * as THREE from 'three';
import { mat_yellow, mat_grey } from './materials'



function createTrees(scene) {
    console.log('Création des arbres');
  
    const pi = Math.PI;

//----------------------------------------------------------------------- trees ---
const tree = new THREE.Group();

  //trunk
  const geo_trunk = new THREE.IcosahedronGeometry(9, 0);
  const trunk = new THREE.Mesh(geo_trunk, mat_grey);
  const a = new THREE.Vector3(1, 0, 10);
  trunk.rotation.x = pi / 2;
  trunk.position.y = 5;
  trunk.scale.set(0.03, 0.03, 1);
  trunk.castShadow = true;
  trunk.receiveShadow = true;
  tree.add(trunk);

  //crown
  const geo_crown = new THREE.IcosahedronGeometry(2.5, 0);
  const crown = new THREE.Mesh(geo_crown, mat_yellow);
  crown.scale.y = 0.4;
  crown.rotation.z = -0.5;
  crown.rotation.x = -0.2;
  crown.position.set(trunk.position.x, 12, trunk.position.z);
  crown.castShadow = true;
  tree.add(crown);

  //leaf
  const leaf = new THREE.Group();
  const mainStem = new THREE.Mesh(geo_trunk, mat_grey);
  mainStem.scale.set(0.007, 0.007, 0.16);
  mainStem.rotation.x = pi / 2;
  mainStem.castShadow = true;
  leaf.add(mainStem);

  const geo_blade = new THREE.CylinderGeometry(0.7, 0.7, 0.05, 12);
  const blade = new THREE.Mesh(geo_blade, mat_yellow);
  blade.rotation.z = pi / 2;
  blade.scale.x = 1.2;
  blade.position.set(-0.05, 0.4, 0);
  blade.castShadow = true;
  leaf.add(blade);

  const subStems = [];
  for (let i = 0; i < 8; i++) {
    subStems[i] = mainStem.clone();
    subStems[i].scale.set(0.0055, 0.0055, 0.01);
    subStems[i].castShadow = true;
    leaf.add(subStems[i]);
  }
  subStems[0].rotation.x = -pi / 4;
  subStems[0].scale.z = 0.04;
  subStems[0].position.set(0, 0.8, 0.2);

  subStems[2].rotation.x = -pi / 6;
  subStems[2].scale.z = 0.05;
  subStems[2].position.set(0, 0.5, 0.25);

  subStems[4].rotation.x = -pi / 8;
  subStems[4].scale.z = 0.055;
  subStems[4].position.set(0, 0.2, 0.3);

  subStems[6].rotation.x = -pi / 10;
  subStems[6].scale.z = 0.045;
  subStems[6].position.set(0, -0.1, 0.26);

  for (let i = 1; i < 8; i += 2) {
    subStems[i].rotation.x = -subStems[i - 1].rotation.x;
    subStems[i].scale.z = subStems[i - 1].scale.z;
    subStems[i].position.set(
      0,
      subStems[i - 1].position.y,
      -subStems[i - 1].position.z
    );
  }
  leaf.rotation.x = pi / 3;
  leaf.rotation.z = 0.2;
  leaf.position.set(trunk.position.x - 0.2, 5, trunk.position.z + 1);
  tree.add(leaf);

  const leaf_1 = leaf.clone();
  leaf_1.rotation.x = -pi / 3;
  leaf_1.position.set(trunk.position.x - 0.2, 6, trunk.position.z - 1);
  tree.add(leaf_1);
  tree.rotation.y = -pi / 12;
  tree.position.set(-2, 0, -2);
  scene.add(tree);

  const tree_1 = tree.clone();
  tree_1.scale.set(0.8, 0.8, 0.8);
  tree_1.position.set(-1, 0, -5);
  tree_1.rotation.y = -pi / 5;
  scene.add(tree_1);

  const tree_2 = tree.clone();
  tree_2.scale.set(0.7, 0.7, 0.7);
  tree_2.position.set(-2, 0, 0.5);
  tree_2.rotation.y = -pi / 12;
  tree_2.children[2].rotation.x = -pi / 3;
  tree_2.children[2].position.z = trunk.position.z - 1;
  tree_2.children[3].rotation.x = pi / 3;
  tree_2.children[3].position.z = trunk.position.z + 1;
  scene.add(tree_2);
  }

  
  export { createTrees };