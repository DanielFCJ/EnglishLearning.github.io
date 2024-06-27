function checkAnswer(button, isCorrect) {
    if (isCorrect) {
        button.style.backgroundColor = 'green';
        new Audio('correct.mp3').play();
    } else {
        button.style.backgroundColor = 'red';
        new Audio('wrong.mp3').play();
    }
}
