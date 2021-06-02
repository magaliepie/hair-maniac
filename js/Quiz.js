class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }
    checkCorrect(choice) {
        if (choice === '1') {
            this.questionIndex++;
            return (this.score += 1);
        } else if (choice === '2') {
            this.questionIndex++;
            return (this.score += 2);
        } else if (choice === '3') {
            this.questionIndex++;
            return (this.score += 3);
        } else if (choice === '4') {
            this.questionIndex++;
            return (this.score += 4);
        }
    }

    isEnded() {
        return this.questions.length === this.questionIndex;
    }
}
