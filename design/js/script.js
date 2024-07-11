// Activating strict mode
'use strict';

////////////////////////////
/////// SELECTING ELEMENTS
const iconsPlusMinus = document.querySelectorAll('.icon');
const accordionTexts = document.querySelectorAll('.accordion__text');
const accordionInitiators = document.querySelectorAll('.accordion');

////////////////////////////
/////// IMPLEMENTING FUNCTIONALITY

// Function declaration
function openCloseAccordion(accNumber) {
  iconsPlusMinus.forEach(icon => {
    icon.attributes.src.value = './assets/images/icon-plus.svg';
    icon.attributes.alt.value = 'Icon Open';
  });
  for (let accText of accordionTexts) {
    const accTextNumber = accText.dataset.accordionText;
    accText.classList.add('hidden');

    if (accNumber === accTextNumber) {
      // console.log('text', accTextNumber);
      accText.classList.toggle('hidden');

      for (let icon of iconsPlusMinus) {
        const iconNumber = icon.dataset.accordionIcon;

        if (iconNumber === accNumber) {
          icon.attributes.src.value = './assets/images/icon-minus.svg';
          icon.attributes.alt.value = 'Icon Close';
        }
      }
    }
  }
}

// Function Implementation
accordionTexts.forEach(accText => {
  if (Number(accText.dataset.accordionText) !== 1) {
    accText.classList.add('hidden');
  }
});

iconsPlusMinus.forEach(icon => {
  if (Number(icon.dataset.accordionIcon) === 1) {
    icon.attributes.src.value = './assets/images/icon-minus.svg';
    icon.attributes.alt.value = 'Icon Close';
  }
});

accordionInitiators.forEach(accordionInitiator =>
  accordionInitiator.addEventListener('click', function (e) {
    const accNumber = accordionInitiator.dataset.accordionNumber;
    if (
      e.target.classList.contains('heading--tertiary') ||
      e.target.classList.contains('icon')
    ) {
      // console.log('clicked', accNumber);
      openCloseAccordion(accNumber);
    }
  })
);
