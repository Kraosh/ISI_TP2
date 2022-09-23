import { Clock } from 'three';

// Doc : https://discoverthreejs.com/book/first-steps/animation-loop/

class Loop {

  #camera
  #scene
  #renderer
  #paused
  #updatables
  #clock

  constructor(camera, scene, renderer) {
    this.#camera = camera;
    this.#scene = scene;
    this.#renderer = renderer;
    this.#updatables = [];
    this.#paused = false;
    this.#clock = new Clock();
  }

  start() {
    this.#renderer.setAnimationLoop(() => {
      // tell every animated object to tick forward one frame
      this.tick();

      // render a frame
      this.#renderer.render(this.#scene, this.#camera);
    });
  }

  stop() {
    this.#renderer.setAnimationLoop(null);
  }

  pause() {
    this.#paused = true;
  }
  
  resume() {
    this.#paused = false;
    this.#clock.getDelta();
  }
  
  pauseResume() {
    this.#paused ? this.resume() : this.pause();
  }
  
  addUpdatable(...objects3d) {
    this.#updatables.push(...objects3d);
    this.#updatables = [...new Set(this.#updatables)]; // remove duplicate objects
  }
  
  tick() {
    if (this.#paused) return;
    
    // only call the getDelta function once per frame!
    const delta = this.#clock.getDelta(); 

    // console.log(
    //   `The last frame rendered in ${delta * 1000} milliseconds`,
    // );

    for (const object of this.#updatables) {
      object.tick(delta);
    }
  }
}

export { Loop };
