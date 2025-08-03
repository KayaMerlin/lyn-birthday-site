# Site de Aniversário da Lyn 💜

Site interativo com múltiplas funcionalidades organizadas de forma modular.

## 📁 Estrutura do Projeto

```
lyn-birthday-site/
├── index.html              # Arquivo principal
├── styles/
│   └── main.css            # Estilos principais
├── js/
│   ├── main.js            # Coordenador principal
│   ├── navigation.js      # Sistema de navegação
│   └── utils.js           # Funções utilitárias
├── pages/
│   ├── love.html          # Pedido de namoro interativo
│   ├── widget.html        # Menu de escolha
│   ├── story.html         # História interativa
│   ├── ending-blue.html   # Final azul (Sonic)
│   ├── ending-red.html    # Final vermelho (Shadow)
│   ├── terminal.html      # Terminal Kaya.exe
│   └── gallery.html       # Galeria (placeholder)
└── arquivos/
    ├── background.jpg     # Fundo do site
    ├── coraline.mp3      # Música de fundo
    ├── coraline.png      # Imagem Coraline
    ├── sonic.gif         # GIF Sonic
    ├── gekko.gif         # GIF Gekko
    ├── genshin.png       # Imagem Genshin
    └── logo.png          # Logo
```

## 🚀 Funcionalidades

### 1. **Pedido de Namoro Interativo**
- Botão "Sim" cresce quando ela clica "Não"
- Mensagens de bolha quando tenta fugir

### 2. **Menu de Widgets**
- Navegação entre diferentes seções
- História Interativa
- Terminal
- Galeria (em construção)

### 3. **História Interativa "A Porta Roxa"**
- Tema: Coraline + Valorant + Sonic/Shadow
- Referência ao Valorant e melhoria da Lyn
- Dois finais diferentes (Azul e Vermelho)

### 4. **Terminal Kaya.exe**
- Comando especial: "sair"
- Mensagens emocionais e românticas
- Frase especial: "E agora vai me tratar bem"

### 5. **Galeria**
- Placeholder para fotos futuras
- Mensagem carinhosa sobre saudade

## 🎨 Elementos Visuais

- **Elementos Flutuantes**: Coraline, Sonic, Gekko, Genshin
- **Música de Fundo**: Tema do Coraline
- **Controle de Música**: Botão flutuante
- **Bolhas de Texto**: Mensagens interativas
- **Tema Roxo**: Cores inspiradas em Coraline

## 🔧 Como Funciona

1. **Carregamento**: O `main.js` carrega todas as páginas dinamicamente
2. **Navegação**: O `navigation.js` gerencia a troca entre páginas
3. **Utilidades**: O `utils.js` fornece funções comuns
4. **Modularidade**: Cada página é um arquivo HTML separado

## 💜 Fluxo da Experiência

1. **Pedido de Namoro** (love.html)
2. **Menu de Escolha** (widget.html)
3. **Experiências**:
   - História Interativa com finais
   - Terminal com mensagens especiais
   - Galeria (futura implementação)
