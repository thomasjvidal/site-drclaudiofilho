const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Adiciona um estilo forçado para garantir que a cópia e a seleção de texto funcionem em todos os elementos
const copyStyle = `
<style>
  * {
    -webkit-user-select: auto !important;
    -moz-user-select: auto !important;
    -ms-user-select: auto !important;
    user-select: auto !important;
  }
</style>
</head>`;

html = html.replace('</head>', copyStyle);

// Remove event listeners diretos que bloqueiam o botão direito ou seleção
html = html.replace(/oncontextmenu="[^"]*"/gi, '');
html = html.replace(/onselectstart="[^"]*"/gi, '');
html = html.replace(/ondragstart="[^"]*"/gi, '');
html = html.replace(/oncopy="[^"]*"/gi, '');

fs.writeFileSync('index.html', html);
console.log("Bloqueios de cópia e seleção removidos com sucesso.");