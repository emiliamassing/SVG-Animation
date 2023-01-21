import './style/general.css'

import { gsap } from 'gsap';

const letterM = document.querySelector('#letter-m');
const letterE = document.querySelector('#letter-e');
const letterR = document.querySelector('#letter-r');
const letterL = document.querySelector('#letter-l');
const letterI = document.querySelector('#letter-i');
const letterN = document.querySelector('#letter-n');
const letters = document.querySelectorAll('.letters');
const image = document.querySelector('#horse');

const timeline = gsap.timeline({ repeat: 1 , repeatDelay: 1});

timeline.fromTo(letterM, 
    {x: 200}, 
    {x: 1, duration: 1.2, immediateRender: false},
);

timeline.to(letterM, {
    fill: '#51668c',
    duration: 0.8
});

timeline.to(letterE, {
    fill: '#3F557A',
    duration: 0.8
});


timeline.to(letterR, {
    fill: '#30415f',
    duration: 0.8
});


timeline.to(letterL, {
    fill: '#28354a',
    duration: 0.8
});


timeline.to(letterI, {
    fill: '#30415f',
    duration: 0.8
});


timeline.to(letterN, {
    fill: '#3F557A',
    duration: 0.8
});

timeline.to(image, {
    scale: 1.1,
    duration: 1.5,
    stagger: {
        each: 0.5,
    }
});

timeline.to(letters, {
    opacity: 0,
});