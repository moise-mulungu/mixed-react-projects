# Communication Tools

## email: moisemlg90@gmail.com, dmckeeve9@gmail.com

## leaving notes for each other in .js and .md files

- why: why all this specificity? communicating by git diff is really great, because all my notes and instructions can be IN CONTEXT which saves a lot of time. But, there has to be a way of cleaning up/removing these notes later.
- !each person always use this own initials, that way you can always find what you wrote (works better if there is more than 2 people on the team)
  - todoXX is the exception
- ??? aka "fishhooks" means there is a question, concern, "hey look at this"
  - ???DM, ???MM
  - example: MM: ???DM: a question for Duncan
- in .js comments or .md files
  - word? - the "?" signifies doubt about the correct word (?? signifies doubt about the concept, approach)
- !!! means "important" depending on the number of "!"
- comments: DM: | MM: (on a a new line above the line the comment references)
  - in JS code: // DM:
  - in .md (Markdown) files: DM:
  - examples
  ```js
  // DM: comments or questions Duncan writes go here
  ```
  ```markdown
  MM: comments or questions Moise writes go here
  ```
  - note: putting changes on newlines makes it easier for Git to merge (I assume)
- TODOs: (done)
  - MM: todoDM: MM tells DM a task to do
  - MM: todoMM: MM tells MM a task to do
  - DM: todoMM: DM tells MM a task to do
  - DM: todoDM: DM tells DM a task to do
  - upon completion: add (done) just after the last ":".
    - ex: MM: todoDM: (done) MM tells DM a task to do
    - then Moise can erase this line once he's sure DM has completed the task
- after a task is completed, add (done) or (partial - explain what's left, in this case). Examples:
  - (done) Moise's task 1
  - (partial) Moise's task 2
    - MM: I still need to do subtask 3 (DM: tell me this in context, i.e., write it where subtask 3 is in the repo files)
  - DM: hey, definitely put (done), (read), (ok), or (any message) after each "DM:" - that way I can know when to delete them later.
  - why: if there's any glitch in git diffs, merges, etc. it can be hard to tell who wrote what.
  - DM: todoDM: 2023-02-15 organize this section better on 3 topics: random comments, comments starting with XX:, comments starting with XX: todoXX:
    - disregard for now: idea, date extension; idea: priority number: ugh ... XX: todoXX[1-3]: YYYY-MM-DD
    - disregard for now: knowledge-base enhancements; write doc with strategy for prioritizing tasks (ease\*impact) - very easy, high impact - do these first.

## knowledge base (KB): this repo will serve as a 'repository' our our accumulated knowledge

- leave notes anywhere (in-context notes are best)
  - all programming techniques start with "howto\*: "
    ```js
    // howtojs: array.reduce() don't forget to always 'return acc' or you'll get a weird error that includes the number 7
    // howtotailwind: some lesson you learned specifically about tailwindcss
    // howtocss: center a div horizontally margin: auto
    ```
    - whenever you have a question, before you google, do a vscode global search (regex) (ctrl+shift+F): `howtocss:.*center.*div`
    <!-- This explanation is very concise, i liked it!. i had the idea of creating a specific file for how-to-stuff.md, where we can be accessing contents, or to create a specific files for each topic? That's fine to create a specific file for a topic if you want to focus on a topic. Putting howtos "inline" in your code is helpful because you see a real-world example. And, it is much faster, just write the howto and your done. DM: todoMM: give me a (ok) on this when you've understood the issue and no more questions, so that I can erase or make a permanent note.   -->
- reusable functions and code snippets
  - src/utils/array|object|string|etc - write the function or snippet there

## GitLab (or Github)

## Jira: ./jira

## VS Code (/project-info/\*.md files in the repo)

- branch "development"

## Slack https://teamdm-global.slack.com

- for the time that we're both online, after 4pm Goma (7am MT), let's use this to stay in touch for quick questions and updates
