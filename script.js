function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Exemplo de uso:
document.body.style.backgroundColor = getRandomColor();
console.log(getRandomColor()); // Ex: #6ba0be

const botao = document.getElementById('btnCor');

botao.addEventListener('click', function() {
    // Altera a cor de fundo do body
    document.body.style.backgroundColor = getRandomColor();
});
