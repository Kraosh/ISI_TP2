import * as THREE from 'three';
import { createGround } from './ground';
import { createStones } from './stones';
import { createTrees } from './trees';
import { createSheep } from './sheep';

import { mat_orange, mat_grey, mat_yellow, mat_dark, mat_brown, mat_stone } from './materials';

function createEntities(scene, theCanvas) {

  const groundScaleFactor = 1.0;  // Augmenter pour avoir plus de place !
  createGround(scene, groundScaleFactor);
  createFence(scene);        // À compléter
  createStones(scene);       // À compléter
  createTrees(scene);        // À compléter
  createSheep(scene);        // À compléter

  // createOtherStone(scene);   // À créer - Ajoute un rocher de taille intermédiaire
  // createOtherTree(scene);    // À créer - Ajoute un arbre à 3 branches
  // createOtherSheep(scene);   // À créer - Ajoute un mouton debout !

  createOtherEntities(scene, theCanvas);  // À vider !
}

// Fonctions à compléter et à déplacer vers des fichiers
// Prendre modèle sur ground.js

//----------------------------------------------------------------------- fence ---
// Remplir avec le code de la barrière
// À déplacer dans un nouveau fichier fence.js
function createFence(scene) {
  console.log('Création de la barrière');

}
//----------------------------------------------------------------------- stones ---
// À déplacer dans un nouveau fichier stones.js

//----------------------------------------------------------------------- trees ---
// À déplacer dans un nouveau fichier trees.js

//----------------------------------------------------------------------- sheep ---
// À déplacer dans un nouveau fichier sheep.js

// Transférer le contenu de cette fonction dans les fonctions ci-dessus.
// Une fois vide, la supprimer.
function createOtherEntities(scene, theCanvas) {
  const pi = Math.PI;
  

//----------------------------------------------------------------------- stones ---


//----------------------------------------------------------------------- sheep ---
  
//----------------------------------------------------------------------- fence ---
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

  //mouse control
  const context = theCanvas.getContext("2d");
  theCanvas.addEventListener("mousemove", function (evt) {
    const rect = theCanvas.getBoundingClientRect();
    const mouseX = evt.clientX - rect.left;
    const mouseY = evt.clientY - rect.top;

    const offsetX = 0.2 / rect.width * (mouseX - rect.width / 2);
    // const offsetY = 0.001 * (mouseY - h / 2);
    const offsetY = 0.3 / rect.height * (mouseY - (rect.height * 2) / 5);
    eyeballs[0].position.x = eyes[0].position.x + offsetX;
    eyeballs[0].position.y = eyes[0].position.y - offsetY;
    eyeballs[1].position.x = eyes[1].position.x + offsetX;
    eyeballs[1].position.y = eyes[1].position.y - offsetY;
  });

}

export { createEntities };