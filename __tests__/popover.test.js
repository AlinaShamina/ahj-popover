/**
 * @jest-environment jsdom
 */

import Popover from '../src/popover';

describe('Popover widget', () => {
  test('popover appears and disappears on click', () => {
    document.body.innerHTML = `<button id="b">btn</button>`;
    const btn = document.getElementById('b');

    const pop = new Popover(btn, 'Title', 'Text');

    btn.click();
    expect(document.querySelector('.popover')).not.toBeNull();

    btn.click();
    expect(document.querySelector('.popover')).toBeNull();
  });
});
