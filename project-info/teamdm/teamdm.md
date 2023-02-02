
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
  * daily standups (max 5/week) 
    * 6am/3pm - 8am/5pm: Slack
      * discuss everything that can be discussed well via text
      * we can try voice huddles later, maybe that will work in lieu of Zoom
    * 7AM MT (4PM Goma); duration: 10 to 30 minutes
      * Duncan will open the Zoom meeting up 15 minutes before the start time; Moise will connect 15 min ahead to allow for issues like rain (unpredictable internet)
    * Moise brings up any blockers, questions, training, reports what was completed yesterday, discuss plan for today.
    * !!! Duncan, Moise both git-commit before the other wakes up in the morning :)
  * Moise 1 hour/day working on specific technical skills
    * (Duncan, Moise TODO) list the skills: CSS, JS, back-end (RDB, REST, GraphQL)
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
* database
  * mySql (DaaS? database as a service)
  * MongoDB (for prototyping) with Mongoose (ODM - object-document model)
  * Prisma ORM (object-relational model)
  * Arquero - JS data munging tool (excellent data-manipulation vocabulary in the docs and naming conventions)

# Project Management (medium- and long-term schedule, progress tracking)

# Project Standards (DM todo)
* !!!!! consistency - makes the workday go smoothly and reduces cognitive load
* avoid capital letters? (todo DM: think more on it)
## code standards: ex: ideal directory structure; file-naming (lowercase, snake-case), variable-naming standards (pascalCase unless React Component or constant); 
  * !!! spelling, grammar - reduce distractions. Software Engineer minds are pattern-matching machines that are vigilant for defects: 
## VS Code setup (to most easily share a repo): eslint, prettier, extensions (ex: spell check)
  * Duncan and Moise 





# Moise tasks (ordered by priority)
## next
* find out what "liveServer" means when it is in the .vscode/settings.json
    - (liveServer.settings.port: Customize Port Number of your Live Server. If you want random port number, set it as 0.[Default value is 5500.]). I still do not know how did this land in the project, here is its source https://ritwickdey.github.io/vscode-live-server/docs/settings.html

* uncertain: the change in package.json nextjs version from 'latest' to 12.1.6
  * DM: I think I may have
* read about: nextjs 'next/head'
  - next/head is a NextJs module that imports <Head> from, a built-in component in ReactJs that allows to modify the metadata of the page(<head>).
  source: https://nextjs.org/learn/basics/assets-metadata-css/metadata

* read ./training.md
  * please understand everything here: https://www.vocabularyof.tech/vcs/git/new-git-repo
  //???DM: Is it required to start the git process from the($ echo "# repo-name" >> README.md), or someone can skip it? 
  * experiment with GitLens
## depends on DM
  * set up Jira (Duncan will create an account and provide the details)(will be delayed past Tuesday)
    * for now, focus on adding more columns the sprint board
## done
* add your Agile notes to project-info/team-dm/agile/agile.md
* add Chrome and VS Code extensions (see ./developer-toolbox)
## ongoing
* Joy of React course (focus on this the majority of the workday)
* practice your vscode snippets and vscode shortcuts on Friday afternoons (if you have an coding challenge interview where the interviewers watch you type code, I want them to say, "Wow, this guy is fast!")
* src/utils - start recording what you learn as functions (to import and use) and snippets (to copy and paste)

# Duncan tasks
## next
* take Moise Agile notes and adapt to a document of OUR process (Moise will add his )
* coding
  * npm i and make sure site runs
  * start with an HTML-only example, with list of similar HTML-only
  * put portfolio HTML into React, as a complete example (that uses CSS and scripts JS)
* GitLab account
## depends on MM
## done: 
* list: Chrome and VS Code extensions
* start training list:common git commands; code snippets
* set up Slack: https://teamdm-global.slack.com
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
