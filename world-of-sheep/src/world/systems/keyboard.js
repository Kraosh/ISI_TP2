import { Key, Keyboard } from 'keyboard-ts'

// Doc : https://www.npmjs.com/package/keyboard-ts

function createKeyboard(container, world) {

  // make the container able to receive key events
  container.tabIndex = 1;
  container.focus();

  const keyboard = new Keyboard(container);

  keyboard.on([Key.L], event => {
    // event is classic HTML event
    event.preventDefault()
    world.toggleHelpers();
  })

  return keyboard;
}

export { createKeyboard };
