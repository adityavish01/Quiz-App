const quizData = [
     {
        question: "1. Which one of the following river flows between Vindhyan and Satpura ranges?",
        a: "Narmada",
        b: "Mahanadi",
        c: "Son",
        d: "Netravati",
         correct:"a"
    },
{
    question: "2. The Central Rice Research Station is situated in?",
       a:  "Chennai",
       b: "Cuttack",
       c: "Bangalore",
       d: "Quilon",
        correct:"b"
},
{
    question: "3. Who among the following wrote Sanskrit grammar?",
       a: "Kalidasa",
       b: "Charak",
       c: "Panini",
       d: "Aryabhatt",
         correct: "c"
},
{
    question:"4. Which among the following headstreams meets the Ganges in last?",
        a:"Alaknanda",
        b: "Pindar",
        c: "Mandakini",
        d: "Bhagirathi",
         correct:"d"
},
{
    question:"5.  The metal whose salts are sensitive to light is?",
        a: "Zinc",
        b: "Silver",
        c: "Copper",
        d: "Aluminum",
         correct: "b"
},
{ 
    question: "6. Patanjali is well known for the compilation of -",
    a: "Yoga Sutra",
    b: "Panchatantra",
    c: "Brahma Sutra",
    d: "Ayurveda",
     correct:"a"
},
{
    question:"7. River Luni originates near Pushkar and drains into which one of the following?",
    a: "Rann of Kachchh",
    b: "Arabian Sea",
    c: "Gulf of Cambay",
    d: "Lake Sambhar",
     correct:"a"
},
{
    question: "8. Which one of the following rivers originates in Brahmagiri range of Western Ghats?",
    a: "Pennar",
    b: "Cauvery",
    c: "Krishna",
    d: "Tapti",
     correct:"b"
},
{
    question :"9. The country that has the highest in Barley Production?",
    a: "China",
    b: "India",
    c: "Russia",
    d: "France",
     correct:"c"
},
{
    question:"10. Tsunamis are not caused by",
    a: "Hurricanes",
    b: "Earthquakes",
    c: "Undersea landslides",
    d: "Volcanic eruptions",
     correct:"a"
},
{
    question:"11. Chambal river is a part of-",
    a: "Sabarmati basin",
    b: "Ganga basin",
    c: "Narmada basin",
    d: "Godavari basin",
     correct:"c"
},     
{
     question:"12. D.D.T. was invented by?",
    a: "Mosley",
    b: "Rudolf",
    c: "Karl Benz",
    d: "Dalton",
     correct:"a"
},
{
      question:"13. Volcanic eruption do not occur in the",
    a: "Baltic sea",
    b: "Black sea",
    c: "Caribbean sea",
    d: "Caspian sea",
     correct:"a"
},
{
     question:"14. Indus river originates in -",
    a: "Kinnaur",
    b: "Ladakh",
    c: "Nepal",
    d: "Tibet",
     correct:"d"
},
{     
     question:"15. The hottest planet in the solar system?",
    a: "Mercury",
    b: "Venus",
    c: "Mars",
    d: "Jupiter",
     correct:"b"
},
{    
     question:"16. With which of the following rivers does Chambal river merge?",
    a: "Banas",
    b: "Ganga",
    c: "Narmada",
    d: "Yamuna",
     correct:"d"
},
{
     question:"17. Where was the electricity supply first introduced in India -",
    a: "Mumbai",
    b: "Dehradun",
    c: "Darjeeling",
    d: "Chennai",
     correct:"c"
},    
{
     question:"18. Amravati, Bhavani, Hemavati and Kabini are tributaries of which one of the following rivers?",
    a: "Mahanadi",
    b: "Godawari",
    c: "Cauvery",
    d: "Krishna",
     correct:"c"
},    
{
     question:"19. Which of the following is related to Bharat Nirman Scheme?",
    a: "Foodgrain production self sufficiency",
    b: "Family welfare programme",
    c: "Infrastructure development",
    d: "Employment generation program",
     correct:"c"
},     
{
     question:"20. Which peninsular river is least seasonal in flow?",
    a: "Narmada",
    b: "Krishna",
    c: "Godavari",
    d: "Cauvery",
     correct:"c"
}, 
{
     question:"21. Which one of the following ports is the oldest port in India?",
    a:"Mumbai Port",
    b: "Chennai Port",
    c: "Kolkata Port",
    d: "Vishakhapatnam Port",
     correct:"b"
},
{
     question: "22. At which one of the following places do the rivers Alaknanda and Bhagirathi merge to form Ganga?",
    a: "Devprayag",
    b: "Rudra Prayag",
    c: "Karnaprayag",
    d: "Vishnuprayag",
     correct:"a"
},    
{
     question:"23. Which of the following is not a nuclear power center?",
    a: "Narora",
    b: "Kota",
    c: "Chamera",
    d: "Kakrapara",
     correct:"c"
},
{
     question:"24.Federation Cup, World Cup, Allywyn International Trophy and Challenge Cup are awarded to winners of",
    a:"Basketball",
    b:"Tennis",
    c:"Cricket",
    d:"Volleyball",
     correct:"d"
},    
{
     question:"25. Guarantee to an exporter that the importer of his goods will pay immediately for the goods ordered by him, is known as",
    a:"Letter of Credit (L/C)",
    b:"inflation",
    c:"laissezfaire",
    d:"None of the above",
     correct:"a"
},
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})