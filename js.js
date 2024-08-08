function checkAnswer(selectedButton, quizId, isCorrect){
    //deshabilita que se pueda coger mas de una respuesta

    //con las comillas invertidas hacemos ref al quizId que recibe el check y diferencia con los otros quiz
    const buttons = document.querySelectorAll(`#${quizId} .respuesta`);
    //una vez elija una respuesta los demas botones no son clicables
    buttons.forEach(button => button.disabled = true);

    //verifica si la respuesta correcta usando la clase de html data-correct (etiqueta html para ver si es correcta o no la respuesta)
    const correctAnswer = Array.from(buttons).find(button => button.dataset.correct === 'true') //dataset.correct entra dentro de la clase data-correct y lo busca el 'true'

    //añade la clase correcta o incorrecta de cada respuesta
    buttons.forEach(button => {
       if(button === selectedButton){
            if(button.dataset.correct === 'true'){
                button.classList.add('correct');
            } else{
                button.classList.add('incorrect');
            }
 
       } else {
            if(button.dataset.correct === 'true'){
                button.classList.add('correct');
            } else{
                button.classList.add('incorrect');
            }
       }
    });

    //mostrar el mensaje de feedback
    const feedback = document.querySelector(`#${quizId} .feedback`);
    if(isCorrect){
        feedback.innerText = '¡CORRECTO! Ganaste 1 punto';
    } else {
        feedback.innerText = 'INCORRECTO, la respuesta correcta era ' + correctAnswer.innerText + ".";
    }


}