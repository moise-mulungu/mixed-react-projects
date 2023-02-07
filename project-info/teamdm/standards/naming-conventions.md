
# consistency saves time and energy, helps avoid typo bugs
* in order to have consistency, you have to have rules (standards) to follow

* directory names - kebab-case
* Components - PascalCase
* functions - camelCase
* database (relational) column names - snake_case
* acronyms - strict camel case, acronyms not capitalized
  * myHtml, myUrl, myUi, myId - follows the KISS principle, simpler is better
* no abbreviations unless they are commonly used as words. 
  * don't: "btn" use "button"
  * do: "UI", a11y, Html - these are commonly used in conversation and writing as words
  * exception: ok is very short functions ex: releases.map(r => r.name)
  * why
    * people use different abbreviations for the same word (lacks consistency). it is better, if you remember something is named "start button" to always know the variable will be startButton. 
    * they are often cryptic to read(done)
