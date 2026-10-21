const levels = [
    ["1 · Portal das Funções", "Domínio, imagem, composição e gráficos", [["Qual é o domínio de f(x)=1/(x−2)?", ["Todos os reais, exceto 2", "x ≥ 2", "Todos os reais", "x ≠ −2"], 0, "O denominador não pode ser zero: x−2 ≠ 0, então x ≠ 2."], ["Se f(x)=2x+1, quanto vale f(3)?", ["6", "7", "8", "5"], 1, "Substitua x por 3: 2·3+1=7."], ["Se f(x)=2x+1 e g(x)=x³−2, qual é f(g(x))?", ["2x³−1", "2x³−3", "x³", "2x³+1"], 1, "f(g(x))=2(x³−2)+1=2x³−3."], ["Qual é o domínio real de √(2x−14)?", ["x > 7", "x ≤ 7", "x ≥ 7", "x ≠ 7"], 2, "O radicando precisa ser não negativo: 2x−14≥0."], ["Uma peça custa R$2 por unidade e há R$1000 fixos. Qual o custo total de x peças?", ["C(x)=1000x+2", "C(x)=2x+1000", "C(x)=1002x", "C(x)=2x"], 1, "Some custo variável (2x) ao custo fixo (1000)."]]], ["2 · Floresta dos Polinômios", "Retas, parábolas, raízes e vértices", [["A função afim satisfaz f(1)=4 e f(2)=6. Qual é f(x)?", ["x+3", "2x+2", "2x−2", "3x+1"], 1, "a=(6−4)/(2−1)=2; 4=2+b, logo b=2."], ["Quais são as raízes de x²−5x+6?", ["−2 e −3", "1 e 6", "2 e 3", "−1 e −6"], 2, "Fatore: (x−2)(x−3)=0."], ["O lucro L(x)=−x²+12x−20 é máximo quando x vale:", ["4", "6", "10", "12"], 1, "A abscissa do vértice é −b/(2a)=−12/(−2)=6."], ["Qual é a área máxima de um retângulo de perímetro 100 m?", ["500 m²", "625 m²", "1000 m²", "250 m²"], 1, "Com perímetro fixo, o quadrado maximiza a área: lado 25 m; área 625 m²."], ["Quais são as raízes de x³−x?", ["0 e 1", "−1, 0 e 1", "−1 e 1", "0 e −1"], 1, "x³−x=x(x²−1)=x(x−1)(x+1)."]]], ["3 · Laboratório Exponencial", "Potências, logaritmos e juros compostos", [["1200 mg de substância se reduzem à metade a cada hora. Após 6 horas restam:", ["18,75 mg", "37,5 mg", "75 mg", "150 mg"], 0, "1200·(1/2)^6=1200/64=18,75."], ["Uma colônia de 1000 células dobra a cada 2 horas. Após 10 horas terá:", ["5000", "16000", "32000", "64000"], 2, "São cinco duplicações: 1000·2⁵=32000."], ["Qual é o montante aproximado de R$1000 a 1% ao mês durante 12 meses?", ["R$1012,00", "R$1126,83", "R$1200,00", "R$1100,00"], 1, "M=C(1+i)^n=1000·1,01¹²≈1126,83."], ["Se log₁₀(S/S₀) representa magnitude, a diferença entre 7 e 5 representa intensidade:", ["2 vezes", "10 vezes", "100 vezes", "1000 vezes"], 2, "A diferença de 2 na escala logarítmica equivale a 10²=100."], ["Qual função é decrescente?", ["2ˣ", "3ˣ", "(1/2)ˣ", "10ˣ"], 2, "Uma exponencial com base entre 0 e 1 é decrescente."]]], ["4 · Círculo dos Ângulos", "Graus, radianos, Pitágoras e geometria", [["36° correspondem a:", ["π/3", "π/5", "π/6", "2π/5"], 1, "36·π/180=π/5."], ["Qual é o arco côngruo entre 0° e 360° de 7π/3?", ["30°", "60°", "120°", "300°"], 1, "7π/3=2π+π/3; π/3=60°."], ["Um triângulo retângulo tem catetos 3 e 4. Hipotenusa:", ["5", "6", "7", "12"], 0, "Pelo teorema de Pitágoras: √(3²+4²)=5."], ["Uma pizza de 40 cm de diâmetro foi dividida em 12 fatias iguais. Ângulo por fatia:", ["12°", "20°", "30°", "40°"], 2, "360°/12=30°."], ["Qual a área de um círculo de raio 20 cm usando π=3,14?", ["62,8 cm²", "1256 cm²", "400 cm²", "2512 cm²"], 1, "A=πr²=3,14·400=1256 cm²."]]], ["5 · Templo Trigonométrico", "Seno, cosseno, tangente e recíprocas", [["Em um triângulo retângulo, sen θ é:", ["Adjacente/hipotenusa", "Oposto/hipotenusa", "Oposto/adjacente", "Hipotenusa/oposto"], 1, "Seno é a razão entre cateto oposto e hipotenusa."], ["Quanto vale sen 150°?", ["−1/2", "√3/2", "1/2", "−√3/2"], 2, "150° está no segundo quadrante; seno positivo e ângulo de referência 30°."], ["Quanto vale cos 210°?", ["−√3/2", "1/2", "√3/2", "−1/2"], 0, "210° está no terceiro quadrante e tem referência 30°."], ["Se sec θ=−2 e θ está no terceiro quadrante, θ vale:", ["120°", "210°", "240°", "300°"], 2, "sec=1/cos; cos θ=−1/2. No terceiro quadrante: 240°."], ["Uma rampa sobe 1 m ao longo de 5 m horizontais. Qual relação encontra seu ângulo?", ["sen θ=1/5", "cos θ=1/5", "tg θ=1/5", "tg θ=5"], 2, "Tangente = cateto oposto / adjacente = 1/5."]]], ["6 · Fortaleza das Matrizes", "Sistemas lineares, operações e determinantes", [["O sistema x+y=4 e 2x+2y=8 é:", ["SPD", "SPI", "SI", "Sem equações"], 1, "As equações representam a mesma reta: infinitas soluções."], ["O sistema x+y=4 e x+y=3 é:", ["SPD", "SPI", "SI", "Uma solução"], 2, "As equações são incompatíveis: retas paralelas distintas."], ["Resolva x+y=3 e 2x+y=4. Qual é (x,y)?", ["(2,1)", "(1,2)", "(3,0)", "(0,3)"], 1, "Subtraindo a primeira da segunda: x=1; então y=2."], ["Qual é det [[3,3],[2,5]]?", ["9", "21", "15", "−9"], 0, "Determinante 2×2: ad−bc=3·5−3·2=9."], ["A=[[3,3],[2,5]], B=[[4,−1],[0,2]]. Qual a primeira linha de A+B?", ["[7,2]", "[12,−3]", "[3,5]", "[7,4]"], 0, "A soma é elemento a elemento: 3+4=7; 3+(−1)=2."]]]
],
    icons = ['🔮', '🌲', '⚗️', '🧭', '🌙', '🏰'];

