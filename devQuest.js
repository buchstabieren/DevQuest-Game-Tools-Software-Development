const W = [
  [
    "🌱",
    "Origens do Software",
    "Aula 1",
    "Software, sistemas operacionais, algoritmos, linguagens e metodologias.",
  ],
  [
    "🧩",
    "A Crise e as Pessoas",
    "Aula 2",
    "Crise do software, profissionais, requisitos e mercado de TI.",
  ],
  [
    "🤝",
    "Guilda Colaborativa",
    "Aula 3",
    "Scrum, reuniões, ferramentas, versões, repositórios, testes e deploy.",
  ],
  [
    "🏗️",
    "Templo do HTML",
    "Aula 4",
    "Internet, protocolos, estrutura, tags, links, tabelas e formulários.",
  ],
  [
    "🎨",
    "Floresta do CSS",
    "Aula 5",
    "Seletores, cascata, especificidade, cores, espaçamento e texto.",
  ],
  [
    "⚡",
    "Laboratório JavaScript",
    "Aula 6",
    "Interatividade, variáveis, fluxo, funções, DOM, JSON e XML.",
  ],
];

// Formato: pergunta, alternativas, índice correto, explicação, tipo

const Q = [
  [
    [
      "Na definição simplificada da aula, software é…",
      [
        "Apenas o código-fonte",
        "Um programa e toda a documentação associada",
        "Somente o sistema operacional",
        "A parte física do computador",
      ],
      1,
      "A definição reúne programas, estruturas de dados e informações descritivas.",
    ],
    [
      "Qual é um exemplo de software básico?",
      ["Editor de imagens", "Planilha", "Sistema operacional", "Jogo"],
      2,
      "O sistema operacional integra o software básico e gerencia recursos.",
    ],
    [
      "Qual utilitário detecta e remove programas maliciosos?",
      ["Antivírus", "Compilador", "Navegador", "Editor de texto"],
      0,
      "Antivírus é um exemplo de software utilitário.",
    ],
    [
      "O sistema operacional atua como camada entre…",
      ["Dois sites", "Aplicativos e hardware", "Dois algoritmos", "HTML e CSS"],
      1,
      "Ele gerencia hardware, software e processos.",
    ],
    [
      "O que é um algoritmo?",
      [
        "Um conjunto de passos para resolver um problema",
        "Uma placa de vídeo",
        "Um erro de sintaxe",
        "Um navegador",
      ],
      0,
      "O material compara algoritmos a uma receita ou tutorial com instruções.",
    ],
    [
      "Qual metodologia trabalha com Product Owner, Scrum Master e Desenvolvedores?",
      ["Cascata", "Scrum", "HTML", "Compilação"],
      1,
      "Esses são os papéis apresentados para o time Scrum.",
    ],
    [
      "XP significa…",
      [
        "XML Programming",
        "eXtreme Programming",
        "Extra Processor",
        "eXternal Protocol",
      ],
      1,
      "XP é uma abordagem ágil de desenvolvimento.",
    ],
    [
      "O que melhor caracteriza software aplicativo?",
      [
        "Gerencia exclusivamente a CPU",
        "Executa tarefas específicas para o usuário",
        "Substitui todo o hardware",
        "É sempre um antivírus",
      ],
      1,
      "Editores, navegadores e planilhas são exemplos.",
    ],
    [
      "Qual atalho abre diretamente o Gerenciador de Tarefas no Windows?",
      ["Ctrl + Shift + Esc", "Alt + F4", "Ctrl + P", "Shift + F5"],
      0,
      "O material apresenta Ctrl + Shift + Esc como uma das opções.",
    ],
    [
      "O ciclo de vida de software serve principalmente para…",
      [
        "Eliminar requisitos",
        "Planejar as etapas de desenvolvimento",
        "Dispensar testes",
        "Impedir mudanças",
      ],
      1,
      "O SDLC orienta o planejamento da construção e evolução do software.",
    ],
  ],
  [
    [
      "Segundo a aula, a expressão “Crise do Software” surgiu em…",
      ["1995", "1965", "2005", "1940"],
      1,
      "A aula situa a origem do termo em 1965.",
    ],
    [
      "Qual problema marcou a crise do software?",
      [
        "Software não acompanhava a evolução/demanda do hardware",
        "Falta de monitores coloridos",
        "Excesso de documentação",
        "Internet muito rápida",
      ],
      0,
      "A demanda cresceu sem planejamento, métodos e profissionais suficientes.",
    ],
    [
      "Um requisito funcional descreve…",
      [
        "O que o sistema deve fazer",
        "A cor do computador",
        "Somente o orçamento",
        "A profissão do cliente",
      ],
      0,
      "Requisitos funcionais definem as funções esperadas do sistema.",
    ],
    [
      "Um requisito não funcional descreve, conforme a aula…",
      [
        "Somente o nome do sistema",
        "Como o sistema deve realizar suas funções",
        "Uma nova linguagem",
        "Apenas os botões",
      ],
      1,
      "A aula distingue o que o sistema faz de como será feito.",
    ],
    [
      "Quem levanta requisitos e modela a solução?",
      [
        "Analista de sistemas",
        "Usuário final sozinho",
        "Somente o servidor",
        "Editor CSS",
      ],
      0,
      "O analista compreende o problema e interpreta as necessidades do cliente.",
    ],
    [
      "Qual incidente envolveu doses perigosas de radiação por falhas de software?",
      ["Pentium FDIV", "Therac-25", "Arpanet", "Mosaic"],
      1,
      "O Therac-25 ilustra as graves consequências da falta de revisão, testes e documentação.",
    ],
    [
      "O bug clássico do Pentium envolvia…",
      [
        "Divisão de ponto flutuante",
        "Links HTML",
        "Arquivos CSS",
        "Falha de teclado",
      ],
      0,
      "A aula relata erros em cálculos de divisão de números com ponto flutuante.",
    ],
    [
      "Qual medida ajuda a enfrentar a crise do software?",
      [
        "Dispensar metodologia",
        "Usar técnicas, métodos, ferramentas e profissionais capacitados",
        "Não documentar",
        "Evitar revisão",
      ],
      1,
      "A profissionalização e os processos ajudam a reduzir os problemas.",
    ],
    [
      "O engenheiro de software, no enquadramento apresentado na aula, acompanha principalmente…",
      [
        "A avaliação e melhoria dos processos de desenvolvimento",
        "A compra de periféricos",
        "Somente a digitação de código",
        "A instalação de impressoras",
      ],
      0,
      "O texto destaca o acompanhamento e a melhoria contínua dos processos.",
    ],
  ],
  [
    [
      "Qual é o limite apresentado para uma daily no Scrum?",
      ["15 minutos", "2 horas", "45 minutos", "Um dia inteiro"],
      0,
      "A daily é uma reunião curta para sincronização da equipe.",
    ],
    [
      "O que deve ocorrer antes de codificar, segundo a rotina apresentada?",
      [
        "Deploy direto",
        "Levantamento e análise de requisitos",
        "Excluir o repositório",
        "Ignorar o cliente",
      ],
      1,
      "Primeiro são coletadas as funções e necessidades do software.",
    ],
    [
      "Qual é uma boa prática de reunião?",
      [
        "Não definir responsáveis",
        "Enviar pauta previamente",
        "Convidar todos sempre",
        "Não registrar decisões",
      ],
      1,
      "Pauta, duração, participantes e responsabilidades tornam reuniões mais produtivas.",
    ],
    [
      "Qual ferramenta é apresentada como quadro visual de tarefas?",
      ["Trello", "DNS", "HTML", "CPU"],
      0,
      "Trello é uma ferramenta colaborativa de organização de atividades.",
    ],
    [
      "Para que serve o controle de versão?",
      [
        "Registrar e gerenciar mudanças no código",
        "Formatar imagens",
        "Apagar todos os testes",
        "Substituir o navegador",
      ],
      0,
      "Ele ajuda a integrar e recuperar versões ao longo do projeto.",
    ],
    [
      "Qual plataforma é citada como repositório de códigos?",
      ["GitHub", "Zoom", "CSS", "SMTP"],
      0,
      "GitHub hospeda e facilita o compartilhamento de repositórios.",
    ],
    [
      "Quando devem ocorrer os testes de software?",
      [
        "Somente após o lançamento",
        "Também durante a codificação, não apenas ao final",
        "Nunca no desenvolvimento",
        "Só antes dos requisitos",
      ],
      1,
      "A aula recomenda testes ao longo do desenvolvimento e automação.",
    ],
    [
      "Antes de integrar seu código, o programador deve…",
      [
        "Validá-lo contra o especificado",
        "Remover a documentação",
        "Evitar revisão",
        "Desativar controle de versão",
      ],
      0,
      "A validação inicial pelo próprio programador precede a integração.",
    ],
    [
      "O que significa reúso no desenvolvimento?",
      [
        "Reaproveitar soluções ou código existentes",
        "Reescrever tudo do zero",
        "Descartar bibliotecas",
        "Duplicar erros",
      ],
      0,
      "O reúso evita retrabalho e aproveita componentes.",
    ],
    [
      "O deploy está associado a…",
      [
        "Disponibilizar/implantar a aplicação",
        "Criar a pauta da daily",
        "Criar uma tag de parágrafo",
        "Alterar a cor de texto",
      ],
      0,
      "Deploy corresponde à implantação/disponibilização de uma versão.",
    ],
  ],
  [
    [
      "O HTML é uma linguagem de…",
      [
        "Programação de banco de dados",
        "Marcação de hipertexto",
        "Estilo apenas",
        "Sistema operacional",
      ],
      1,
      "HTML descreve e estrutura o conteúdo de páginas web.",
    ],
    [
      "Qual tecnologia define a aparência visual de uma página?",
      ["CSS", "FTP", "IP", "JSON"],
      0,
      "HTML estrutura, CSS estiliza e JavaScript implementa interações.",
    ],
    [
      "Qual protocolo é usado na transferência de arquivos?",
      ["FTP", "SMTP", "DNS", "CSS"],
      0,
      "FTP significa File Transfer Protocol.",
    ],
    [
      "Qual protocolo é relacionado ao envio de e-mails?",
      ["SMTP", "HTML", "WWW", "CSS"],
      0,
      "SMTP significa Simple Mail Transfer Protocol.",
    ],
    [
      "Qual sistema associa nomes de domínio a endereços de rede?",
      ["DNS", "CSS", "JSON", "DOM"],
      0,
      "O material esclarece que DNS é um sistema de nomenclatura.",
    ],
    [
      "Na arquitetura cliente-servidor, quem disponibiliza o serviço?",
      ["Servidor", "Apenas o mouse", "Somente o CSS", "A tag p"],
      0,
      "Clientes acessam serviços disponibilizados por servidores.",
    ],
    [
      "Qual tag marca um parágrafo?",
      ["<p>", "<img>", "<table>", "<head>"],
      0,
      "Um parágrafo pode ser escrito como <p>Texto</p>.",
      "Código",
    ],
    [
      "Qual tag cria um link?",
      ["<a>", "<h1>", "<ul>", "<tr>"],
      0,
      "A tag âncora <a> usa href para indicar o destino.",
      "Código",
    ],
    [
      "Qual atributo indica o endereço de uma imagem?",
      ["src", "href", "class", "style"],
      0,
      'Exemplo: <img src="foto.png" alt="Descrição">.',
      "Código",
    ],
    [
      "Qual tag é usada para criar um formulário?",
      ["<form>", "<footer>", "<strong>", "<li>"],
      0,
      "A tag <form> agrupa os campos do formulário.",
      "Código",
    ],
    [
      "O que indica uma tag de fechamento?",
      [
        "Uma barra / antes do nome",
        "Um # antes do nome",
        "Um ponto .",
        "Um sinal de +",
      ],
      0,
      "Exemplo: <p> abre e </p> fecha o parágrafo.",
      "Código",
    ],
  ],
  [
    [
      "Qual sintaxe CSS define texto azul para todos os h1?",
      [
        "h1 { color: blue; }",
        "h1 = blue",
        "<h1 color=blue>",
        "h1 { text: blue }",
      ],
      0,
      "A sintaxe usa seletor, chaves, propriedade, dois-pontos e valor.",
      "Código",
    ],
    [
      "Como selecionar a classe “alerta”?",
      [".alerta", "#alerta", "*alerta", "alerta()"],
      0,
      "Classes são selecionadas por ponto.",
      "Código",
    ],
    [
      "Como selecionar o id “titulo”?",
      ["#titulo", ".titulo", "@titulo", "titulo()"],
      0,
      "IDs são selecionados por cerquilha (#).",
      "Código",
    ],
    [
      "Qual seletor CSS é universal?",
      ["*", "#", ".", "&"],
      0,
      "O asterisco seleciona todos os elementos.",
      "Código",
    ],
    [
      "Qual propriedade altera a cor do fundo?",
      ["background-color", "font-size", "text-align", "margin"],
      0,
      "background-color define a cor de fundo.",
      "Código",
    ],
    [
      "Qual propriedade controla o espaço externo de um elemento?",
      ["margin", "padding", "color", "font-weight"],
      0,
      "Margin define espaçamento externo.",
      "Código",
    ],
    [
      "Qual propriedade controla o espaço interno?",
      ["padding", "margin", "src", "href"],
      0,
      "Padding define o espaço entre o conteúdo e a borda.",
      "Código",
    ],
    [
      "Qual propriedade centraliza horizontalmente um texto?",
      [
        "text-align: center;",
        "font-size: center;",
        "margin: text;",
        "color: center;",
      ],
      0,
      "text-align controla o alinhamento do texto.",
      "Código",
    ],
    [
      "Para que serve o !important?",
      [
        "Dar prioridade especial a uma declaração",
        "Criar uma variável",
        "Fechar a tag",
        "Importar HTML",
      ],
      0,
      "A aula o apresenta ao discutir a ordem da cascata.",
      "Código",
    ],
    [
      "Por que compartilhar um arquivo .css entre várias páginas?",
      [
        "Evita repetição e facilita manutenção",
        "Obriga duplicar estilos",
        "Elimina HTML",
        "Desativa seletores",
      ],
      0,
      "Uma alteração de estilo pode refletir em todas as páginas vinculadas.",
    ],
    [
      "Qual propriedade define o tamanho da fonte?",
      ["font-size", "background-image", "margin", "src"],
      0,
      "Exemplo: font-size: 12px;.",
      "Código",
    ],
  ],
  [
    [
      "Quem projetou o JavaScript em 1995?",
      ["Brendan Eich", "Tim Berners-Lee", "Alan Turing", "Linus Torvalds"],
      0,
      "A aula relaciona a origem do JavaScript à equipe do Netscape.",
    ],
    [
      "JavaScript e Java são…",
      [
        "Linguagens diferentes, apesar dos nomes semelhantes",
        "A mesma linguagem",
        "Dois nomes para CSS",
        "Formatos de imagem",
      ],
      0,
      "A semelhança do nome foi uma decisão de marketing, segundo a aula.",
    ],
    [
      "Qual é o nome do padrão da linguagem JavaScript?",
      ["ECMAScript", "FTP", "HTML5", "DNS"],
      0,
      "ECMAScript padronizou a linguagem entre implementações.",
    ],
    [
      "Qual tag permite inserir JavaScript no HTML?",
      ["<script>", "<style>", "<js>", "<code>"],
      0,
      "É possível usar script no documento ou carregar arquivo externo.",
      "Código",
    ],
    [
      "Como carregar um arquivo externo chamado app.js?",
      [
        '<script src="app.js"></script>',
        '<style href="app.js">',
        '<js file="app.js">',
        '<script href="app.js">',
      ],
      0,
      "O atributo src indica a origem do arquivo JavaScript.",
      "Código",
    ],
    [
      "Qual comando exibe uma mensagem no console?",
      [
        'console.log("Oi");',
        'print.html("Oi");',
        'css.log("Oi");',
        "document.alert.log()",
      ],
      0,
      "console.log é útil para testes e depuração.",
      "Código",
    ],
    [
      "Qual comando exibe um alerta pop-up?",
      ['alert("Olá");', 'console.pop("Olá");', "html.alert()", "css.popup()"],
      0,
      "alert exibe uma caixa de mensagem no navegador.",
      "Código",
    ],
    [
      "Como selecionar um elemento pelo id em JavaScript?",
      [
        'document.getElementById("par1")',
        'document.getClass("par1")',
        'css.select("par1")',
        'window.html("par1")',
      ],
      0,
      "O método getElementById busca o elemento por seu identificador.",
      "Código",
    ],
    [
      "Qual propriedade é usada no exemplo da aula para alterar o conteúdo de um elemento?",
      ["innerHTML", "font-size", "hrefOnly", "background-color"],
      0,
      "Atribuir novo conteúdo a innerHTML altera o interior do elemento.",
      "Código",
    ],
    [
      "O que faz uma estrutura if?",
      [
        "Executa um bloco conforme uma condição",
        "Cria uma imagem",
        "Define uma cor",
        "Transfere arquivos",
      ],
      0,
      "if é um comando de decisão.",
      "Código",
    ],
    [
      "O que faz while?",
      [
        "Repete instruções enquanto a condição for verdadeira",
        "Cria uma página",
        "Envia e-mail",
        "Define uma classe CSS",
      ],
      0,
      "while é uma estrutura de repetição.",
      "Código",
    ],
    [
      "JSON é utilizado principalmente para…",
      [
        "Representar dados estruturados em uma notação de objetos",
        "Estilizar texto",
        "Substituir o sistema operacional",
        "Criar tags HTML",
      ],
      0,
      "A aula apresenta JSON como notação de objetos para representação de dados.",
    ],
    [
      "Qual evento HTML dispara código quando o usuário clica?",
      ["onclick", "oncolor", "onmargin", "onjson"],
      0,
      "onclick associa uma ação ao clique.",
      "Código",
    ],
  ],
];

