/**
 * @jest-environment jsdom
 */
import Popover from '../src/popover';

describe('Popover widget', () => {
  test('popover toggles', () => {
    document.body.innerHTML = `<button id="btn">button</button>`;
    const btn = document.getElementById('btn');

    new Popover(btn, 'Title', 'Text');

    btn.click();
    expect(document.querySelector('.popover')).not.toBeNull();

    btn.click();
    expect(document.querySelector('.popover')).toBeNull();
  });
});
