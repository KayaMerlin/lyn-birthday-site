// Sistema de navegação entre páginas
class Navigation {
  constructor() {
    this.currentPage = null;
    this.pages = {};
  }

  registerPage(name, htmlContent) {
    this.pages[name] = htmlContent;
  }

  loadPage(pageName) {
    if (this.pages[pageName]) {
      const container = document.getElementById('page-container');
      container.innerHTML = this.pages[pageName];
      this.currentPage = pageName;
      this.initPageEvents(pageName);
    }
  }

  initPageEvents(pageName) {
    switch(pageName) {
      case 'love':
        this.initLovePage();
        break;
      case 'widget':
        this.initWidgetPage();
        break;
      case 'story':
        this.initStoryPage();
        break;
      case 'terminal':
        this.initTerminalPage();
        break;
      case 'gallery':
        this.initGalleryPage();
        break;
    }
  }

  initLovePage() {
    const yesBtn = document.getElementById('yes-button');
    const noBtn = document.getElementById('no-button');
    let noCount = 0;

    noBtn.addEventListener('click', () => {
      noCount++;
      yesBtn.style.fontSize = `${1 + noCount * 0.4}rem`;
      yesBtn.style.padding = `${1 + noCount * 0.2}rem ${2 + noCount * 0.3}rem`;
      if (noCount > 3) showBubble('Tenta fugir não 🐍');
    });

    yesBtn.addEventListener('click', () => {
      this.loadPage('widget');
    });
  }

  initWidgetPage() {
    // Os botões já têm onclick definido no HTML
  }

  initStoryPage() {
    // Os botões já têm onclick definido no HTML
  }

  initTerminalPage() {
    const inputTerminal = document.getElementById('terminal-input');
    const outputTerminal = document.getElementById('terminal-output');

    inputTerminal.addEventListener('keypress', e => {
      if (e.key === 'Enter') {
        const value = inputTerminal.value.trim().toLowerCase();
        if (value === 'sair') {
          outputTerminal.innerHTML = `
            <p>&gt; Quando vamos sair?</p>
            <p>&gt; Sinto saudade sua.</p>
            <p class="text-purple-300 mt-2 italic">"E agora vai me tratar bem."</p>
          `;
        } else {
          outputTerminal.innerHTML = `<p>&gt; Comando '${value}' não reconhecido. Você inventa moda né?</p>`;
        }
        inputTerminal.value = '';
      }
    });
  }

  initGalleryPage() {
    // Implementação futura da galeria
  }
}

// Instância global
const nav = new Navigation();

// Função global para navegação
function goTo(pageName) {
  nav.loadPage(pageName);
}
