import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene }  from './components/scene.js';

import { createControls }  from './systems/controls.js';
import { createRenderer }  from './systems/renderer.js';
import { Resizer }         from './systems/resizer.js';
import { Loop }            from './systems/loop.js';
import { createKeyboard  } from './systems/keyboard.js';

import { createEntities }  from './entities/entities';

class World {

  #camera
  #controls
  #renderer
  #scene
  #loop
  #resizer
  #keyboard
  #helpersLayer

  constructor(container) {
    this.#camera = createCamera();
    this.#renderer = createRenderer();
    this.#scene = createScene();
    this.#controls = createControls(this.#camera, this.#renderer.domElement);
    this.#resizer = new Resizer(container, this.#scene, this.#camera, this.#renderer);
    this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);
    this.#loop.addUpdatable(this.#controls);
    this.#keyboard = createKeyboard(container, this);
    
    // Create the lights and hide the helpers layer
    this.#helpersLayer = 1;
    createLights(this.#scene, this.#helpersLayer);
    this.#camera.layers.enableAll();
    this.#camera.layers.toggle(this.#helpersLayer);
  
    // create entities in the scene
    createEntities(this.#scene, this.#renderer.domElement);

    container.append(this.#renderer.domElement);
  }

  async init() {
    // Add asynchronous tasks (loading models for example)

  }

  render() {
    this.#renderer.render(this.#scene, this.#camera);
  }

  start() {
    this.#loop.start();
  }

  stop() {
    this.#loop.stop();
  }

  pause() {
    this.#loop.pause();
  }

  resume() {
    this.#loop.resume();
  }

  pauseResume() {
    this.#loop.pauseResume();
  }

  getScene() {
    return this.#scene;
  }

  resize() {
    this.#resizer.resize();
  }
  
  toggleHelpers() {
    this.#camera.layers.toggle(this.#helpersLayer);
  }
}

export { World };
