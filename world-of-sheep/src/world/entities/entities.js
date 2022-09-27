import * as THREE from 'three';
import { createGround } from './ground';
import { createStones, createOtherStone } from './stones';
import { createTrees } from './trees';
import { createSheep } from './sheep';
import { createFence } from './fence';

import { mat_orange, mat_grey, mat_yellow, mat_dark, mat_brown, mat_stone } from './materials';

function createEntities(scene, theCanvas) {

  const groundScaleFactor = 1.0;  // Augmenter pour avoir plus de place !
  createGround(scene, groundScaleFactor);
  createFence(scene);        // À compléter
  createStones(scene);       // À compléter
  createTrees(scene);        // À compléter
  createSheep(scene, theCanvas);        // À compléter

  createOtherStone(scene);   // À créer - Ajoute un rocher de taille intermédiaire
  // createOtherTree(scene);    // À créer - Ajoute un arbre à 3 branches
  // createOtherSheep(scene);   // À créer - Ajoute un mouton debout !

  
}




export { createEntities };