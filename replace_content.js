const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// ==== 1. HEAD & META TAGS ====
html = html.replace(/<title>Marcos Portes – Nutrologia Aplicada<\/title>/g, '<title>Claudio Filho – Nutricionista Especialista em Performance</title>');
html = html.replace(/marcosportes\.com\.br/g, 'claudiofilho.com.br'); // Links canônicos genéricos

// ==== 2. HERO SECTION ====
html = html.replace(/Emagrecimento, equilíbrio hormonal e alta performance com acompanhamento médico especializado\./g, 'Nutrição de alta performance, ganho de massa e definição com estratégia personalizada.');
html = html.replace(/<span style="font-weight: 400;">Com o Dr\. Marcos Paulo Portes<\/span>, <strong>especialista em Nutrologia há mais de 10 anos, <\/strong>você recebe diagnóstico preciso e protocolo sob medida para <strong>transformar seu corpo com consistência\.<\/strong>/g, '<span style="font-weight: 400;">Com Claudio Filho, nutricionista especialista em performance atlética (CRN: 24764)</span>, você recebe um plano alimentar estratégico para <strong>evoluir físico, performance e consistência sem terrorismo nutricional.</strong>');
html = html.replace(/Atendimento presencial em Goiânia/g, 'Atendimento presencial em Cataguases - MG e online para todo o Brasil');

// ==== 3. LINKS WHATSAPP (BOTÕES) ====
const zapOld = /https:\/\/wa\.me\/5562981340823\?text=Ol%C3%A1%2C%20estive%20no%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr\.%20Marcos%20Paulo%20Portes\./g;
const zapNew = 'https://wa.me/5532998250000?text=Olá,%20estive%20no%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20nutricionista%20Claudio%20Filho.';
html = html.replace(zapOld, zapNew);

// ==== 4. PROTOCOLOS / SERVIÇOS ====
html = html.replace(/Protocolos exclusivos que você encontra no consultório:/g, 'Protocolos nutricionais que você encontra na clínica:');

// Box 1
html = html.replace(/Protocolo de perda de peso/g, 'Estratégia nutricional para hipertrofia e performance');
html = html.replace(/Medicamento moderno, aliado a acompanhamento médico, para acelerar a perda de peso de forma segura e controlada/g, 'Plano alimentar estruturado para aumento de massa muscular, força e rendimento físico com controle preciso de macros e timing nutricional.');

// Box 2
html = html.replace(/Implantes hormonais \(chip\)/g, 'Reeducação alimentar sem terrorismo');
html = html.replace(/Reposição hormonal prática\s*e eficaz para recuperar energia, libido, massa muscular e equilíbrio metabólico\./g, 'Ajuste de hábitos alimentares sem radicalismo, focado em consistência, aderência e evolução sustentável.');

// Box 3
html = html.replace(/Modulação metabólica e hormonal /g, 'Planejamento nutricional para fisiculturismo');
html = html.replace(/Tratamento personalizado para o Climatério, Menopausa e Deficiência Androgênica do Envelhecimento Masculino\. Reposição hormonal com ajuste preciso do metabolismo\./g, 'Protocolos específicos para atletas: bulking, cutting, pré-contest e refinamento físico com estratégia avançada.');

// Box 4
html = html.replace(/Protocolos injetáveis personalizados/g, 'Emagrecimento com preservação de massa muscular');
html = html.replace(/Vitaminas e nutrientes sob medida para otimizar saúde, estética e performance física\./g, 'Redução de gordura com manutenção de performance e massa magra, evitando efeito rebote.');

// Box Extra para Suplementação que vamos adicionar nos textos soltos:
html = html.replace(/Chegou a hora de \(finalmente\) ter o<strong> corpo e a saúde que você merece\.<\/strong>/g, 'Chegou a hora de ter um físico com resultado real, estratégia e consistência.');

