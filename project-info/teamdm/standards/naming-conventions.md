(done) DM todoMM: review these naming conventions 

# consistency saves time and energy, helps avoid typo bugs

- in order to have consistency, you have to have rules (standards) to follow

# conventions followed makes everything easier

- tooling more likely to format your code better. ex: GitLab side-by-side diffs hard-to-read with 180 character lines
-

- directory names - kebab-case
- Components - PascalCase
- functions - camelCase
- database (relational) column names - snake_case
- acronyms - strict camel case, acronyms not capitalized
  - myHtml, myUrl, myUi, myId - follows the KISS principle, simpler is better
- no abbreviations (unless they are commonly used as words)
  - don't: "btn" use "button"
  - OK: "UI", a11y, Html - these are commonly used in conversation and writing as words
  - exception: ok is very short functions ex: releases.map(r => r.name)
  - why
    - people use different abbreviations for the same word (lacks consistency). it is better, if you remember something is named "start button" to always know the variable will be startButton.
    - they are often cryptic to read
  - possible exceptions: num (number of), elem (element), and project-specific words like env (environment). BUT, don't use so many exceptions that it is hard to remember them all. The whole point is to not have to think about whether an abbreviation is used or not.
    - num ... countOf may be better

DM: todoDM: myID vs myId bk if plural myIds ... myIDs is easier to read, but the camelCase general rule is broken ...
