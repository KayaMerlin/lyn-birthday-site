// Utilidades gerais do site
class Utils {
  static showBubble(text) {
    const bubble = document.getElementById('text-bubble');
    bubble.textContent = text;
    bubble.classList.add('visible');
    setTimeout(() => bubble.classList.remove('visible'), 3000);
  }

  static toggleMusic() {
    const music = document.getElementById('bg-music');
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  }

  static loadHTML(elementId, htmlContent) {
    const container = document.getElementById(elementId);
    if (container) {
      container.innerHTML = htmlContent;
    }
  }
}

// Função global para compatibilidade
function showBubble(text) {
  Utils.showBubble(text);
}

function toggleMusic() {
  Utils.toggleMusic();
}