const KEY = "devquest-v1";
let S;
try {
  S = JSON.parse(localStorage.getItem(KEY)) || {
    xp: 0,
    total: 0,
    correct: 0,
    streak: 0,
    best: 0,
    completed: [],
    miss: [],
  };
} catch {
  S = {
    xp: 0,
    total: 0,
    correct: 0,
    streak: 0,
    best: 0,
    completed: [],
    miss: [],
  };
}
let run = null;

const $ = (id) => document.getElementById(id),
  save = () => {
    localStorage.setItem(KEY, JSON.stringify(S));
    draw();
  },
  shuffle = (a) => a.slice().sort(() => Math.random() - 0.5);

function draw() {
  $("xp").textContent = S.xp;
  $("level").textContent = 1 + Math.floor(S.xp / 250);
  $("streak").textContent = S.streak;
  $("total").textContent = S.total;
  $("rate").textContent = S.total
    ? Math.round((S.correct / S.total) * 100) + "%"
    : "0%";
  $("done").textContent = S.completed.length + "/6";
  $("best").textContent = S.best ? S.best + "%" : "—";
  $("review").disabled = !S.miss.length;
  $("worlds").innerHTML = "";
  W.forEach((w, i) => {
    let n = Q[i].length,
      finished = S.completed.includes(i),
      el = document.createElement("article");
    el.className = "card";
    el.innerHTML = `<div class="emoji">${w[0]}</div><div class="eyebrow">${w[2]} · ${n} desafios</div><h3>${w[1]}</h3><p>${w[3]}</p><div class="progress"><i style="width:${finished ? 100 : 0}%"></i></div><small class="tiny">${finished ? "✓ Mundo concluído" : "Pronto para explorar"}</small><button class="btn">${finished ? "Rejogar mundo" : "Iniciar missão →"}</button>`;
    el.querySelector("button").onclick = () => start(i);
    $("worlds").append(el);
  });
}

