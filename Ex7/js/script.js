// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;
// ''
//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

const totalTime = 10 * 60 * 1000; 
const questions = [
    {
        question: 'Câu 1: Câu hỏi 1?',
        answers: [
            {
                text : 'A: Câu trả lời',
                checked : false
            },
            {
                text : 'B: Câu trả lời',
                checked : false
            },{
                text : 'C: Câu trả lời',
                checked : false
            },{
                text : 'D: Câu trả lời',
                checked : false
            },
        ],
    },
    {
        question: 'Câu 2: Câu hỏi 1?',
        answers: [
            {
                text : 'A: Câu trả lời2',
                checked : false
            },
            {
                text : 'B: Câu trả lời2',
                checked : false
            },{
                text : 'C: Câu trả lời2',
                checked : false
            },{
                text : 'D: Câu trả lời2',
                checked : false
            },
        ],
    },
    {
        question: 'Câu 1: Câu hỏi 1?',
        answers: [
            {
                text : 'A: Câu trả lời',
                checked : false
            },
            {
                text : 'B: Câu trả lời',
                checked : false
            },{
                text : 'C: Câu trả lời',
                checked : false
            },{
                text : 'D: Câu trả lời',
                checked : false
            },
        ],
    },
    {
        question: 'Câu 1: Câu hỏi 1?',
        answers: [
            {
                text : 'A: Câu trả lời',
                checked : false
            },
            {
                text : 'B: Câu trả lời',
                checked : false
            },{
                text : 'C: Câu trả lời',
                checked : false
            },{
                text : 'D: Câu trả lời',
                checked : false
            },
        ],
    },
    {
        question: 'Câu 1: Câu hỏi 1?',
        answers: [
            {
                text : 'A: Câu trả lời',
                checked : false
            },
            {
                text : 'B: Câu trả lời',
                checked : false
            },{
                text : 'C: Câu trả lời',
                checked : false
            },{
                text : 'D: Câu trả lời',
                checked : false
            },
        ],
    },
    {
        question: 'Câu 1: Câu hỏi 1?',
        answers: [
            {
                text : 'A: Câu trả lời',
                checked : false
            },
            {
                text : 'B: Câu trả lời',
                checked : false
            },{
                text : 'C: Câu trả lời',
                checked : false
            },{
                text : 'D: Câu trả lời',
                checked : false
            },
        ],
    },
    {
        question: 'Câu 1: Câu hỏi 1?',
        answers: [
            {
                text : 'A: Câu trả lời',
                checked : false
            },
            {
                text : 'B: Câu trả lời',
                checked : false
            },{
                text : 'C: Câu trả lời',
                checked : false
            },{
                text : 'D: Câu trả lời',
                checked : false
            },
        ],
    },
    {
        question: 'Câu 1: Câu hỏi 1?',
        answers: [
            {
                text : 'A: Câu trả lời',
                checked : false
            },
            {
                text : 'B: Câu trả lời',
                checked : false
            },{
                text : 'C: Câu trả lời',
                checked : false
            },{
                text : 'D: Câu trả lời',
                checked : false
            },
        ],
    },
    {
        question: 'Câu 1: Câu hỏi 1?',
        answers: [
            {
                text : 'A: Câu trả lời',
                checked : false
            },
            {
                text : 'B: Câu trả lời',
                checked : false
            },{
                text : 'C: Câu trả lời',
                checked : false
            },{
                text : 'D: Câu trả lời',
                checked : false
            },
        ],
    },
    {
        question: 'Câu 1: Câu hỏi 1?',
        answers: [
            {
                text : 'A: Câu trả lời',
                checked : false
            },
            {
                text : 'B: Câu trả lời',
                checked : false
            },{
                text : 'C: Câu trả lời',
                checked : false
            },{
                text : 'D: Câu trả lời',
                checked : false
            },
        ],
    },
]

window.onload = function () {

    const btnStart = document.querySelector('#save-btn');
    const labelTime = document.querySelector('#time');
    
    
    // Start button and remaining of time
    var timeBegin = localStorage.getItem('timeBegin');
    var runTime = function() {
        if (timeBegin) {
            btnStart.innerText = 'Submit';
            setInterval(function() {
                showRemainTime();
            }, 1000) 
        } else {
            labelTime.innerText = '20 : 00';
        }
    }
    runTime();
    btnStart.addEventListener('click', function() {
        if (!timeBegin) {
            btnStart.innerHTML = 'Submit';
            localStorage.setItem('timeBegin', new Date());
            timeBegin = localStorage.getItem('timeBegin');
            runTime();
        } else {
            // TODO: Submit
        }
    })

    var showRemainTime = function() {
        let containTime = totalTime - (new Date() - new Date(timeBegin))
        labelTime.innerText = '' + timeTransformToText(containTime)
    }

    var timeTransformToText = function(ms) {
        if(ms < 0) {
            return '00 : 00';
        }
        let totalMs = Math.floor((+ms)/1000);
        let minusDuration = Math.floor(totalMs/60);
        if(minusDuration < 10) {
            minusDuration = '0' + minusDuration;
        }
        let secondsDuration = Math.floor(totalMs - minusDuration*60);
        if(secondsDuration < 10) {
            secondsDuration = '0' + secondsDuration;
        }
        return `${minusDuration} : ${secondsDuration}`;
    }
    

    /**
     * Load question 
     */
    const questionCheckboxList = document.querySelectorAll('.question-checkbox');
    questionCheckboxList.forEach((element, index) => {
        element.setAttribute('disabled', 'disabled');
        element.parentElement.addEventListener('click', function(event){
            showQuestion(index);
        });
    });

    var showQuestion = function(indexQuestion) {

        let textQuestion= document.querySelector('#id-question #text-question');
        let textAnswers= document.querySelector('#id-question #text-answers');
        
        textQuestion.innerText = questions[indexQuestion].question;
        let answersHtml = questions[indexQuestion].answers.map((answer, indexAnswer) => {
            return ` <li><input  type="checkbox" onclick="checkedAnswer()" >${answer.text}</li>`;
        }).join('')
        textAnswers.innerHTML = answersHtml;
    }

    var checkedAnswer = function() {
        console.log(indexQuestion + ':' + indexAnswer)
    }
}



