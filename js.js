//variable puntuacion final
let score = 0;

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
                score++;
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

    //verifica si es la ultima pregunta
    if(quizId === 'quiz10'){
        //esperar 3s y te redirige
        setTimeout(()=> {
            redirigirResultado(score);
        }, 2000); //miliseg
    }
}

//funcion para redirigir segun la puntuacion
function redirigirResultado(score){
    let url;

    if(score >= 0 && score <= 4){
        url = 'resultado0-4.html';
    }else if(score >=5 && score <= 6){
        url = 'resultado5-6.html';
    }else if(score >=7 && score <=9){
        url = 'resultado7-9.html';
    }else if(score == 10){
        url = 'resultado10.html';
    }

    //redirige a la url correspondiente
    if(url){
        window.location.href = url;
    }else{
        console.error('url no definida para la puntuación: ', score);
    }
}