function show() {
  $("game").classList.add("show");
  $("game").scrollIntoView({ behavior: "smooth", block: "start" });
  $("finish").classList.add("hidden");
  $("flashArea").classList.add("hidden");
  $("play").classList.remove("hidden");
}

function start(world) {
  let items = Q[world].map((q, i) => ({ q, id: world + "-" + i }));
  begin(items, "Mundo " + (world + 1) + " · " + W[world][1], world, false);
}

function begin(items, label, world, boss) {
  if (!items.length) return;
  run = {
    items: shuffle(items),
    label,
    world,
    boss,
    index: 0,
    score: 0,
    lives: boss ? 3 : Infinity,
    locked: false,
  };
  show();
  render();
}

function render() {
  let r = run,
    item = r.items[r.index];
  r.locked = false;
  $("mode").textContent = r.label;
  $("counter").textContent = `${r.index + 1} / ${r.items.length}`;
  $("hearts").textContent = r.boss
    ? "❤️ " + r.lives + " vidas"
    : "✨ " + r.score + " acertos";
  $("bar").style.width = (r.index / r.items.length) * 100 + "%";
  $("kind").textContent = item.q[4] || "Conhecimento";
  $("question").textContent = item.q[0];
  $("feedback").style.display = "none";
  $("next").classList.add("hidden");
  $("answers").innerHTML = "";
  let choices = item.q[1].map((v, i) => ({ v, i }));
  shuffle(choices).forEach((c) => {
    let b = document.createElement("button");
    b.className = "answer";
    b.textContent = c.v;
    b.onclick = () => answer(c.i, b);
    $("answers").append(b);
  });
}

