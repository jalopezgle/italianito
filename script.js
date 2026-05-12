const levelSelect = document.getElementById('level');
const topicSelect = document.getElementById('topic');
const generateBtn = document.getElementById('generate-btn');
const examContainer = document.getElementById('exam-container');

const verbList = [
    'essere', 'avere', 'parlare', 'mangiare', 'leggere', 'scrivere', 'andare', 'venire', 'sapere', 'dovere',
    'potere', 'volere', 'vivere', 'dormire', 'capire', 'vedere', 'sentire', 'prendere', 'mettere', 'tenere'
];

const subjectPronouns = [
    { pronoun: 'io', person: 'primera persona singular' },
    { pronoun: 'tu', person: 'segunda persona singular' },
    { pronoun: 'lui/lei', person: 'tercera persona singular' },
    { pronoun: 'noi', person: 'primera persona plural' },
    { pronoun: 'voi', person: 'segunda persona plural' },
    { pronoun: 'loro', person: 'tercera persona plural' }
];

const tenses = [
    { code: 'presente', label: 'presente' },
    { code: 'passato prossimo', label: 'passato prossimo' },
    { code: 'imperfetto', label: 'imperfetto' },
    { code: 'futuro semplice', label: 'futuro semplice' }
];

const prepositions = [
    { answer: 'a', example: 'andare ___ casa' },
    { answer: 'in', example: 'studiare ___ biblioteca' },
    { answer: 'di', example: 'libro ___ Marco' },
    { answer: 'con', example: 'parlare ___ amico' },
    { answer: 'per', example: 'regalo ___ te' },
    { answer: 'da', example: 'venire ___ Roma' },
    { answer: 'su', example: 'il gatto è ___ tavolo' },
    { answer: 'tra', example: 'camminare ___ gli alberi' },
    { answer: 'fra', example: 'la scuola è ___ il parco e il negozio' },
    { answer: 'sopra', example: 'la palla è ___ il tavolo' },
    { answer: 'sotto', example: 'la sedia è ___ il tavolo' },
    { answer: 'davanti a', example: 'mettere le chiavi ___ la porta' },
    { answer: 'dietro', example: 'il cane è ___ il divano' },
    { answer: 'verso', example: 'andare ___ la stazione' },
    { answer: 'oltre', example: 'saltare ___ il muro' },
    { answer: 'intorno a', example: 'girare ___ la fontana' },
    { answer: 'attraverso', example: 'camminare ___ il bosco' },
    { answer: 'accanto a', example: 'sedersi ___ la finestra' },
    { answer: 'contro', example: 'battere ___ il muro' },
    { answer: 'prima di', example: 'arrivare ___ cena' },
    { answer: 'dopo', example: 'partire ___ pranzo' },
    { answer: 'secondo', example: '___ me, è giusto' },
    { answer: 'tranne', example: 'tutti sono qui ___ Luca' },
    { answer: 'malgrado', example: 'uscire ___ la pioggia' },
    { answer: 'verso', example: 'guardare ___ l\'orizzonte' },
    { answer: 'senza', example: 'andare ___ soldi' },
    { answer: 'per mezzo di', example: 'inviare la lettera ___ posta' },
    { answer: 'grazie a', example: 'arrivare in tempo ___ autobus' },
    { answer: 'davanti a', example: 'parlare ___ il pubblico' },
    { answer: 'dietro', example: 'nascondersi ___ la porta' },
    { answer: 'fra', example: 'scegliere ___ due opzioni' }
];

