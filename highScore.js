function printHighscores() {
    let highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    console.log("Highscores loaded:", highscores); // Debugging log
    highscores.sort((a, b) => b.score - a.score);
  
    let olEl = document.getElementById("highscores");
    highscores.forEach(score => {
      let liTag = document.createElement("li");
      liTag.textContent = `${score.name} - ${score.score}`;
      olEl.appendChild(liTag);
    });
  }
  
  function clearHighscores() {
    localStorage.removeItem("highscores");
    window.location.reload();
  }
  
  document.getElementById("clear").onclick = clearHighscores;
  printHighscores();
  