function answer(choice, clicked) {
  let r = run;
  if (r.locked) return;
  r.locked = true;
  let item = r.items[r.index],
    ok = choice === item.q[2];
  S.total++;
  if (ok) {
    r.score++;
    S.correct++;
    S.streak++;
    S.xp += 10 + (S.streak % 5 === 0 ? 15 : 0);
    S.miss = S.miss.filter((id) => id !== item.id);
  } else {
    S.streak = 0;
    if (!S.miss.includes(item.id)) S.miss.push(item.id);
    if (r.boss) r.lives--;
  }
  Array.from($("answers").children).forEach((b) => {
    b.disabled = true;
    if (b.textContent === item.q[1][item.q[2]]) b.classList.add("correct");
    if (b === clicked && !ok) b.classList.add("wrong");
  });
  let f = $("feedback");
  f.className = "feedback" + (ok ? "" : " bad");
  f.style.display = "block";
  f.innerHTML =
    "<strong>" +
    (ok ? "✓ Acertou! +XP" : "✕ Quase! Aprenda com o erro:") +
    "</strong><p></p>";
  f.querySelector("p").textContent = item.q[3];
  $("hearts").textContent = r.boss
    ? "❤️ " + r.lives + " vidas"
    : "✨ " + r.score + " acertos";
  $("next").textContent =
    r.index === r.items.length - 1 || (r.boss && r.lives === 0)
      ? "Ver resultado →"
      : "Próximo desafio →";
  $("next").classList.remove("hidden");
  save();
}
$("next").onclick = () => {
  if (!run) return;
  run.index++;
  if (run.index >= run.items.length || (run.boss && run.lives === 0)) end();
  else render();
};

