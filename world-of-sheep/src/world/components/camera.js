import * as THREE from 'three';

// Doc : https://threejs.org/docs/#api/en/cameras/Camera

function createCamera() {

  const h = window.innerHeight;
  const w = window.innerWidth;
  const aspectRatio = w / h;

  // aspectRatio = 1;

  const camera = new THREE.PerspectiveCamera(50, aspectRatio, 1, 1000);

  camera.position.set(25, 5, 0);
  camera.lookAt(new THREE.Vector3(0, 4, 0));

  return camera;
}

export { createCamera };