// ==== 5. PARA QUEM É ====
html = html.replace(/Para <span class="titulo"><strong>homens e mulheres que querem mais energia, equilíbrio e estética corporal\. <\/strong><\/span>É para quem:/g, 'Para <span class="titulo"><strong>homens e mulheres que querem performance, estética e evolução física real. </strong></span>É para quem:');

// Itens Para quem é
html = html.replace(/Quer perder peso de forma segura, com uso controlado de medicamentos\./g, 'Quer ganhar massa muscular com estratégia, não achismo.');
html = html.replace(/Precisa equilibrar hormônios para recuperar energia, libido e disposição\./g, 'Busca emagrecer sem perder performance.');
html = html.replace(/Deseja prevenir doenças metabólicas e envelhecimento acelerado com uma estratégia de longo prazo\./g, 'Está cansado de dietas restritivas que não se sustentam.');
html = html.replace(/Já tentou outros métodos e não obteve resultados sustentáveis\./g, 'Quer melhorar físico, força e rendimento nos treinos.');
html = html.replace(/Busca melhorar estética, massa muscular e performance física\./g, 'Já treina, mas não evolui por falta de direcionamento nutricional.');
html = html.replace(/Quer melhorar a estética corporal \(reduzir gordura, aumentar a massa magra, melhorar tônus e pele\) sem sacrificar a saúde\./g, 'Precisa de acompanhamento profissional para competir ou performar em alto nível.');

// ==== 6. COMO FUNCIONA (ACCORDION) ====
html = html.replace(/Passo a passo para\s*transformar seu corpo/g, 'Passo a passo para evolução física consistente');

// Accordion 1
html = html.replace(/01\/  Agendamento pelo WhatsApp/g, '01/  Agendamento direto pelo WhatsApp');
html = html.replace(/Você agenda sua consulta de forma rápida e direta, sem burocracia\./g, 'Contato rápido, sem burocracia.');

// Accordion 2
html = html.replace(/02\/  Primeira consulta presencial/g, '02/  Primeira consulta (online ou presencial)');
html = html.replace(/Avaliação detalhada, análise de histórico, queixas, objetivos e exames \(incluindo bioimpedância\)\./g, 'Avaliação completa: rotina, alimentação, treino, objetivo e nível atual.');

// Accordion 3
html = html.replace(/03\/  Definição do protocolo/g, '03/  Estruturação do plano alimentar');
html = html.replace(/Plano personalizado, implantes hormonais, suplementação e ajustes de estilo de vida\./g, 'Definição estratégica de dieta, macros, suplementação e ajustes.');

// Accordion 4
html = html.replace(/04\/  Início imediato do tratamento/g, '04/  Início imediato da estratégia');
html = html.replace(/Aplicação das estratégias e acompanhamento próximo para garantir resposta rápida do corpo/g, 'Aplicação prática com orientação clara.');

// Accordion 5
html = html.replace(/05\/  Acompanhamento mensal/g, '05/  Acompanhamento contínuo');
html = html.replace(/Reavaliação de resultados, ajustes de doses e protocolos para manter previsibilidade\./g, 'Ajustes frequentes conforme evolução física e resposta do corpo.');

// Accordion 6
html = html.replace(/06\/  Manutenção e suporte contínuo/g, '06/  Evolução e refinamento');
html = html.replace(/Estratégias para preservar saúde, estética e performance a longo prazo\./g, 'Ajustes para manter progresso, estética e performance a longo prazo.');