const pronounQuestions = [
    { text: 'Sostituisci il soggetto con il pronome corretto: "Giulia mangia una mela."', answer: 'lei' },
    { text: 'Sostituisci il soggetto con il pronome corretto: "Noi andiamo al cinema."', answer: 'noi' },
    { text: 'Sostituisci il soggetto con il pronome corretto: "Voi parlate troppo."', answer: 'voi' },
    { text: 'Sostituisci il soggetto con il pronome corretto: "I bambini giocano nel parco."', answer: 'loro' },
    { text: 'Sostituisci il soggetto con il pronome corretto: "Io leggo un libro."', answer: 'io' },
    { text: 'Sostituisci il soggetto con il pronome corretto: "Tu studi italiano."', answer: 'tu' },
    { text: 'Sostituisci il soggetto con il pronome corretto: "Marco corre veloce."', answer: 'lui' },
    { text: 'Sostituisci il soggetto con il pronome corretto: "Anna e Luca scrivono una lettera."', answer: 'loro' },
    { text: 'Sostituisci il soggetto con il pronome corretto: "La professoressa insegna la lezione."', answer: 'lei' },
    { text: 'Sostituisci il soggetto con il pronome corretto: "Gli studenti ascoltano attentamente."', answer: 'loro' },
    { text: 'Sostituisci il soggetto con il pronome corretto: "Mio padre cucina la cena."', answer: 'lui' },
    { text: 'Sostituisci il soggetto con il pronome corretto: "Mia sorella dorme presto."', answer: 'lei' },
    { text: 'Sostituisci il soggetto con il pronome corretto: "Noi visitiamo il museo."', answer: 'noi' },
    { text: 'Sostituisci il soggetto con il pronome corretto: "Voi dormite bene."', answer: 'voi' },
    { text: 'Sostituisci il soggetto con il pronome corretto: "Io vedo un film."', answer: 'io' },
    { text: 'Sostituisci il soggetto con il pronome corretto: "Tu ascolti la musica."', answer: 'tu' },
    { text: 'Sostituisci il soggetto con il pronome corretto: "Loro studiano insieme."', answer: 'loro' },
    { text: 'Sostituisci il soggetto con il pronome corretto: "Carlo e Maria cucinano insieme."', answer: 'loro' },
    { text: 'Sostituisci il soggetto con il pronome corretto: "Il gatto salta sul divano."', answer: 'lui' },
    { text: 'Sostituisci il soggetto con il pronome corretto: "La ragazza canta una canzone."', answer: 'lei' },
    { text: 'Sostituisci il soggetto con il pronome corretto: "Noi leggiamo due libri."', answer: 'noi' },
    { text: 'Sostituisci il soggetto con il pronome corretto: "Voi scrivete una email."', answer: 'voi' },
    { text: 'Sostituisci il soggetto con il pronome corretto: "Io cammino lentamente."', answer: 'io' },
    { text: 'Sostituisci il soggetto con il pronome corretto: "Tu prepari la colazione."', answer: 'tu' },
    { text: 'Sostituisci il soggetto con il pronome corretto: "I ragazzi finiscono il compito."', answer: 'loro' },
    { text: 'Sostituisci il soggetto con il pronome corretto: "Mio nonno racconta storie."', answer: 'lui' },
    { text: 'Sostituisci il soggetto con il pronome corretto: "Mia mamma chiama un taxi."', answer: 'lei' },
    { text: 'Sostituisci il soggetto con il pronome corretto: "Io disegno un quadro."', answer: 'io' },
    { text: 'Sostituisci il soggetto con il pronome corretto: "Tu rispondi alla domanda."', answer: 'tu' },
    { text: 'Sostituisci il soggetto con il pronome corretto: "Lei spegne la luce."', answer: 'lei' }
];

const vocabularyPairs = [
    { it: 'casa', es: 'casa' },
    { it: 'scuola', es: 'escuela' },
    { it: 'libro', es: 'libro' },
    { it: 'amico', es: 'amigo' },
    { it: 'mangiare', es: 'comer' },
    { it: 'bella', es: 'hermosa' },
    { it: 'perché', es: 'por qué' },
    { it: 'domani', es: 'mañana' },
    { it: 'oggi', es: 'hoy' },
    { it: 'cane', es: 'perro' },
    { it: 'gatto', es: 'gato' },
    { it: 'strada', es: 'calle' },
    { it: 'famiglia', es: 'familia' },
    { it: 'città', es: 'ciudad' },
    { it: 'paese', es: 'país' },
    { it: 'mare', es: 'mar' },
    { it: 'montagna', es: 'montaña' },
    { it: 'musica', es: 'música' },
    { it: 'lavoro', es: 'trabajo' },
    { it: 'tempo', es: 'tiempo' },
    { it: 'festa', es: 'fiesta' },
    { it: 'viaggio', es: 'viaje' },
    { it: 'auto', es: 'auto' },
    { it: 'tavolo', es: 'mesa' },
    { it: 'sedia', es: 'silla' },
    { it: 'finestra', es: 'ventana' },
    { it: 'porta', es: 'puerta' },
    { it: 'sole', es: 'sol' },
    { it: 'luna', es: 'luna' }
];

