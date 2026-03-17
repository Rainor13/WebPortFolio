//Mirar lo de ES Modules porque no entiendo bien

// import Scramble from '@ignatiusmb/scramble';

// console.log(Scramble);

// Referencias a los elementos

const loader = document.getElementById('loader');
const content = document.getElementById('content');
const progressLogEl = document.getElementById('percentage'); // Simulación de logs
const beginLogEl = document.createElement('textarea');

// Estado de las animaciones
const animationsState = {
  porcentajes: false,
  cuadro: false,
  texto: false,
};

//Esto es para lo del dichoso porcentaje NUOVO NUOVO
// Objeto que simula el progreso de la animación
var myObject = {
  prop1: 0,
  prop2: '0%',
  prop3: true,
  prop4: false

  // progress: 0, // Progreso inicial
};

// Animación de carga con Anime.js
anime({
  targets: myObject,
  prop1: 534, // El porcentaje de carga llega al 100
  prop2: '100%', // El texto del porcentaje también llega al 100%
  // progress: 100, // Progreso hasta el 100%
  easing: 'linear',
  round: 1, // Redondear el valor del porcentaje
  // duration: 3000, // Duración de la animación
  duration: 1000000, //La de trabajo


  update: function() {
    // Actualizar el texto del porcentaje durante la animación
    progressLogEl.innerText  = 'progress ' + myObject.prop2 + '\n' + 'updates ' + myObject.prop1 + '\n' + 'begin ' + myObject.prop3 + '\n' + 'completed ' + myObject.prop4;
    // Actualizar el texto del porcentaje durante la animación
    // progressLogEl.textContent = myObject.progress + '%';

    // Cambiar prop4 a true cuando prop2 llegue al 100%
    if (myObject.prop2 === '100%') {
      myObject.prop4 = true;
    }

  },

  complete: function() {
    animationsState.porcentajes = true; // Marcar esta animación como completada
  }

});

// ANIMACION PARA QUE EL TEXTO APAREZCA AL FONDO Y VAYA COMO SUBIENDO

const terminalText = `
=============================================
IBM Personal Computer XT - SYSTEM BOOT SEQUENCE
=============================================
BIOS Version 1.10
Copyright IBM Corp 1981, 1983

PERFORMING MEMORY TEST .................. 640 KB OK

--------------------------------------------------
SYSTEM CONFIGURATION
--------------------------------------------------
- Processor: Intel 8088, 4.77 MHz .......... DETECTED
- Floppy Drive(s): 1 (A:) .................. READY
- Hard Disk(s): 1 (C:), 10 MB .............. READY
- Serial Port(s): 1 ....................... CONFIGURED
- Parallel Port(s): 1 ..................... CONFIGURED

--------------------------------------------------
PERFORMING SYSTEM DIAGNOSTICS
--------------------------------------------------
- RAM Check ............................... 640 KB PASSED
- Keyboard ................................. DETECTED
- Floppy Drive A ........................... READY
- Hard Disk C .............................. READY
- Video Adapter: MDA ...................... DETECTED

--------------------------------------------------
LOADING PC-DOS VERSION 2.10
--------------------------------------------------
- Reading Boot Sector ..................... DONE
- Loading System Files .................... DONE
- Initializing Device Drivers ............. DONE
- Mounting File Systems ................... DONE

--------------------------------------------------
PC-DOS SUCCESSFULLY LOADED
--------------------------------------------------

WELCOME TO IBM PERSONAL COMPUTER XT
---------------------------------------------
- Current Date: 01-01-1990
- Current Time: 10:00:00

Enter new date (MM-DD-YYYY): _
`;

const terminalDiv = document.getElementById('loader-text');
let currentIndex = 0;

// Bloques de texto que se mostrarán de golpe
const textBlocks = [
  terminalText.slice(1, 1625), //bloque

  // terminalText.slice(1, 213), //bloque
  // terminalText.slice(213, 243), // escrito
  // terminalText.slice(243, 400),//bloque
  // terminalText.slice(400, 420), // escrito
  // terminalText.slice(420, 446), //bloque
  // terminalText.slice(446, 471), // escrito
  // terminalText.slice(471, 501), //bloque
  // terminalText.slice(501, 522), // escrito
  // terminalText.slice(522, 542), //bloque
  // terminalText.slice(542, 577), // escrito
  // terminalText.slice(577, 599),//bloque
  // terminalText.slice(599, 633),// escrito
  // terminalText.slice(633, 777),//bloque
  // terminalText.slice(777, 823),// escrito
  // terminalText.slice(823, 834),//bloque
  // terminalText.slice(834, 877),// escrito
  // terminalText.slice(877, 894),//bloque
  // terminalText.slice(894, 928),// escrito
  // terminalText.slice(928, 942),//bloque
  // terminalText.slice(942, 979),// escrito
  // terminalText.slice(979, 1000),//bloque
  // terminalText.slice(1000, 1033),// escrito
  // terminalText.slice(1033, 1185),//bloque
  // terminalText.slice(1185, 1212),// escrito
  // terminalText.slice(1212, 1235),//bloque
  // terminalText.slice(1235, 1261),// escrito
  // terminalText.slice(1261, 1291),//bloque
  // terminalText.slice(1291, 1310),// escrito
  // terminalText.slice(1310, 1334),//bloque
  // terminalText.slice(1334, 1360),// escrito
  // terminalText.slice(1360, 1507),//bloque
  // terminalText.slice(1507, 1526),// escrito
  // terminalText.slice(1526, 1625),//bloque
  // terminalText.slice(1625),// escrito
];

