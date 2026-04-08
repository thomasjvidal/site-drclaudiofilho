const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Remover a classe 'elementor-invisible' que oculta elementos
html = html.replace(/elementor-invisible/g, '');

// Substituir os SVGs temporários (lazy load) pelas imagens reais
html = html.replace(/src="data:image\/svg\+xml[^"]*"/g, '');
html = html.replace(/data-lazy-src="/g, 'src="');
html = html.replace(/data-lazy-srcset="/g, 'srcset="');
html = html.replace(/data-lazy-sizes="/g, 'sizes="');

// Fixar fundos de containers Elementor (removendo prefixo data-rocket-lazy-bg-)
html = html.replace(/data-rocket-lazy-bg-[a-zA-Z0-9\-]+="[^"]*"/g, '');

fs.writeFileSync('index.html', html);
console.log("HTML limpo! elementor-invisible e lazyload removidos.");