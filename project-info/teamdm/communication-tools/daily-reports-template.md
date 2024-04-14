DM: todoDM: finish up the PTO guidelines

# weekly total [weekly total hours] hrs (Friday only) 
note: weekly total must be 40. Use PTO to make up the difference if your total hours is less than 40 by Friday. 
# PTO [weekly total PTO hours used] hrs  (Friday only) 
* previous PTO hours accrued: [previous hours accrued] hrs
* PTO hours used this week: [used this week] hrs
* PTO hours accrued this week: 3.5 hrs
* current PTO hours accrued: [previous hours accrued - hours used this week + 3.5] hrs

DM: Moise, I'll go over these with you Monday.(i meant, i read it!)??? DM: Right, i get it (I must have thought this was a todoMM, but it was a todoDM ...).


# daily report [total hours today] hrs
note: total hours should add up to 8 usually. If not, then the total of the weekly hours should add up to 40. So, for example, you could work 7 hours on Monday, then 9 hours on Tuesday. 

# PTO [PTO hours used] hrs (if PTO was used this day)
* note: PTO (paid time off AKA vacation + holidays + sick time) hours current balance: estimated 40hrs as of Oct 1
  * PTO accrues at the rate listed in roadmap.md
  * I estimated 40hrs because you haven't been putting 40/week in the hours, and you haven't kept track of PTO since the start of the year. So, let's go with 40hrs 
    * DM: here is where I got the 40 hours accrued prior to Oct 1(ok)
* Note: required days off: (this was the rule at Cisco)
  * 2 work days: Thanksgiving Thu, Fri
  * ? Work days: Christmas holidays Dec 25 - Jan 1
  * be sure you have enough accrued PTO to cover the required days off
  
"MM: forDM: In the new-schedule email, you said There will no longer be a need to write the daily reports or track my hours. will the PTO hours be still effective? if yes, how will i be keeping track of it without tracking my daily hours?
* DM: yeah, no need to track hours or PTO
* MM: ok, got it

## [project/task name] [project/task hours today] hrs

Here, put general high-level info about the work on the project. 
 
Any info/detail related to code should be in comments just above the code in question. 

If you have errors, document the steps you took to debug/investigate the errors 
* what does "blocked" mean?
  * seeing a TypeError or a ReferenceError, or any type of error - this does not, in and of itself, mean "blocked", because the error message gives you clues that you can pursue.
  * getting unexpected/wrong output in the UI is not "blocked" 
  * see the debugging-checklist for steps you can take to debug the error or wrong output 
  * "blocked" means you have tried (and documented what you tried in comments) all the debugging techniques and still could not solve the problem
  * DM: todoDM: move this to the debugging-checklist section on "blocked"

If the type of work you are doing means that I can't see in the code what you did, then put detailed info here that describes what you did and how you spent your time.

## Miscellaneous

Git commit for each project 
* if a task is longer than 2 hours, break it into subtasks
* there should be 3-5 commits each day

"task" definition: a unit of work that 
* is a separate app, (i.e., has it's own src/pages file)
* is a different kind of work (i.e, vocabulary, coding challenges, code examples with howtos, apps)

DM: I'm getting us a little more organized about the hours, similar to the time sheets I have to fill out at work.
DM: todoMM: starting this week, here are 2 additions to the timesheets/daily reports:
1) each task in the daily reports should have its own Git commit, so each time you start working on a new task, commit
2) add up weekly total hours on Fridays (see above)

MM: this is good and it will allow me to time-box my daily tasks. 


