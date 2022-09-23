
class Resizer {
  #container
  #scene
  #camera
  #renderer

  constructor(container, scene, camera, renderer) {
    this.#container = container;
    this.#scene = scene;
    this.#camera = camera;
    this.#renderer = renderer;

    // set initial size
    this.resize();
    
    window.addEventListener('resize', () => {
      // set the size again if a resize occurs
        this.resize();
      // perform any custom actions
      this.#onResize();
    });
  }

  resize() {
      // launched with a delay letting the layout to resize
      const delay = 1; // milliseconds
      setTimeout(() => {
      this.#camera.aspect = this.#container.clientWidth / this.#container.clientHeight;
      this.#camera.updateProjectionMatrix();
  
      this.#renderer.setSize(this.#container.clientWidth, this.#container.clientHeight);
      this.#renderer.setPixelRatio(window.devicePixelRatio);
      this.#renderer.render(this.#scene, this.#camera);
    }, delay);
  }

  #onResize() { }
}

export { Resizer };
