const addTask = document.querySelector('.add-item');
const inputText = document.querySelector('.text-value');
const container = document.querySelector('.container');
let arrSize = 0;
addTask.addEventListener('click', () => {
  if (inputText.value.trim() === '') {
    alert('Enter-text');
    return;
  } else {
    const html = `<div class="button-container">
    <button class="tick-button">&#10004;</button>
    <button class="cross-button"  onclick="removeTask()"> 
    &#10008;</button>
    <button class="exclamation-button">&#9888;</button>
    <span class="text-info">${inputText.value}</span>
    <hr/>
  </div>
  `;

    inputText.value = '';
    container.insertAdjacentHTML('beforeend', html);
    const crossButtons = document.querySelectorAll('.cross-button');
    const lastCrossButton = crossButtons[crossButtons.length - 1];
    lastCrossButton.addEventListener('click', removeTask);

    const tickButtons = document.querySelectorAll('.tick-button');
    const lastTickButton = tickButtons[tickButtons.length - 1];
    lastTickButton.addEventListener('click', () => {
      alert('you have saved into db');
    });

    const exclamationButtons = document.querySelectorAll('.exclamation-button');
    const exclamationButton = exclamationButtons[exclamationButtons.length - 1];
    exclamationButton.addEventListener('click', (event) => {
      const buttonContainer = event.target.parentElement;
      // Toggle the background color between aqua and the original color
      if (buttonContainer.style.backgroundColor !== 'aqua') {
        buttonContainer.dataset.originalColor =
          buttonContainer.style.backgroundColor;
        buttonContainer.style.backgroundColor = 'aqua';
      } else {
        buttonContainer.style.backgroundColor =
          buttonContainer.dataset.originalColor;
      }
    });
  }
});

const aboutButton = document.querySelector('.btn-about');
aboutButton.addEventListener('click', () => {
  document.querySelector('.aboutUs').style.display = 'block';
});

const clearButton = document.querySelector('.btn-clear');
clearButton.addEventListener('click', () => {
  document.querySelector('.aboutUs').style.display = 'none';
});

function removeTask(event) {
  const buttonContainer = event.target.parentElement;
  buttonContainer.remove();
}