const articles = [
    { sentence: '___ libro è interessante.', answer: 'il' },
    { sentence: '___ amiche sono simpatiche.', answer: 'le' },
    { sentence: '___ casa è grande.', answer: 'la' },
    { sentence: '___ studenti studiano.', answer: 'gli' },
    { sentence: '___ macchina è rossa.', answer: 'la' },
    { sentence: '___ orologio è costoso.', answer: 'l\'' },
    { sentence: '___ zaino è pieno.', answer: 'lo' },
    { sentence: '___ alberi sono alti.', answer: 'gli' },
    { sentence: '___ università è vicina.', answer: 'l\'' },
    { sentence: '___ acqua è fredda.', answer: 'l\'' },
    { sentence: '___ porta è aperta.', answer: 'la' },
    { sentence: '___ uomini parlano.', answer: 'gli' },
    { sentence: '___ amico arriva domani.', answer: 'l\'' },
    { sentence: '___ idea è buona.', answer: 'l\'' },
    { sentence: '___ stazione è lontana.', answer: 'la' },
    { sentence: '___ hotel è moderno.', answer: 'l\'' },
    { sentence: '___ animale è piccolo.', answer: 'l\'' },
    { sentence: '___ studenti italiani sono preparati.', answer: 'gli' },
    { sentence: '___ isola è bella.', answer: 'l\'' },
    { sentence: '___ ospedale è grande.', answer: 'l\'' },
    { sentence: '___ scuola è chiusa.', answer: 'la' },
    { sentence: '___ parole sono importanti.', answer: 'le' },
    { sentence: '___ professore è in aula.', answer: 'il' },
    { sentence: '___ amiche vanno al cinema.', answer: 'le' },
    { sentence: '___ zia arriva presto.', answer: 'la' },
    { sentence: '___ attore recita bene.', answer: 'l\'' },
    { sentence: '___ bici è nuova.', answer: 'la' },
    { sentence: '___ uomo entra.', answer: 'l\'' },
    { sentence: '___ città è antica.', answer: 'la' },
    { sentence: '___ fine del film è triste.', answer: 'la' }
];
const essereVerbs = ['andare', 'venire', 'essere'];

const irregularParticiples = {
    essere: 'stato',
    avere: 'avuto',
    andare: 'andato',
    venire: 'venuto',
    leggere: 'letto',
    scrivere: 'scritto',
    prendere: 'preso',
    mettere: 'messo',
    tenere: 'tenuto',
    vedere: 'visto',
    sapere: 'saputo',
    volere: 'voluto',
    potere: 'potuto',
    dovere: 'dovuto'
};

const irregularConjugations = {
    essere: {
        presente: ['sono', 'sei', 'è', 'siamo', 'siete', 'sono'],
        imperfetto: ['ero', 'eri', 'era', 'eravamo', 'eravate', 'erano'],
        'futuro semplice': ['sarò', 'sarai', 'sarà', 'saremo', 'sarete', 'saranno'],
        'passato prossimo': ['sono stato', 'sei stato', 'è stato', 'siamo stati', 'siete stati', 'sono stati']
    },
    avere: {
        presente: ['ho', 'hai', 'ha', 'abbiamo', 'avete', 'hanno'],
        imperfetto: ['avevo', 'avevi', 'aveva', 'avevamo', 'avevate', 'avevano'],
        'futuro semplice': ['avrò', 'avrai', 'avrà', 'avremo', 'avrete', 'avranno'],
        'passato prossimo': ['ho avuto', 'hai avuto', 'ha avuto', 'abbiamo avuto', 'avete avuto', 'hanno avuto']
    },
    andare: {
        presente: ['vado', 'vai', 'va', 'andiamo', 'andate', 'vanno'],
        imperfetto: ['andavo', 'andavi', 'andava', 'andavamo', 'andavate', 'andavano'],
        'futuro semplice': ['andrò', 'andrai', 'andrà', 'andremo', 'andrete', 'andranno'],
        'passato prossimo': ['sono andato', 'sei andato', 'è andato', 'siamo andati', 'siete andati', 'sono andati']
    },
    venire: {
        presente: ['vengo', 'vieni', 'viene', 'veniamo', 'venite', 'vengono'],
        imperfetto: ['venivo', 'venivi', 'veniva', 'venivamo', 'venivate', 'venivano'],
        'futuro semplice': ['verrò', 'verrai', 'verrà', 'verremo', 'verrete', 'verranno'],
        'passato prossimo': ['sono venuto', 'sei venuto', 'è venuto', 'siamo venuti', 'siete venuti', 'sono venuti']
    },
    sapere: {
        presente: ['so', 'sai', 'sa', 'sappiamo', 'sapete', 'sanno'],
        imperfetto: ['sapevo', 'sapevi', 'sapeva', 'sapevamo', 'sapevate', 'sapevano'],
        'futuro semplice': ['saprò', 'saprai', 'saprà', 'sapremo', 'saprete', 'sapranno'],
        'passato prossimo': ['ho saputo', 'hai saputo', 'ha saputo', 'abbiamo saputo', 'avete saputo', 'hanno saputo']
    },
    dovere: {
        presente: ['devo', 'devi', 'deve', 'dobbiamo', 'dovete', 'devono'],
        imperfetto: ['dovevo', 'dovevi', 'doveva', 'dovevamo', 'dovevate', 'dovevano'],
        'futuro semplice': ['dovrò', 'dovrai', 'dovrà', 'dovremo', 'dovrete', 'dovranno'],
        'passato prossimo': ['ho dovuto', 'hai dovuto', 'ha dovuto', 'abbiamo dovuto', 'avete dovuto', 'hanno dovuto']
    },
    potere: {
        presente: ['posso', 'puoi', 'può', 'possiamo', 'potete', 'possono'],
        imperfetto: ['potevo', 'potevi', 'poteva', 'potevamo', 'potevate', 'potevano'],
        'futuro semplice': ['potrò', 'potrai', 'potrà', 'potremo', 'potrete', 'potranno'],
        'passato prossimo': ['ho potuto', 'hai potuto', 'ha potuto', 'abbiamo potuto', 'avete potuto', 'hanno potuto']
    },
    volere: {
        presente: ['voglio', 'vuoi', 'vuole', 'vogliamo', 'volete', 'vogliono'],
        imperfetto: ['volevo', 'volevi', 'voleva', 'volevamo', 'volevate', 'volevano'],
        'futuro semplice': ['vorrò', 'vorrai', 'vorrà', 'vorremo', 'vorrete', 'vorranno'],
        'passato prossimo': ['ho voluto', 'hai voluto', 'ha voluto', 'abbiamo voluto', 'avete voluto', 'hanno voluto']
    }
};
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function normalizeAnswer(value) {
    return value.trim().toLowerCase().replace(/\s+/g, ' ');
}

