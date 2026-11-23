function showScreen(screenNumber) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.add('hidden');
  });

  const target = document.getElementById(`screen${screenNumber}`);

  if (target) {
    target.classList.remove('hidden');
  }
}

// Button 



document.getElementById('goToScreen1').addEventListener('click', () => {
  showScreen(1);
});
document.getElementById('goToScreen2').addEventListener('click', () => {
  showScreen(2);
});
document.getElementById('goToScreen3').addEventListener('click', () => {
  showScreen(3);
});
document.getElementById('goToScreen4').addEventListener('click', () => {
  showScreen(4);
});
document.getElementById('viewProjects').addEventListener('click', () => {
  showScreen(3);
});