function end() {
  let r = run,
    pct = Math.round((r.score / r.items.length) * 100);
  $("play").classList.add("hidden");
  $("finish").classList.remove("hidden");
  $("bar").style.width = "100%";
  if (r.world !== null && pct >= 70 && !S.completed.includes(r.world)) {
    S.completed.push(r.world);
    S.xp += 50;
  }
  if (r.boss) S.best = Math.max(S.best, pct);
  save();
  $("finish").innerHTML =
    `<div class="trophy">${pct >= 70 ? "🏆" : "🌱"}</div><h2>${pct >= 70 ? "Missão concluída!" : "Continue treinando!"}</h2><p>Você acertou <b>${r.score}</b> de <b>${r.items.length}</b> desafios (${pct}%). ${r.boss && r.lives === 0 ? "Suas vidas acabaram." : ""}</p><p class="muted">${pct >= 70 ? "Excelente! Continue explorando os outros mundos." : "Revise as explicações e tente novamente. Para concluir um mundo, alcance 70%."}</p><div class="actions" style="justify-content:center"><button class="btn" id="again">Jogar novamente</button><button class="btn secondary" id="back">Voltar ao mapa</button></div>`;
  $("again").onclick = () => begin(r.items, r.label, r.world, r.boss);
  $("back").onclick = quit;
}

