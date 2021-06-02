let tabHeader = document.getElementsByClassName('tab-header')[0];
let tabIndicator = document.getElementsByClassName('tab-indicator')[0];
let tabBody = document.getElementsByClassName('tab-body')[0];
let tabsPanel = document.querySelectorAll('.tab-panel');

let renderTab = () => {
    for (let i = 0; i < tabsPanel.length; i++) {
        tabsPanel[i].addEventListener('click', () => {
            tabHeader
                .getElementsByClassName('active-tab')[0]
                .classList.remove('active-tab');

            tabsPanel[i].classList.add('active-tab');

            tabBody
                .getElementsByClassName('active-tab')[0]
                .classList.remove('active-tab');

            tabBody.getElementsByTagName('div')[i].classList.add('active-tab');

            tabIndicator.style.left = `calc(calc(100% / 3) * ${i})`;
        });
    }
};
renderTab();

let renderQuiz = () => {
    if (quiz.isEnded()) {
        showScore();
    } else {
        let element = document.getElementById('question');
        element.innerHTML = quiz.getQuestionIndex().text;
        let choices = quiz.getQuestionIndex().choices;

        for (let i = 0; i < choices.length; i++) {
            let element = document.getElementById('choice' + i);
            element.innerHTML = choices[i];
        }
        showProgress();
    }
};
let passAttr = (e) => {
    let buttons = document.querySelectorAll('.buttons button');

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            let attribute = e.currentTarget.dataset.score;
            quiz.checkCorrect(attribute);
            renderQuiz();
        });
    });
};
passAttr();

let checkResult = (score) => {
    let type;
    if (score <= 25) type = 'low porosity';
    else if (score > 25 && score < 60) type = 'medium porosity';
    else if (score >= 60) type = 'high porosity';
    return type;
};
let showScore = () => {
    let quizOver = '<h1>result</h1>';
    if (checkResult)
        quizOver += `<h2 id="score">your score: ${
            quiz.score
        } </h2> <h3>your hair is: ${checkResult(quiz.score)} </h3>
        <h4>check for more  <a href="/haircare.html">information</a></h4>`;
    let element = document.getElementById('quiz');
    element.innerHTML = quizOver;
};
let showProgress = () => {
    let currentQuestionNumber = quiz.questionIndex + 1;
    currentQuestionNumber = quiz.questionIndex;

    let footer = document.getElementById('progress');
    footer.innerHTML =
        'question ' + currentQuestionNumber + ' from ' + quiz.questions.length;
};

let quiz = new Quiz(questions);

renderQuiz();

/* readme modal */
const closeBtn = document.getElementById('close');
const modalContainer = document.getElementById('modal-container');

if (localStorage.getItem('cookieBannerDisplayed') === null) {
    modalContainer.style.display = 'flex';
} else if (localStorage.getItem('cookieBannerDisplayed') === 'true') {
    modalContainer.style.display = 'none';
}
closeBtn.addEventListener('click', () => {
    localStorage.setItem('cookieBannerDisplayed', 'true');
    modalContainer.style.display = 'none';
});