function buildExam(level, topic) {
    const questions = [];
    const seen = new Set();
    let attempts = 0;
    const maxAttempts = 500;

    while (questions.length < 30 && attempts < maxAttempts) {
        attempts += 1;
        let prompt = '';
        let answer = '';

        if (topic === 'conjugaciones') {
            const verb = getRandomItem(verbList);
            const pronoun = getRandomItem(subjectPronouns);
            const tense = getRandomItem(tenses);
            prompt = `Conjuga el verbo "${verb}" en italiano en ${tense.label} para ${pronoun.person} (${pronoun.pronoun}).`;
            answer = conjugateVerb(verb, pronoun.pronoun, tense.code, level);
        } else if (topic === 'tiempos') {
            const verb = getRandomItem(verbList);
            const tense = getRandomItem(tenses);
            prompt = `Escribe la forma correcta de ${verb} en ${tense.label} para "io".`;
            answer = conjugateVerb(verb, 'io', tense.code, level);
        } else if (topic === 'preposiciones') {
            const item = getRandomItem(prepositions);
            prompt = `Completa con la preposición correcta: ${item.example}`;
            answer = item.answer;
        } else if (topic === 'pronombres') {
            const item = getRandomItem(pronounQuestions);
            prompt = item.text;
            answer = item.answer;
        } else if (topic === 'vocabulario') {
            const pair = getRandomItem(vocabularyPairs);
            prompt = `Traduce al italiano: "${pair.es}"`;
            answer = pair.it;
        } else if (topic === 'articulos') {
            const item = getRandomItem(articles);
            prompt = `Elige el artículo correcto: ${item.sentence}`;
            answer = item.answer;
        }

        const key = `${topic}|${prompt}|${answer}`;
        if (prompt && !seen.has(key)) {
            seen.add(key);
            questions.push({ prompt, answer });
        }
    }

    return questions;
}

function conjugateVerb(verb, pronoun, tense, level) {
    const pronounIndex = subjectPronouns.findIndex(item => item.pronoun === pronoun);
    const irregular = irregularConjugations[verb];

    if (irregular && irregular[tense]) {
        return irregular[tense][pronounIndex] || simpleRegularConjugation(verb, pronoun, tense);
    }

    return simpleRegularConjugation(verb, pronoun, tense);
}

