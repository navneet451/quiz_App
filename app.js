document.addEventListener("DOMContentLoaded", function () {
    const quizData = {
        sections: [
            {
                sectionTitle: "General Knowledge",
                questions: [
                    {
                        questionSe: 1,
                        questionType: "mcq",
                        question: "What is the tallest mountain in the world?",
                        options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
                        answer: "Mount Everest"
                    },
                    {
                        questionSe: 2,
                        questionType: "text",
                        question: "What is the capital of Italy?",
                        answer: "Rome"
                    },
                    {
                        questionSe: 3,
                        questionType: "number",
                        question: "How many continents are there?",
                        answer: 7
                    },
                    {
                        questionSe: 4,
                        questionType: "mcq",
                        question: "What is the currency of Japan?",
                        options: ["Dollar", "Yen", "Euro", "Won"],
                        answer: "Yen"
                    },
                    {
                        questionSe: 5,
                        questionType: "text",
                        question: "What is the largest desert in the world?",
                        answer: "Sahara Desert"
                    },
                    {
                        questionSe: 6,
                        questionType: "mcq",
                        question: "Who wrote 'Romeo and Juliet'?",
                        options: ["Mark Twain", "Charles Dickens", "William Shakespeare", "J.K. Rowling"],
                        answer: "William Shakespeare"
                    },
                    {
                        questionSe: 7,
                        questionType: "number",
                        question: "What is the speed of light in vacuum (in km/s)?",
                        answer: 299792
                    },
                    {
                        questionSe: 8,
                        questionType: "mcq",
                        question: "Which planet is known as the Red Planet?",
                        options: ["Earth", "Mars", "Venus", "Jupiter"],
                        answer: "Mars"
                    },
                    {
                        questionSe: 9,
                        questionType: "text",
                        question: "Who is the author of 'The Alchemist'?",
                        answer: "Paulo Coelho"
                    },
                    {
                        questionSe: 10,
                        questionType: "mcq",
                        question: "What gas do plants absorb from the atmosphere?",
                        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                        answer: "Carbon Dioxide"
                    }
                ]
            },
            {
                sectionTitle: "Science",
                questions: [
                    {
                        questionSe: 1,
                        questionType: "mcq",
                        question: "What is the chemical symbol for water?",
                        options: ["H2O", "O2", "CO2", "HO2"],
                        answer: "H2O"
                    },
                    {
                        questionSe: 2,
                        questionType: "number",
                        question: "At what temperature does water boil (in Celsius)?",
                        answer: 100
                    },
                    {
                        questionSe: 3,
                        questionType: "text",
                        question: "What is the powerhouse of the cell?",
                        answer: "Mitochondria"
                    },
                    {
                        questionSe: 4,
                        questionType: "mcq",
                        question: "What is the process of converting solid to gas called?",
                        options: ["Melting", "Evaporation", "Sublimation", "Condensation"],
                        answer: "Sublimation"
                    },
                    {
                        questionSe: 5,
                        questionType: "text",
                        question: "What is the main gas found in the air we breathe?",
                        answer: "Nitrogen"
                    },
                    {
                        questionSe: 6,
                        questionType: "mcq",
                        question: "Which planet is known for its rings?",
                        options: ["Jupiter", "Mars", "Saturn", "Uranus"],
                        answer: "Saturn"
                    },
                    {
                        questionSe: 7,
                        questionType: "number",
                        question: "How many bones are there in an adult human body?",
                        answer: 206
                    },
                    {
                        questionSe: 8,
                        questionType: "mcq",
                        question: "What part of the plant conducts photosynthesis?",
                        options: ["Roots", "Stem", "Leaves", "Flowers"],
                        answer: "Leaves"
                    },
                    {
                        questionSe: 9,
                        questionType: "text",
                        question: "What element is essential for respiration?",
                        answer: "Oxygen"
                    },
                    {
                        questionSe: 10,
                        questionType: "mcq",
                        question: "What is the hardest natural substance on Earth?",
                        options: ["Gold", "Iron", "Diamond", "Quartz"],
                        answer: "Diamond"
                    }
                ]
            },
            {
                sectionTitle: "Mathematics",
                questions: [
                    {
                        questionSe: 1,
                        questionType: "number",
                        question: "What is the value of pi (π) to two decimal places?",
                        answer: 3.14
                    },
                    {
                        questionSe: 2,
                        questionType: "mcq",
                        question: "What is 12 multiplied by 12?",
                        options: ["144", "124", "112", "132"],
                        answer: "144"
                    },
                    {
                        questionSe: 3,
                        questionType: "text",
                        question: "What is the square root of 64?",
                        answer: "8"
                    },
                    {
                        questionSe: 4,
                        questionType: "mcq",
                        question: "What is the next prime number after 7?",
                        options: ["8", "9", "10", "11"],
                        answer: "11"
                    },
                    {
                        questionSe: 5,
                        questionType: "number",
                        question: "What is 25% of 200?",
                        answer: 50
                    },
                    {
                        questionSe: 6,
                        questionType: "text",
                        question: "What do you call a polygon with eight sides?",
                        answer: "Octagon"
                    },
                    {
                        questionSe: 7,
                        questionType: "mcq",
                        question: "What is the sum of angles in a triangle?",
                        options: ["90 degrees", "180 degrees", "360 degrees", "270 degrees"],
                        answer: "180 degrees"
                    },
                    {
                        questionSe: 8,
                        questionType: "number",
                        question: "What is the value of 7 cubed?",
                        answer: 343
                    },
                    {
                        questionSe: 9,
                        questionType: "mcq",
                        question: "What is 10 divided by 2?",
                        options: ["2", "5", "10", "20"],
                        answer: "5"
                    },
                    {
                        questionSe: 10,
                        questionType: "text",
                        question: "What is the formula for the area of a circle?",
                        answer: "πr²"
                    }
                ]
            },
            {
                sectionTitle: "Indian Polity",
                questions: [
                    {
                        questionSe: 1,
                        questionType: "text",
                        question: "What is the supreme law of India?",
                        answer: "The Constitution of India"
                    },
                    {
                        questionSe: 2,
                        questionType: "mcq",
                        question: "Who is known as the Father of the Nation in India?",
                        options: ["Jawaharlal Nehru", "Mahatma Gandhi", "B.R. Ambedkar", "Sardar Patel"],
                        answer: "Mahatma Gandhi"
                    },
                    {
                        questionSe: 3,
                        questionType: "number",
                        question: "How many members are there in the Rajya Sabha?",
                        answer: 245
                    },
                    {
                        questionSe: 4,
                        questionType: "text",
                        question: "What is the maximum age for becoming a Prime Minister in India?",
                        answer: "No age limit"
                    },
                    {
                        questionSe: 5,
                        questionType: "mcq",
                        question: "Which article of the Constitution deals with the Fundamental Rights?",
                        options: ["Article 14", "Article 32", "Article 21", "All of the above"],
                        answer: "All of the above"
                    },
                    {
                        questionSe: 6,
                        questionType: "text",
                        question: "Who is the current President of India? (As of 2024)",
                        answer: "Droupadi Murmu"
                    },
                    {
                        questionSe: 7,
                        questionType: "mcq",
                        question: "What is the minimum age to vote in India?",
                        options: ["18", "21", "25", "16"],
                        answer: "18"
                    },
                    {
                        questionSe: 8,
                        questionType: "text",
                        question: "What is the capital of India?",
                        answer: "New Delhi"
                    },
                    {
                        questionSe: 9,
                        questionType: "number",
                        question: "What is the total number of states in India?",
                        answer: 28
                    },
                    {
                        questionSe: 10,
                        questionType: "mcq",
                        question: "Which schedule of the Constitution contains the list of states and union territories?",
                        options: ["First Schedule", "Second Schedule", "Third Schedule", "Fourth Schedule"],
                        answer: "First Schedule"
                    }
                ]
            }
        ]
    };
    initSections();

    function initSections() {
        let sections = document.querySelectorAll(".section");
        sections.forEach((section) => {
            section.addEventListener("click", () => {
                let sectionNumber = parseInt(section.getAttribute("data-section"));
                startQuiz(sectionNumber);
            })
        })
    }


    function startQuiz(index) {
        const currentQuestions = quizData.sections[index].questions;
        let score = 0;
        let currentQuestionIndex = 0;
        let answerSelected = false;

        document.getElementById("quiz-container").style.display = "none";
        document.getElementById("question-container").style.display = "block";
        document.getElementById("question-container").innerHTML=
        `
            <p id="score">Score:0</p>
            <div id="question"></div>
            <div id="options"></div>
            <button id="next-button">Next</button>
        `;
        showQuestions();

        function showQuestions() {
            const question = currentQuestions[currentQuestionIndex];
            const questionElement = document.getElementById("question");
            const optionsElement = document.getElementById("options");

            questionElement.textContent = question.question;
            optionsElement.innerHTML = '';

            if (question.questionType === "mcq") {
                question.options.forEach(option => {
                    const optionElement = document.createElement('div');
                    optionElement.textContent = option;
                    optionElement.addEventListener('click', function () {
                        if (!answerSelected) {
                            answerSelected = true;
                            optionElement.classList.add("selected")
                            checkAnswer(option, question.answer);
                            console.log(option);
                        };
                    });
                    optionsElement.appendChild(optionElement);
                });
            } else {
                // For text and number question types
                const inputElement = document.createElement('input');
                inputElement.type = question.questionType === 'number' ? 'number' : 'text';
                const submitButton = document.createElement('button');
                submitButton.textContent = 'Submit Answer';
                submitButton.className = 'submit-answer';

                submitButton.onclick = () => {
                    if (!answerSelected) {
                        answerSelected = true;
                        checkAnswer(inputElement.value.toString(), question.answer.toString());
                    }
                };

                optionsElement.appendChild(inputElement);
                optionsElement.appendChild(submitButton);

            }

        }

        function checkAnswer(givenAnswer, correctAnswer) {
            const feedbackElement = document.createElement('div');
            feedbackElement.id = 'feedback';
            if (givenAnswer === correctAnswer || givenAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
                score++;
                feedbackElement.textContent = 'Correct!';
                feedbackElement.style.color = 'green';
            } else {
                feedbackElement.textContent = `Wrong. Correct answer:  ${correctAnswer}`;
                feedbackElement.style.color = 'red';
            }
            const optionsElement = document.getElementById('options');
            optionsElement.appendChild(feedbackElement);
            updateScore();
        }

        function updateScore() {
            document.getElementById("score").textContent="Your score:" +score;
        }
        function endQuiz(){
            document.getElementById("question-container").innerHTML=
            `
                 <h2>Quiz Completed</h2>
                 <p>Your final Score :${score}/${currentQuestions.length}</p>
                 <button id="home-button">Go to Home</button>
            `;
                document.getElementById("home-button").addEventListener("click", ()=>{
                document.getElementById("quiz-container").style.display="grid";
                document.getElementById("question-container").style.display="none";
            })
        }

        document.getElementById("next-button").addEventListener("click", () => {
            if(currentQuestionIndex >= currentQuestions.length-1){
                console.log("quited");
                endQuiz();
            }
            answerSelected=false;
            currentQuestionIndex++;
            showQuestions();
        })

    }

});