function quit() {
  $("game").classList.remove("show");
  $("game").scrollIntoView({ behavior: "auto" });
  window.scrollTo({ top: 0, behavior: "smooth" });
}
$("quit").onclick = quit;
$("boss").onclick = () =>
  begin(
    shuffle(
      Q.flatMap((a, w) => a.map((q, i) => ({ q, id: w + "-" + i }))),
    ).slice(0, 18),
    "⚔ Chefão final · 3 vidas",
    null,
    true,
  );
$("review").onclick = () => {
  let a = S.miss
    .map((id) => {
      let [w, i] = id.split("-").map(Number);
      return { q: Q[w][i], id };
    })
    .filter((x) => x.q);
  begin(a, "↻ Revisão dos erros", null, false);
};
$("flashBtn").onclick = () => {
  let a = shuffle(
    Q.flatMap((x, w) => x.map((q, i) => ({ q, id: w + "-" + i }))),
  );
  let idx = 0,
    reveal = false;
  run = null;
  show();
  $("play").classList.add("hidden");
  $("flashArea").classList.remove("hidden");
  $("mode").textContent = "🃏 Cartas de memória";
  $("hearts").textContent = "Clique para virar";

  function card() {
    let q = a[idx].q;
    $("counter").textContent = idx + 1 + " / " + a.length;
    $("bar").style.width = (idx / a.length) * 100 + "%";
    $("flashArea").innerHTML =
      '<div class="flash" tabindex="0" role="button"><div class="eyebrow">' +
      (reveal ? "RESPOSTA" : "PERGUNTA") +
      '</div><h3></h3><p class="muted"></p></div><div class="actions"><button class="btn secondary" id="prevCard">← Anterior</button><button class="btn" id="flip">Virar carta</button><button class="btn secondary" id="nextCard">Próxima →</button><button class="btn secondary" id="leave">Sair</button></div>';
    $("flashArea").querySelector("h3").textContent = reveal ? q[1][q[2]] : q[0];
    $("flashArea").querySelector(".flash p").textContent = reveal
      ? q[3]
      : "Pense na resposta antes de virar.";
    let flip = () => {
      reveal = !reveal;
      card();
    };
    $("flip").onclick = flip;
    $("flashArea").querySelector(".flash").onclick = flip;
    $("flashArea").querySelector(".flash").onkeydown = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        flip();
      }
    };
    $("prevCard").onclick = () => {
      idx = (idx - 1 + a.length) % a.length;
      reveal = false;
      card();
    };
    $("nextCard").onclick = () => {
      idx = (idx + 1) % a.length;
      reveal = false;
      card();
    };
    $("leave").onclick = quit;
  }
  card();
};
$("reset").onclick = () => {
  if (
    confirm("Apagar XP, estatísticas e histórico de erros deste navegador?")
  ) {
    localStorage.removeItem(KEY);
    location.reload();
  }
};
draw();
