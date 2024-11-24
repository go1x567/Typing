// Text samples with longer texts for hard mode
const texts = {
    en: {
        easy: {
            withPunctuation: [
                "The cat sleeps.",
                "I love pizza!",
                "How are you?",
                "This is easy."
            ],
            withoutPunctuation: [
                "the cat sleeps",
                "i love pizza",
                "how are you",
                "this is easy"
            ]
        },
        medium: {
            withPunctuation: [
                "The quick brown fox jumps over the lazy dog.",
                "Life is what happens while you're busy making other plans!",
                "Success is not final, failure is not fatal.",
                "Every expert was once a beginner."
            ],
            withoutPunctuation: [
                "the quick brown fox jumps over the lazy dog",
                "life is what happens while youre busy making other plans",
                "success is not final failure is not fatal",
                "every expert was once a beginner"
            ]
        },
        hard: {
            withPunctuation: [
                "In the digital age, typing has become an essential skill that everyone must master. The ability to type quickly and accurately can significantly boost productivity in both professional and personal contexts. Modern keyboards have evolved from their mechanical predecessors to provide a more ergonomic experience. Touch typing allows you to focus on the content rather than hunting for keys. The development of proper typing technique requires consistent practice and patience.",

                "Video games have revolutionized the entertainment industry in unprecedented ways. From simple pixel graphics to photorealistic 3D environments, the evolution has been remarkable. Gaming communities have formed strong bonds across geographical boundaries through online platforms. Professional gaming has emerged as a legitimate career path for skilled players. The industry continues to push technological boundaries with virtual and augmented reality.",

                "Artificial intelligence has transformed the way we interact with technology. Machine learning algorithms can now recognize patterns that humans might miss. Natural language processing has made communication with computers more intuitive. The ethical implications of AI development are being actively debated worldwide. The future holds endless possibilities for human-AI collaboration."
            ],
            withoutPunctuation: [
                "in the digital age typing has become an essential skill that everyone must master the ability to type quickly and accurately can significantly boost productivity in both professional and personal contexts modern keyboards have evolved from their mechanical predecessors to provide a more ergonomic experience touch typing allows you to focus on the content rather than hunting for keys the development of proper typing technique requires consistent practice and patience",

                "video games have revolutionized the entertainment industry in unprecedented ways from simple pixel graphics to photorealistic 3d environments the evolution has been remarkable gaming communities have formed strong bonds across geographical boundaries through online platforms professional gaming has emerged as a legitimate career path for skilled players the industry continues to push technological boundaries with virtual and augmented reality",

                "artificial intelligence has transformed the way we interact with technology machine learning algorithms can now recognize patterns that humans might miss natural language processing has made communication with computers more intuitive the ethical implications of ai development are being actively debated worldwide the future holds endless possibilities for human ai collaboration"
            ]
        }
    },
    ru: {
        easy: {
            withPunctuation: [
                "Привет, мир!",
                "Как дела?",
                "Я люблю кофе.",
                "Доброе утро!"
            ],
            withoutPunctuation: [
                "привет мир",
                "как дела",
                "я люблю кофе",
                "доброе утро"
            ]
        },
        medium: {
            withPunctuation: [
                "Москва - столица России.",
                "Жизнь прекрасна и удивительна!",
                "Век живи - век учись.",
                "Кто рано встаёт, тому Бог подаёт."
            ],
            withoutPunctuation: [
                "москва столица россии",
                "жизнь прекрасна и удивительна",
                "век живи век учись",
                "кто рано встает тому бог подает"
            ]
        },
        hard: {
            withPunctuation: [
                "Технологии стремительно меняют нашу повседневную жизнь. Интернет стал неотъемлемой частью современного общества. Социальные сети объединяют людей по всему миру. Искусственный интеллект проникает во все сферы деятельности. Будущее уже наступило, и оно удивительно!",

                "Русская литература известна во всем мире своей глубиной и философичностью. Произведения классиков переведены на множество языков. Современные авторы продолжают традиции великих писателей. Литература помогает лучше понять человеческую душу. Чтение развивает воображение и обогащает внутренний мир.",

                "Образование является ключом к успеху в современном мире. Непрерывное обучение становится необходимостью для профессионального роста. Онлайн-курсы делают образование доступным для каждого. Важно развивать критическое мышление и творческие способности. Инвестиции в образование всегда окупаются."
            ],
            withoutPunctuation: [
                "технологии стремительно меняют нашу повседневную жизнь интернет стал неотъемлемой частью современного общества социальные сети объединяют людей по всему миру искусственный интеллект проникает во все сферы деятельности будущее уже наступило и оно удивительно",

                "русская литература известна во всем мире своей глубиной и философичностью произведения классиков переведены на множество языков современные авторы продолжают традиции великих писателей литература помогает лучше понять человеческую душу чтение развивает воображение и обогащает внутренний мир",

                "образование является ключом к успеху в современном мире непрерывное обучение становится необходимостью для профессионального роста онлайн курсы делают образование доступным для каждого важно развивать критическое мышление и творческие способности инвестиции в образование всегда окупаются"
            ]
        }
    },
    code: {
        easy: [
            "<div class=\"container\">\n  <h1>Hello World</h1>\n</div>",
            "body {\n  color: #333;\n  font-size: 16px;\n}",
            "<link rel=\"stylesheet\" href=\"styles.css\">",
            ".header { padding: 20px; }"
        ],
        medium: [
            "@media screen and (max-width: 768px) {\n  .container {\n    flex-direction: column;\n  }\n}",
            ".flex-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}",
            "const button = document.querySelector('.btn');",
            "#nav-menu { position: fixed; top: 0; width: 100%; }"
        ],
        hard: [
            "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Document</title>\n</head>\n<body>\n  <header></header>\n  <main></main>\n  <footer></footer>\n</body>\n</html>",
            
            "@keyframes slideIn {\n  0% {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n.animated {\n  animation: slideIn 0.5s ease-out forwards;\n}",
            
            ".grid-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  padding: 20px;\n}\n\n.grid-item {\n  background: #fff;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n}",
            
            "@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n\n:root {\n  --primary-color: #007bff;\n  --secondary-color: #6c757d;\n  --success-color: #28a745;\n  --error-color: #dc3545;\n}\n\nbody {\n  font-family: 'Roboto', sans-serif;\n  line-height: 1.6;\n  color: #333;\n}"
        ]
    }
};

