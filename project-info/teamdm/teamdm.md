
# Team Name Ideas 
* suggestions:
  * Duncan: The IG (the Ingenious Geniuses)
  * freelance company name: 
    * Duncan: <something> WebTech


# Goals (revisit weekly)
* Duncan: have the experience in the following roles: tech lead, project manager, employer; be ready to interview for a tech lead position; (Duncan will be leaning heavily on his mentors who have experience in project mgmt, tech lead, unit testing, freelance)
* Moise: have experience working on an agile team (git, jira, etc: very important), full-stack portfolio site, full-stack real-world app, full-stack training (todo: elaborate); be ready to interview for Junior Dev position AND be ready to work as a Junior Dev on freelance projects
* Team: "freelance-ready starter repo" and work process - let's get come clients and make some money.



# git
* branches: main, development, duncan, moise
  * task-based branches based on Jira ticket names: bug/photon-1234, feat/photon-1234

for push

# Team Mission Statement
* excellent product
* work-life balance
* always be cool as a cucumber 😎 (grace under pressure)

# Work Product
* todo: describe briefly the real-world things to produce
* portfolio site
* real-world app (Moise) (DM note: I've asked 2 mentors, they say 1 complex app is enough, absolutely necessary, but 1 is enough).
* todo DM: training: what real-world things will Moise produce and where keep them
  * knowledge base, code snippets, etc.
* starter repo for freelance work (DM) - represents the best from all repos we work on
* this process

# Work Process: Agile
* everything is ITERATIVE, including the processes this doc describes
  * schedule, goals, will change, 
* using Duncan's work experience as a model, tweaking as we go along,
  * Duncan will revise often (rapid change causes stress, but one of Duncan's **goals** is to refine a management style quickly)
* 2-week sprints (Moise: Jira.com suggested default is 2 weeks, let's try that)
  * Mon-Thu - tasks (coding, research ("spike"), training)
  * Fri - bug fixes, cleanup, documentation, organizing (ex: refining this file)
    * Fri afternoon: networking (email, chat, video with tech friends); career development (interview practice: pramp (1 per week, soft skills, dsa), codewars); toolbox (ex: VS Code skills - search "my favorite VS code tricks/extensions/shortcuts", then teach Duncan)
* JIra ticket for each task: bug, feature (story, gets story points)
* time to complete tasks are estimated as "story points": 1 point == one day work (allow for can't program 8hrs/day) (skill: how to extimate and manage the boss's expectations);
* daily schedule
  * !! consistency is important: always meet, even if the work is behind schedule; plan ahead: if we can't make a standup, reschedule ahead of time.
  * first: pull the repo, read all the diffs, answer questions, 
  * ongoing: record progress in our Tasks section, marking tasks as "(done)" and detailing progress on tasks, asking questions. 
  * daily standups
    * 6am/3pm - 8am/5pm: Slack
      * discuss everything that can be discussed well via text
      * we can try voice huddles later, maybe that will work in lieu of Zoom
    * 7AM MT (4PM Goma); duration: 10 to 30 minutes
      * Duncan will open the Zoom meeting up 15 minutes before the start time; Moise will connect 15 min ahead to allow for issues like rain (unpredictable internet)
    * Moise brings up any blockers, questions, training, reports what was completed yesterday, discuss plan for today.
    * !!! Duncan, Moise both git-commit before the other wakes up in the morning :)
  * Moise 1 hour/day working on specific technical skills
    * (Duncan, Moise TODO) list the skills: CSS, JS, back-end (RDB, REST, GraphQL)
* Sundays - planning, teaching, feedback for D and M
* every 6th week, retrospective, cooldown
  * cooldown: Moise chooses a task/skill of his interest, but that is related to the projects)
* WU transfer: first business day of each month (??? is this OK? can do more often, WU makes the submission process easy, but since it requires a trip downtown)
  * 2 weeks, then see


# communication: see ./communication-tools

# developer toolbox: see ./developer-toolbox

# project ideas: see ./project-ideas

# training: see ./training


# Technology
* JS
  * React
* TailwindCSS
  * answer
* database
  * mySql (DaaS? database as a service)
  * MongoDB (for prototyping) with Mongoose (ODM - object-document model)
  * Prisma ORM (object-relational model)
  * Arquero - JS data munging tool (excellent data-manipulation vocabulary in the docs and naming conventions)

# Project Management (medium- and long-term schedule, progress tracking)

# todoDM: Project Standards
* !!!!! consistency - makes the workday go smoothly and reduces cognitive load
* avoid capital letters? (todo DM: think more on it)
## code standards: ex: ideal directory structure; file-naming (lowercase, snake-case), variable-naming standards (pascalCase unless React Component or constant); 
  * !!! spelling, grammar - reduce distractions. Software Engineer minds are pattern-matching machines that are vigilant for defects: 
## VS Code setup (to most easily share a repo): eslint, prettier, extensions (ex: spell check)
  * Duncan and Moise 





# Moise tasks
## daily routine
* pull Duncan's latest commits and look at the diffs (compare your last commit before my commit to the working tree in GitLens to see what changes I made)
* update repo with notes and "(done)" or "(partial)" when task is complete or you have worked on it
* 3pm push repo to the remote
* 3-5pm be on Slack (Duncan's 6-8am)
* 5pm (i.e., whenever you stop for the day) commit and push (if any additional changes)
## Week ofMonday Feb 6 I'd like you to work in this order, after pulling the repo:
* as usual, check all diffs for the new info I've pushed - see if there is anything I put that you need to do or respond to
* see new exercise in utils/array/snippets
* add "(done)" or comments to your tasks in the section ## next 
* (done) spend 30 minutes solving src/utils/array/snippets/sort.js
* with the time that's left, 1/2 on each of:
  * Joy of React (let's discuss your vocabulary entries Monday) 
  * Portfolio - implement portfolio finding all the needed components in tailwindui
  * Note: if your brain likes to code first, then study next, feel free to change the order
* btw, always check package.json, to see if there's anything I installed that you need to install: there-s one new one:@heroicons/react
* note on Tailwindcss/ui: it is very customizable, so you can really make it your own, but I think it's best to implement it quickly for the full portfolio site first, making the least changes to taiwindui as is possible. So, find in tailwindui the components you need to match your current portfolio site, or you may wish to adapt your layout a bit to use what tailwindui has available if you see something you like. Then, we'll get the React and interactivity fully implemented. Once you see the whole thing together, that is a good time to start tweaking it visually to fit your preferences. 
## next (unless there is a specific list for the day above) 
<!-- read -->
* when you complete a task, put "(done)" or "(partial)" - explain what's left to do)
* focus 1/2 on portfolio, 1/2 on Joy of React
  * start collecting snippets in the src/utils directory when you see new JS and React techniques
    * JS techniques
  * as you read, I'd like you to make a React vocabulary list in tech/react/vocabulary/index.md - this will be very helpful for both of us.
  * let me know which chapter you are reading, so I know what to discuss, teach you.
* set up GitHub notifications in Slack to a #GitHub channel
  * ???MM: Can you have tips on how to set up GitHub notifications on Slack. 
    * DM: I'd like you to research it and see if it is possible. I assume slack-github are integrated so that a notification will come to Slack each time one of us pushes to the repository. We have this at work with gitlab-webex.
    * DM: In general, when I give your a random task, you may ask yourself, how long to try/research?: Google it for 5-10 minutes. if you are totally blocked, leave a note like "not possible", or "nothing on google indicates it is possible". If it IS possible, read some tutorials/instructions and give it a try. Don't spend more than like 30 minutes or an hour on it. If you get blocked, or you know it will take longer than an hour, stop, leave some notes on what you found out, what you did so far, with the links that are good, and we'll return to it. You could finish it later or we may decide it not to be worth the additional effort.
      * This is good practice for when the boss gives you random assignments. I would always expect you to research a bit, not ask me how to do it.
        * If you did research it and found nothing, or found limitations, you can tell me. 
        * If I didn't describe the assignment clearly, ask for clarification. At my job, this is very important and happens a lot. If my boss gives me a vague assignment and I guess his intent wrongly, he'll get mad, and he'll tell me I should always ask for clarification before wasting my time possibly doing the wrong thing. 
        * how much time to spend on it? You can assume that I think it is important, but that you should't lose too much time on it. One hour is good, 1/2 day is not (better to stop and report). Practice finding the right stopping point and report back your progress so far. 
  * Moise, when I leave a big comment, just leave a note: "MM: read, thanks". I'll remove it later, or move it to another area.
* (done)find out what "liveServer" means when it is in the .vscode/settings.json
    - (liveServer.settings.port: Customize Port Number of your Live Server. If you want random port number, set it as 0.[Default value is 5500.]). I still do not know how did this land in the project, here is its source https://ritwickdey.github.io/vscode-live-server/docs/settings.html
    - ok, good job, I don't think it will hurt to leave it there. Leave a comment in the .vscode/settings.json saying that it wasn't added manually by us, and add your above summary to the comment also.

* (done) the change in package.json nextjs version from 'latest' to 12.1.6. DM: I think I may have told you to do this32
* (done) read about: nextjs 'next/head'

* read ./training.md
  * please understand everything here: https://www.vocabularyof.tech/vcs/git/new-git-repo
  <!-- ???MM: Is it required to start the git process from the($ echo "# repo-name" >> README.md), or someone can skip it?  --> It's required only if you're starting with an empty repo.
  * experiment with GitLens
## depends on DM
  * (done for now) set up Jira (Duncan will create an account and provide the details)(will be delayed past Tuesday)
    * for now, focus on adding more columns the sprint board
    * DM: moise wrote: Created some sprints on Jira according to the basic portfolio tasks.
## done
* add your Agile notes to project-info/team-dm/agile/agile.md
* add Chrome and VS Code extensions (see ./developer-toolbox)
## ongoing
* Joy of React course (focus on this the majority of the workday)
* practice your vscode snippets and vscode shortcuts on Friday afternoons (if you have an coding challenge interview where the interviewers watch you type code, I want them to say, "Wow, this guy is fast!")
* src/utils - start recording what you learn as functions (to import and use) and snippets (to copy and paste)

## Tuesday's tasks
I read about 
  * sort an array of object in JavaScript : https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
  * Joy of react(ongoing learning, React fundamentals)
    * DM: great. be sure to add snippets if you see something unfamiliar or hard. (snippets help remember and also lets me code review your snippet and adjust vocabulary)
    * DM: also, start adding JS vocabulary
    * DM: just a reminder, you want to reasearch and try each new hard thing you run into for the right amount of time (15-30 minutes), but don't get into a situation where you lose 2 hours on one hard thing. You can add a question for me - if I think you need to try more, I'll tell you. Better to write a question, then move on, optimizing your time. Think on this, it's not a hard-and-fast rule, but what I described will be the kind of decisions you'll have to make your entire career.
    * DM: Wednesday: 
# Duncan tasks (todoDM: these out of date, bad mentor!, clean up Sunday and start editing daily)
## daily routine
* 7-8am be on Slack
* pull Moise's latest commits
* answer questions made in the repo or texted in Slack
* updates to the repo
* 8am (or when finished) commit and push
* 5pm commit and push (if any additional changes)
## next (most tasks will be done on Sundays)
* ensure this app runs
* update docs with items discussed today
* look at Jira: "Meanwhile, you may check how I created sprints on Jira, fit seemed confusing at first. I need your assessment on that as well. Thanks"
* take Moise Agile notes and adapt to a document of OUR process (Moise will add his )
* (done) coding
  * npm i and make sure site runs
  * start with an HTML-only example, with list of similar HTML-only
  * put portfolio HTML into React, as a complete example (that uses CSS and scripts JS)
* GitLab account setup
* elaborate on training list: common git commands; code snippets
## depends on MM
## done: 
## will be delayed
* send Moise Jira plan
  * look around
  * describe how it should work
## future, in order of priority
* coding standards (initial)
* coding standards (more detail)
## ongoing
* Joy of React course (read along, to discuss with MM, answer questions)
* UI vocabulary
* coding standards
## Sunday plan:
* go over our communication process
* talk about Jira
* plan, train, etc. 
* talk about the vocabulary list
* talk about snippets in src/utils (maybe a starter page to show react snippets in teh browser)

# plan for Wednesday 2023-02-15 (these are my same posts on slack)
* 3 hours on the portfolio(1/2 done)
* 2 hours on the findObjectInArrayOfObjects.js exercise plus some codeWars (put your solutions in the repo so we can discuss them)(done)
* 3 hours on Joy of React (put vocabulary and snippets in the repo)(in progress)
  * gotta give JS and React significant priority - more knowledge will speed up your progress on the portfolio. BUt, yes it's also good to work the portfolio to have real-world React to work through. 
* let's plan on 3 hours portfolio, 5 hours learning going forward. todoDM: add this to main 'moise tasks' section
* Fixed the `joy of react game converter`

Note: If you don't hear from me later about getting access to the template, focus your portfolio time tomorrow on styling the footer with tailwind utility classes. Have a deep-dive into tailwindcss.com and start a vocabulary file for tailwind in the project-info section. "utility class" is a good term to understand, for example.

BTW, I'm starting a TypeScript snippets folder in my personal repo, just like I'm having you do here with react, js, tailwind. I'll systematically record all my TS solutions. I keep learning then forgetting TW (it's like CSS, I run into situations not frequently, so I forget ...). t's waste of time and slowing me down at work, so I'll make a searchable knowledge base of my TS solutions.

