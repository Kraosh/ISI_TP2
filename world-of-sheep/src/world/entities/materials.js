import * as THREE from 'three';

//materials
const mat_orange = new THREE.MeshLambertMaterial({ color: 0xff8c75 });
const mat_grey   = new THREE.MeshLambertMaterial({ color: 0xf3f2f7 });
const mat_yellow = new THREE.MeshLambertMaterial({ color: 0xfeb42b });
const mat_dark   = new THREE.MeshLambertMaterial({ color: 0x5a6e6c });
const mat_brown  = new THREE.MeshLambertMaterial({ color: 0xa3785f });
const mat_stone  = new THREE.MeshLambertMaterial({ color: 0x9eaeac });

export {
  mat_orange,
  mat_grey,  
  mat_yellow,
  mat_dark,  
  mat_brown, 
  mat_stone 
};