const key = 'arcana-precalculo-v1';
let save; try { save = JSON.parse(localStorage.getItem(key)) || { xp: 0, unlocked: 1, medals: [], best: 0, right: 0, total: 0 } } catch (e) { save = { xp: 0, unlocked: 1, medals: [], best: 0, right: 0, total: 0 } };

let current = 0, index = 0, correct = 0, chain = 0, answered = false, seconds = 45, interval = null;

const $ = id => document.getElementById(id);

function persist() {
    localStorage.setItem(key, JSON.stringify(save))
}

function stats() {
    $('xp').textContent = save.xp; $('won').textContent = save.medals.length + '/6'; $('streak').textContent = save.best; $('accuracy').textContent = save.right + '/' + save.total
}

function view(id) {
    ['home', 'game', 'end'].forEach(x => $(x).classList.toggle('hidden', x !== id)); window.scrollTo({ top: 0, behavior: 'smooth' })
}

function map() {
    stats(); $('map').innerHTML = ''; levels.forEach((l, i) => {
        let b = document.createElement('button'); b.className = 'level'; b.disabled = i >= save.unlocked; b.innerHTML = '<div class="emoji">' + (i >= save.unlocked ? '🔒' : icons[i]) + '</div><h2>' + l[0] + '</h2><p>' + l[1] + '</p><b>' + (save.medals.includes(i) ? '🏅 Medalha conquistada' : i >= save.unlocked ? 'Bloqueado' : '▶ Entrar no reino') + '</b>'; b.onclick = () => start(i); $('map').append(b)
    })
}

