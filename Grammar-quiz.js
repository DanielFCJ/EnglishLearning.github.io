function checkAnswers() {
    const form = document.getElementById('quiz-form');
    const answers = {
        q1: 'in',
        // Add more answers here
    };
    const formData = new FormData(form);
    let score = 0;
    for (const [question, answer] of formData.entries()) {
        if (answers[question] === answer.trim().toLowerCase()) {
            form.elements[question].style.backgroundColor = 'green';
            score++;
        } else {
            form.elements[question].style.backgroundColor = 'red';
        }
    }
    alert(`Your score: ${score}/${Object.keys(answers).length}`);
}
