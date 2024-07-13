const button = document.querySelector('.dimensions');

button.addEventListener('click', (event) => {
  const numberOfSquaresPerSide = prompt(
    'Enter the number of squares per side (max 100)',
    0
  );

  buildGrid(numberOfSquaresPerSide);
});

const container = document.querySelector('.container');

function buildGrid(numberOfSquaresPerSide) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  numberOfSquaresPerSide =
    numberOfSquaresPerSide > 100 ? 100 : numberOfSquaresPerSide;

  const totalSquares = Math.pow(numberOfSquaresPerSide, 2);
  const relativeWidth = Math.floor((100 / numberOfSquaresPerSide) * 100) / 100;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.flexBasis = `${relativeWidth}%`;
    container.appendChild(square);

    square.addEventListener('mouseover', (event) => {
      square.classList.add('hovered');
    });
  }
}

buildGrid(16);