function simpleRegularConjugation(verb, pronoun, tense) {
    const stem = verb.slice(0, -3);
    const ending = verb.slice(-3);
    const pronounIndex = subjectPronouns.findIndex(item => item.pronoun === pronoun);

    const presenteEndings = ending === 'are'
        ? ['o', 'i', 'a', 'iamo', 'ate', 'ano']
        : ending === 'ere'
            ? ['o', 'i', 'e', 'iamo', 'ete', 'ono']
            : ['o', 'i', 'e', 'iamo', 'ite', 'ono'];

    if (tense === 'presente') {
        return stem + presenteEndings[pronounIndex];
    }

    if (tense === 'imperfecto') {
        const endings = ending === 'are'
            ? ['avo', 'avi', 'ava', 'avamo', 'avate', 'avano']
            : ['evo', 'evi', 'eva', 'evamo', 'evate', 'evano'];
        return stem + endings[pronounIndex];
    }

    if (tense === 'futuro semplice') {
        const futureStem = stem + 'er';
        const endings = ['ò', 'ai', 'à', 'emo', 'ete', 'anno'];
        return futureStem + endings[pronounIndex];
    }

    if (tense === 'passato prossimo') {
        const auxForms = essereVerbs.includes(verb)
            ? ['sono', 'sei', 'è', 'siamo', 'siete', 'sono']
            : ['ho', 'hai', 'ha', 'abbiamo', 'avete', 'hanno'];
        const participle = irregularParticiples[verb]
            || stem + (ending === 'are' ? 'ato' : ending === 'ere' ? 'uto' : 'ito');
        return `${auxForms[pronounIndex]} ${participle}`;
    }

    return verb;
}

function renderExam(questions) {
    examContainer.innerHTML = '';

    const validateButton = document.createElement('button');
    validateButton.textContent = 'Validar examen';
    validateButton.className = 'validate-btn';
    validateButton.addEventListener('click', () => validateAnswers(questions));

    const list = document.createElement('div');
    list.id = 'questions-list';

    questions.forEach((question, index) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'question';

        const number = document.createElement('div');
        number.className = 'question-number';
        number.textContent = `Pregunta ${index + 1}`;

        const text = document.createElement('div');
        text.className = 'question-text';
        text.textContent = question.prompt;

        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'answer-input';
        input.dataset.answer = question.answer;
        input.dataset.index = String(index);
        input.placeholder = 'Escribe tu respuesta aquí...';

        const feedback = document.createElement('div');
        feedback.className = 'feedback';

        wrapper.appendChild(number);
        wrapper.appendChild(text);
        wrapper.appendChild(input);
        wrapper.appendChild(feedback);
        list.appendChild(wrapper);
    });

    examContainer.appendChild(list);
    examContainer.appendChild(validateButton);
    validateButton.scrollIntoView({ behavior: 'smooth' });
}

function validateAnswers(questions) {
    const inputs = document.querySelectorAll('.answer-input');
    let score = 0;

    inputs.forEach((input) => {
        const value = normalizeAnswer(input.value);
        const expected = normalizeAnswer(input.dataset.answer);
        const feedback = input.nextElementSibling;

        if (value === expected) {
            input.classList.remove('incorrect');
            input.classList.add('correct');
            if (feedback) {
                feedback.textContent = 'Correcto';
                feedback.className = 'feedback correct';
            }
            score += 1;
        } else {
            input.classList.remove('correct');
            input.classList.add('incorrect');
            if (feedback) {
                feedback.textContent = `Incorrecto. Respuesta correcta: ${input.dataset.answer}`;
                feedback.className = 'feedback incorrect';
            }
        }
    });

    showResult(score, inputs.length);
}

function showResult(score, total) {
    let resultBox = document.getElementById('result-box');
    if (!resultBox) {
        resultBox = document.createElement('div');
        resultBox.id = 'result-box';
        resultBox.style.marginTop = '20px';
        resultBox.style.padding = '15px';
        resultBox.style.borderRadius = '8px';
        resultBox.style.fontWeight = 'bold';
        examContainer.appendChild(resultBox);
    }
    resultBox.textContent = `Has obtenido ${score} de ${total} respuestas correctas.`;
    resultBox.style.backgroundColor = score === total ? '#d4edda' : '#fce4e4';
    resultBox.style.color = score === total ? '#155724' : '#721c24';
}

generateBtn.addEventListener('click', () => {
    const selectedLevel = levelSelect.value;
    const selectedTopic = topicSelect.value;

    if (!selectedLevel || !selectedTopic) {
        alert('Por favor selecciona un nivel y un tema antes de generar el examen.');
        return;
    }

    const questions = buildExam(selectedLevel, selectedTopic);
    renderExam(questions);
});
