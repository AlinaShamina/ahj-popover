export default class Popover {
  constructor(element, title, text) {
    this.element = element;
    this.title = title;
    this.text = text;
    this.popover = null;

    this.element.addEventListener('click', () => this.toggle());
  }

  create() {
    const pop = document.createElement('div');
    pop.className = 'popover';

    pop.innerHTML = `
      <div class="popover-title">${this.title}</div>
      <div class="popover-body">${this.text}</div>
    `;

    document.body.append(pop);

    const rect = this.element.getBoundingClientRect();

    const popRect = pop.getBoundingClientRect();

    pop.style.left = rect.left + rect.width / 2 - popRect.width / 2 + 'px';
    pop.style.top = rect.top - popRect.height - 10 + 'px';

    this.popover = pop;
  }

  toggle() {
    if (this.popover) {
      this.popover.remove();
      this.popover = null;
      return;
    }
    this.create();
  }
}