let currentLanguage = 'en';
let currentDifficulty = 'medium';
let currentText = '';
let startTime;
let timerInterval;
let isTestActive = false;

// DOM Elements
const textDisplay = document.getElementById('textDisplay');
const textInput = document.getElementById('textInput');
const wpmDisplay = document.getElementById('wpm');
const accuracyDisplay = document.getElementById('accuracy');
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const punctuationToggle = document.getElementById('punctuationToggle');

function getRandomText() {
    if (currentLanguage === 'code') {
        const textArray = texts[currentLanguage][currentDifficulty];
        return textArray[Math.floor(Math.random() * textArray.length)];
    } else {
        const textArray = texts[currentLanguage][currentDifficulty][punctuationToggle.checked ? 'withPunctuation' : 'withoutPunctuation'];
        return textArray[Math.floor(Math.random() * textArray.length)];
    }
}

function updateDisplay() {
    const inputText = textInput.value;
    const originalText = currentText;
    let displayText = '';

    for (let i = 0; i < originalText.length; i++) {
        if (i < inputText.length) {
            if (inputText[i] === originalText[i]) {
                displayText += `<span class="correct">${originalText[i]}</span>`;
            } else {
                displayText += `<span class="incorrect">${originalText[i]}</span>`;
            }
        } else if (i === inputText.length) {
            displayText += `<span class="current">${originalText[i]}</span>`;
        } else {
            displayText += originalText[i];
        }
    }

    textDisplay.innerHTML = displayText;
}

function calculateWPM(inputLength, timeElapsed) {
    const minutes = timeElapsed / 60000;
    const words = inputLength / 5;
    return Math.round(words / minutes);
}

function calculateAccuracy(input, original) {
    if (input.length === 0) return 100;
    let correct = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === original[i]) correct++;
    }
    return Math.round((correct / input.length) * 100);
}

function startTest() {
    isTestActive = true;
    currentText = getRandomText();
    textInput.value = '';
    textInput.disabled = false;
    textInput.focus();
    updateDisplay();
    
    startTime = new Date().getTime();
    timerDisplay.textContent = '60';
    
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
}

function resetTest() {
    isTestActive = false;
    textInput.value = '';
    textInput.disabled = true;
    textDisplay.textContent = 'Press START to begin...';
    wpmDisplay.textContent = '0';
    accuracyDisplay.textContent = '100';
    timerDisplay.textContent = '60';
    if (timerInterval) clearInterval(timerInterval);
}

function updateTimer() {
    const timeLeft = parseInt(timerDisplay.textContent) - 1;
    timerDisplay.textContent = timeLeft;
    
    if (timeLeft <= 0) {
        endTest();
    }
}

function endTest() {
    isTestActive = false;
    textInput.disabled = true;
    clearInterval(timerInterval);
}

// Event Listeners
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentLanguage = btn.dataset.lang;
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        textDisplay.classList.toggle('code', currentLanguage === 'code');
        resetTest();
    });
});

document.querySelectorAll('.diff-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentDifficulty = btn.dataset.diff;
        document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        resetTest();
    });
});

textInput.addEventListener('input', () => {
    if (!isTestActive) return;
    
    const inputText = textInput.value;
    updateDisplay();
    
    const timeElapsed = new Date().getTime() - startTime;
    const wpm = calculateWPM(inputText.length, timeElapsed);
    const accuracy = calculateAccuracy(inputText, currentText);
    
    wpmDisplay.textContent = wpm;
    accuracyDisplay.textContent = accuracy;
    
    if (inputText === currentText) {
        endTest();
    }
});

punctuationToggle.addEventListener('change', resetTest);
startBtn.addEventListener('click', startTest);
resetBtn.addEventListener('click', resetTest);

// Initialize
resetTest();