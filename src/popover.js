export default class Popover {
  constructor(button, title, text) {
    this.button = button;
    this.title = title;
    this.text = text;
    this.popover = null;

    this.button.addEventListener('click', () => this.toggle());
  }

  create() {
    const pop = document.createElement('div');
    pop.className = 'popover';
    pop.innerHTML = `<div class="popover-title">${this.title}</div>
                     <div class="popover-body">${this.text}</div>`;

    const rect = this.button.getBoundingClientRect();
    pop.style.top = `${rect.top - 50}px`;
    pop.style.left = `${rect.left + rect.width / 2}px`;
    pop.style.transform = 'translateX(-50%)';

    document.body.appendChild(pop);
    this.popover = pop;
  }

  toggle() {
    if (this.popover) {
      this.popover.remove();
      this.popover = null;
    } else {
      this.create();
    }
  }
}
