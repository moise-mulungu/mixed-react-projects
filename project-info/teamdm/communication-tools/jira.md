https://teamdm.atlassian.net/secure/ViewPersonalSettings.jspa

# initial setup
* added on Confluence
* project: "main"
* selected integrations: slack, gitlab


# plan
## active sprint layout:
* columns
  * to do
  * in progress
  * code review & test ("sanity test"?)
  * ready to deploy
  * test ... ("integration test"?)
  * blocked
  * done
* 2-week sprints
* workflow   (todoDM: diagram)
  * lead: create ticket:
    * set the sprint, if will work on it immediately, or leave it in the "backlog"
  * lead: assign ticket to dev: 
    * set to the current the sprint
  * dev: to do -> in progress
    * dev starts working on the ticket
    * dev codes, tests locally in the browser
    * create a MR in gitlab
      * MR name: "jiraTicket - short description of the ticket"
      * MR description: provide URL to the Jira Ticket
      * ticket: leave instructions on how to test in browser ("blast radius")
  * dev: in progress -> code review & test 
    * ephemeral is built based on the MR (domain: jiraTicketNumber-test.domainName.com)
    * dev assigns the ticket to lead, then dev pings lead on slack (todo: Jira-Slack auto notifications)
    * lead: code review & test
      * code review: todoDM: detail
      * test in browser using the ephemeral domain
      * if passes: move to "test"
      * if fails: add notes to the MR; move ticket to "to do"
  * code review & test -> test
    * integration? test in browser - thorough test, making sure code integrates with the other tickets
  * todoDM: finish this

## what's missing from the work configuration
* can't see who did the work on the card that you move around in the 'kanban' area
* notification of change: email and slack
* 


## ??? hourly notes? DM will try it at work ... I think it will help me a lot, but I want to see how tedious it gets