function start(i) {
    clearInterval(interval); current = i; index = 0; correct = 0; chain = 0; view('game'); render()
}

function render() {
    clearInterval(interval); answered = false; seconds = 45;
    let q = levels[current][2][index]; $('realm').textContent = icons[current] + ' ' + levels[current][0]; $('counter').textContent = (index + 1) + '/5'; $('fill').style.width = (index / 5 * 100) + '%'; $('score').textContent = 'Acertos nesta fase: ' + correct + ' • XP: ' + save.xp; $('question').textContent = q[0]; $('feedback').classList.add('hidden'); $('next').classList.add('hidden'); $('answers').innerHTML = ''; q[1].forEach((v, j) => {
        let b = document.createElement('button'); b.className = 'answer'; b.textContent = String.fromCharCode(65 + j) + '. ' + v; b.onclick = () => answer(j); $('answers').append(b)
    }); if ($('hard').checked) { $('timer').textContent = '⏳ 45 s'; interval = setInterval(() => { seconds--; $('timer').textContent = '⏳ ' + seconds + ' s'; if (seconds <= 0) answer(-1) }, 1000) } else $('timer').textContent = '∞ Sem limite'
}

function answer(j) {
    if (answered) return; answered = true; clearInterval(interval);
    let q = levels[current][2][index], ok = j === q[2]; save.total++; if (ok) { correct++; chain++; save.right++; save.xp += 20 + ($('hard').checked && seconds > 0 ? 5 : 0); if (chain % 3 === 0) save.xp += 10; save.best = Math.max(save.best, chain) } else chain = 0;[...$('answers').children].forEach((b, k) => { b.disabled = true; if (k === q[2]) b.classList.add('correct'); else if (k === j) b.classList.add('wrong') }); $('feedback').classList.remove('hidden'); $('feedback').innerHTML = '<strong>' + (ok ? '✨ Correto! +' + (20 + ($('hard').checked && seconds > 0 ? 5 : 0) + (chain > 0 && chain % 3 === 0 ? 10 : 0)) + ' XP' : '📚 ' + (j < 0 ? 'Tempo esgotado!' : 'Ainda não!')) + '</strong><div></div>'; $('feedback').lastChild.textContent = q[3]; $('next').textContent = index === 4 ? 'Ver resultado 🏆' : 'Próximo desafio →'; $('next').classList.remove('hidden'); $('score').textContent = 'Acertos nesta fase: ' + correct + ' • XP: ' + save.xp; persist(); stats()
}

function finish() {
    clearInterval(interval);

    let win = correct >= 4; if (win) { if (!save.medals.includes(current)) save.medals.push(current); save.unlocked = Math.max(save.unlocked, Math.min(6, current + 2)) } persist(); stats(); view('end'); $('medal').textContent = win ? '🏆' : '📖'; $('endtitle').textContent = win ? 'Reino conquistado!' : 'Sua jornada continua!'; $('endtext').textContent = 'Você acertou ' + correct + ' de 5 questões. ' + (win ? 'Medalha recebida! ' + (save.medals.length === 6 ? 'Você conquistou os seis reinos!' : 'O próximo reino foi desbloqueado.') : 'São necessários 4 acertos para conquistar a medalha. Revise as explicações e tente novamente.')
$('next').onclick = () => { index++; index < 5 ? render() : finish() }; $('back').onclick = () => { clearInterval(interval); map(); view('home') }}; 
    $('return').onclick = () => { map(); view('home') }; $('retry').onclick = () => start(current); $('reset').onclick = () => { if (confirm('Apagar XP, medalhas e fases desbloqueadas?')) { localStorage.removeItem(key); location.reload() } }; map();