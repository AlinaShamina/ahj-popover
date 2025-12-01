import './popover.css';
import Popover from './popover';

const btn = document.getElementById('btn-popover');

new Popover(btn, 'Popover title', 'And here’s some amazing content.');