// ==== 7. SOBRE O PROFISSIONAL ====
html = html.replace(/Histórias reais\. <span class="titulo">Transformações reais\.<\/span>/g, 'Resultados reais. <span class="titulo">Transformações consistentes.</span>');
html = html.replace(/Sobre o Dr\. Marcos/g, 'Sobre Claudio Filho');
html = html.replace(/Dr\. Marcos Paulo Portes/g, 'Claudio Filho');
html = html.replace(/Médico nutrólogo \| CRM-GO 18050 \| RQE Nutrologia 13854/g, 'Nutricionista | CRN: 24764 <br> Especialista em nutrição esportiva e performance');
html = html.replace(/Sou médico formado pela Universidade Federal de Goiás \(UFG\), com <strong>título de especialista em Nutrologia reconhecido \(RQE\), e mais de 10 anos de prática clínica em consultório\.<\/strong>/g, 'Atuação focada em estratégia nutricional para atletas, praticantes de musculação e pessoas que buscam evolução física real.');
html = html.replace(/Minha atuação é focada em modulação <span style="text-decoration: underline;">metabólica, perca de peso, performance e uso seguro de hormônios com critérios, evidência e resultados reais\.<\/span>/g, 'Fundador da <strong>Clínica de Nutrição Claudio Filho LTDA</strong>, com abordagem prática, direta e sem radicalismo.');
html = html.replace(/<span style="font-weight: 400;">Atendo na minha clínica no <\/span>Órion Business & Health Complex, oferecendo um acompanhamento próximo e personalizado para que cada paciente alcance resultados de forma previsível e segura\./g, '<strong>Especialista em:</strong><br>- Nutrição esportiva<br>- Performance atlética<br>- Fisiculturismo');
html = html.replace(/Além da prática clínica, sou <strong>professor de pós-graduação<\/strong> em Nutrologia no IPM Educação, onde ensino médicos de todo o país a aplicarem a Nutrologia com <strong>clareza, responsabilidade e critério\.<\/strong>/g, '- Ganho de massa muscular<br>- Emagrecimento estratégico<br>- Reeducação alimentar sem terrorismo');
html = html.replace(/<strong>Mais do que prescrever, eu investigo\.<\/strong> Cada decisão é guiada por exames, evidência científica e mais de uma década de experiência em Nutrologia\./g, '<strong>Mais do que dieta, entrega estratégia aplicada ao resultado.</strong>');

// ==== 8. ESTRUTURA DE ATENDIMENTO ====
html = html.replace(/Nosso ambiente/g, 'Estrutura de atendimento');
html = html.replace(/Um <span class="titulo">espaço pensado para cuidar de você<\/span> em todos os detalhes/g, 'Atendimento <span class="titulo">pensado para performance</span> e foco total no resultado');
html = html.replace(/Cada detalhe do nosso consultório foi planejado para que a sua experiência <strong>seja segura, confortável e reservada\.<\/strong>/g, '<ul><li>Consultório em Cataguases - MG</li><li>Atendimento presencial e online</li><li>Acompanhamento direto</li><li>Protocolos personalizados</li></ul>');
html = html.replace(/Ambiente moderno, climatizado e acolhedor, com estacionamento no local, recepção ampla e salas de atendimento privativas e equipadas para consultas e procedimentos\./g, '<strong>Aviso direto:</strong> Você não precisa de mais uma dieta. Você precisa de estratégia, ajuste e execução.<br><br><strong>O acompanhamento inclui:</strong><br>- Planejamento alimentar baseado no seu objetivo real<br>- Ajustes contínuos conforme evolução<br>- Direcionamento claro (sem achismo)<br>- Estratégia sustentável a longo prazo<br><br><strong>Resultado vem de consistência + ajuste técnico.</strong>');

// ==== 9. FOOTER E CONTATO ====
html = html.replace(/CRM: 18050<br>RQE: 13854/g, 'CRN: 24764<br>Nutricionista');
html = html.replace(/Avenida Portugal, n° 1148, Órion Business & Health Complex - Setor Marista, Goiânia - GO, 74150-030/g, 'Cataguases - MG<br>Atendimento Presencial e Online');
html = html.replace(/\(62\) 98134-0823/g, '(32) 99825-0000');
html = html.replace(/2024 Dr\. Marcos Paulo Portes\./g, '2026 Claudio Filho Nutricionista | CRN 24764');
html = html.replace(/dr\.marcosportes/g, 'claudiofilho.nutri');
html = html.replace(/Dr\. Marcos Portes/g, 'Claudio Filho');

fs.writeFileSync('index.html', html);
console.log("Substituições realizadas com sucesso!");