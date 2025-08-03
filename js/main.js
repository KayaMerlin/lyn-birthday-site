// Arquivo principal que coordena todo o site
class LynSite {
  constructor() {
    this.nav = nav;
    this.init();
  }

  async init() {
    await this.loadPages();
    this.nav.loadPage('love');
  }

  async loadPages() {
    const pages = [
      'love',
      'widget', 
      'story',
      'ending-blue',
      'ending-red',
      'terminal',
      'gallery'
    ];

    for (const page of pages) {
      try {
        const response = await fetch(`pages/${page}.html`);
        const html = await response.text();
        this.nav.registerPage(page, html);
      } catch (error) {
        console.error(`Erro ao carregar página ${page}:`, error);
      }
    }
  }
}

// Inicializar o site quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  new LynSite();
});
