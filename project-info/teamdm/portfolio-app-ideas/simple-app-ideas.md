

# idea: data-table app

DM: storing this info for later, when you need a data table

if this repo works as-is:
https://github.com/jimmybutton/react-tailwind-table/tree/main
install and run (learning by example; get it working first in a simple environment before you try to put it into your repo)
push to GitHub (so we can both see it, review)
update the packages to versions we are using in the repo
move it to the repo (this is a create-react-app repo, so you need to find just the files needed in NextJS)
then update it for a new data source, adjust the styling



# idea: game
* steps:
1. https://www.codingnepalweb.com/quiz-app-with-timer-javascript/
  * read the article, then 
  * use the Download button to get the code
   	* note: this is basic JS, no react, no JS, just the original vanilla JS
	* unzip and run the code by opening index.HTML in your browser
	* get familiar with how the game works
	* understand the code
  	* open in a new VSCODE window the "Quiz Application with Timer" folder that you unzipped
  	* put some console.logs in the code to understand what is happening when
    	* just reload index.HTML in the browser to see the console.logs
    * ask Copilot to explain how the code works. 
      * Copilot does best if you have all the files opened in a VSCode tab.
  	* make sure you understand the code well, because you'll be converting it to React (which is a great learning exercise! And you'll see how much better React is than vanilla JS!)
2. convert to React and NextJS
  * create a new src/pages/quiz/index.jsx file
    * set up the page like your other pages, with all the code residing in src/features/quiz/*
  * put in the HTML first, change class= to className=
  * add CSS: look for existing examples in the repo of how to import and use style.cssCSS
  * DM: I'll look tomorrow and give more steps/tips
3. Fetch questions and answers from the API: https://quizapi.io/predefined-quizzes
  * do this step last, only after you have the app working completely in NextJS 
  * todoDM: add more info for this step


