import * as THREE from 'three';

// Doc : https://threejs.org/docs/#api/en/renderers/WebGLRenderer

function createRenderer() {
  const renderer = new THREE.WebGLRenderer({ 
    antialias: true, 
    alpha: true,
    });
  
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  return renderer;
}

export { createRenderer };