let currentBlock = 0;

// Función auxiliar para renderizar texto con saltos de línea
function renderTextWithLineBreaks(text) {
  return text.replace(/\n/g, '<br>');
}

// Alternar entre bloque de golpe y carácter por carácter
const isBlockDisplay = (index) => index % 2 === 0;

function typeText() {
  if (currentBlock < textBlocks.length) {
    const block = textBlocks[currentBlock];

    if (isBlockDisplay(currentBlock)) {
      // Mostrar bloque de golpe
      terminalDiv.innerHTML += renderTextWithLineBreaks(block);
      currentBlock++;
      setTimeout(typeText, 300); // Pequeño retraso antes del siguiente bloque
    } else {
      let blockIndex = 0;

      // Función para escribir carácter por carácter
      function typeBlock() {
        if (blockIndex < block.length) {
          const char = block[blockIndex];
          terminalDiv.innerHTML += char === '\n' ? '<br>' : char;
          blockIndex++;
          // setTimeout(typeBlock, Math.random() * 5 + 5);
          setTimeout(typeBlock, Math.random() * 1 + 1); // la de trabajar
        } else {
          currentBlock++;
          typeText(); // Continuar con el siguiente bloque
        }
      }

      typeBlock();
    }
  } else {
    // Agrega el cursor parpadeante al final
    const cursor = document.createElement('span');
    cursor.classList.add('cursor');
    terminalDiv.appendChild(cursor);
    animationsState.texto = true; // Marcar esta animación como completada
  }
}

function checkAnimationsCompleted() {
  console.log("Comprobacion");
  if (animationsState.porcentajes && animationsState.texto) {
    // Ocultar loader y mostrar el contenido principal
    loader.style.opacity = 0;
    loader.style.transition = 'opacity 0.5s ease';
    loader.addEventListener('transitionend', () => {
      loader.style.display = 'none'; // Ocultar loader completamente
      content.style.display = 'block'; // Mostrar el contenido inicial
      anime({
        targets: '#content',
        opacity: [0, 1], // Desvanecer el contenido
        // duration: 1000,
        duration: 500, // la de trabajar
        easing: 'easeInOutQuad',
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  typeText();
  console.log("DOM cargado, iniciando verificaciones...");
  setInterval(checkAnimationsCompleted, 100);
});










// document.getElementById("boton-hamburguesa").addEventListener("click", function () {
//   var menu = document.getElementById("menu-hamburguesa");
//   if (menu.style.display === "none" || menu.style.display === "") {
//     menu.style.display = "block";
//   } else {
//     menu.style.display = "none";
//   }
// });

document.querySelector('.menu-toggle').addEventListener('click', function () {
  this.classList.toggle('is-active');
});

// const menuButton = document.querySelector('.menu-hamburguesa');
// menuButton.addEventListener('click', function () {
//   this.classList.toggle('is-active');
// });

var body = document.querySelector('body'),
  introInitials = document.querySelector('.intro-initials span'),
  introTitle = document.querySelector('.intro-title span'),
  mainTL = gsap.timeline(),
  introTextTL = gsap.timeline();

// Configuración inicial
gsap.set(introInitials, { autoAlpha: 0, scale: 2 });
gsap.set(introTitle, { autoAlpha: 0, scale: 0 });

function set() {
  introTextTL
    .set(introInitials, { autoAlpha: 0, scale: 2 }, 0)
    .set(introTitle, { autoAlpha: 0, scale: 0 }, 0);
}
function init() {
  mainTL.to(body, {duration: 0.5, autoAlpha: 1 }, 0)
    .call(animateIntroText, 0);
  // con call funciona
}

// intro
function animateIntroText() {
  introTextTL
    .to(introInitials, {duration: 0.5, autoAlpha: 1, scale: 1, ease: "power4.in" }, 0)
    .to(introTitle, {duration: 0.5, autoAlpha: 1, scale: 1, ease: "power4.in" }, .5)
    .to(introTitle, {duration: 1.5, scrambleText: { text: 'Web Design &amp; Development.', chars: "lowerCase", revealDelay: .4 }}, 1.5);

  console.log('animate intro text');
}

init();
// ----- EVENT HANDLERS ----- //

// intro - for testing only
introTitle.addEventListener('click', function (e) {
  // animateIntroText();

  introTextTL.restart();
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var scrambleprueba = document.querySelector('.texto-prueba span');

const jumbler = scramble(scrambleprueba);
jumbler.worker.original;
jumbler.run();

scrambleprueba.addEventListener('click', function (e) {
  jumbler.finished()
});

