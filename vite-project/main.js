import './style/general.css'

import { gsap } from 'gsap';

const letterM = document.querySelector('#letter-m');

gsap.to(letterM, { x: '30vw',
    duration: 2,
    rotation: 360,
    repeat: -1
});