document.addEventListener('DOMContentLoaded',function(){
    const questionContainer = document.getElementById('question-container');
    const question = document.getElementById('question-text');
    const choiceList = document.getElementById('choices-list')
    const nextBtn = document.getElementById('next-btn')
    const resultContainer = document.getElementById('result-container')
    const scoreShow = document.getElementById('score')
    const restartBtn = document.getElementById('restart-btn')
    const startBtn = document.getElementById('start-btn')
    const questions = [{question: "what is the capital of france?",
        options: ["Paris", "London", "New york", "Berlin"],
        Awnser: "Paris",
        Correct: false
    },
    {question: "which planet is called as red planet?",
        options: ["Mars", "Venus", "Earth", "Saturn"],
        Awnser: "Mars",
        Correct: false
    },
    {question: "Who wrote Hamlet?",
        options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
        Awnser: "William Shakespeare",
        Correct: false
    }
]
    let index = -1;
    startBtn.addEventListener('click',function(){
        startBtn.classList.add('hidden');
        index = 0
        showquestion(index);
    })
    function showquestion(){
        if(index==questions.length){
            showresult();
        } else {
        nextBtn.classList.add('hidden');
        questionContainer.classList.remove('hidden')
        choiceList.innerHTML=""
        question.textContent = questions[index].question;
        questions[index].options.forEach(option => {
            let choice = document.createElement('li')
            choice.textContent = option
            choiceList.appendChild(choice)
        })
    }
    }
    nextBtn.addEventListener('click',function(){
            index++;
            showquestion(index)
        })
    choiceList.addEventListener('click',(e)=>{
            //console.log(e.target.tagName);
            
        if(e.target.tagName==='LI'){
            choiceList.querySelectorAll('li').forEach(choice => {
                choice.classList.remove('select')
            })
            e.target.classList.add('select')
            nextBtn.classList.remove('hidden')
            if(e.target.textContent==questions[index].Awnser)(
                questions[index].Correct=true
            )
        }
        })
    function showresult(){
        questionContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        let score = 0;
        questions.forEach(element => {
            if(element.Correct){
                score++;
            }
        });
        scoreShow.innerHTML = `${score} out of ${questions.length}`
    }

    restartBtn.addEventListener('click',function(){
        resultContainer.classList.add('hidden')
        startBtn.classList.remove('hidden')
        questions.forEach(element => {
            element.Correct=false;
        });
    })
})
