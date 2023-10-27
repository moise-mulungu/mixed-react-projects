// import React, { useState } from 'react'
import StartQuizButton from './start-quiz-button'
// import { set } from 'react-hook-form'
// import RulesOfTheQuiz from './rules-of-the-quiz'

export default function QuizAppWithTimer() {

  return (
    <div className="bg-blue-500 h-screen flex justify-center items-center">
      <StartQuizButton />
    </div>
  )
}

/*
MM: DM: here is the HTML from the tutorial
<!-- Created By CodingNepal - www.codingnepalweb.com  -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Awesome Quiz App | CodingNepal</title>
    <link rel="stylesheet" href="style.css">
    <!-- FontAweome CDN Link for Icons-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
</head>
<body>
    <!-- start Quiz button -->
    <div className="start_btn"><button>Start Quiz</button></div>

    <!-- Info Box -->
    <div className="info_box">
        <div className="info-title"><span>Some Rules of this Quiz</span></div>
        <div className="info-list">
            <div className="info">1. You will have only <span>15 seconds</span> per each question.</div>
            <div className="info">2. Once you select your answer, it can't be undone.</div>
            <div className="info">3. You can't select any option once time goes off.</div>
            <div className="info">4. You can't exit from the Quiz while you're playing.</div>
            <div className="info">5. You'll get points on the basis of your correct answers.</div>
        </div>
        <div className="buttons">
            <button className="quit">Exit Quiz</button>
            <button className="restart">Continue</button>
        </div>
    </div>

    <!-- Quiz Box -->
    <div className="quiz_box">
        <header>
            <div className="title">Awesome Quiz Application</div>
            <div className="timer">
                <div className="time_left_txt">Time Left</div>
                <div className="timer_sec">15</div>
            </div>
            <div className="time_line"></div>
        </header>
        <section>
            <div className="que_text">
                <!-- Here I've inserted question from JavaScript -->
            </div>
            <div className="option_list">
                <!-- Here I've inserted options from JavaScript -->
            </div>
        </section>

        <!-- footer of Quiz Box -->
        <footer>
            <div className="total_que">
                <!-- Here I've inserted Question Count Number from JavaScript -->
            </div>
            <button className="next_btn">Next Que</button>
        </footer>
    </div>

    <!-- Result Box -->
    <div className="result_box">
        <div className="icon">
            <i className="fas fa-crown"></i>
        </div>
        <div className="complete_text">You've completed the Quiz!</div>
        <div className="score_text">
            <!-- Here I've inserted Score Result from JavaScript -->
        </div>
        <div className="buttons">
            <button className="restart">Replay Quiz</button>
            <button className="quit">Quit Quiz</button>
        </div>
    </div>

    <!-- Inside this JavaScript file I've inserted Questions and Options only -->
    <script src="js/questions.js"></script>

    <!-- Inside this JavaScript file I've coded all Quiz Codes -->
    <script src="js/script.js"></script>

</body>
</html>
*/
