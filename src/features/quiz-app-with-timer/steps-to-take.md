DM: good that you've listed

(MM: yes, i meant in aim to access a content you need to open by the previous action, example without a start quiz button the rules of the quiz can't be accessed. DM: got it, good, very logical!)DM: todoMM: what do the indentations mean? indentations indicate that the indented line(s) are a subset of the line above. DM: keep in mind, that with React, it is less of a linear/imperative "this, then this, then this" and more declarative - just a bunch of pieces of JSX that "react" to changes in state, the JSX being shown or being hidden, depending on the values in the state variables. After you convert it to React. Just keep it in mind for now, no need to understand it deeply. We'll talk about this more when you've converted more of the app to React because "seeing is believing".
1. create a "start quiz" button that will be on center of the main page
2. clicking the button
   1. a pop with "some rules of the quiz"
   2. a list of rules of the quiz(5)
   3. two buttons at the bottom of the page
      1. exit button, that returns to the home page of the "start quiz"
      2. a continue button that will open a popup of series of questions
         1. a quiz box appears with:
            1. a quiz title of "awesome quiz application"
            2. a time left input with a timer(10 to 15s)
            3. a title of question :"what does ...?"
            4. a list of multiple choice answers
            5. a footer with two buttons:
               1. the first "previous" to return to the previous question if that is not the first
               2. the second "next" to go the next question if the current is already answered.
            6. a quiz result with an image of crown where it displays the result of the quiz
               1. a "repeat quiz" that will open the quiz box
               2. a "quit quiz" that will direct to the first "start quiz" button
## html
* start quiz button
* info box
* quiz box
* result scores.

## css
* style the all elements with "*"
* style the body
* style the start button
* style the info box
* 

## javascript
* get all required elements
* add an event listener to the start quiz button to open rules of the quiz
* add an event listener to the exit button to close the rules of the quiz and continue button to open a quiz box
* creating an array of questions with objects of numbers, answers, questions and options properties
* getting questions and answers from the array
* add a select option to disable the rest of the options
* show the correct answer when the selected answer is wrong
* create a start timer function with a progress bar
* a show result function.