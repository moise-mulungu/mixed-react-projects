# workflow
* development branch as we did before, pushing daily
* issues 
  * are created by Duncan, usually when we need current functionality to keep working during a multi-day project, because that functionality is a dependency of other functionality or because we need to push other features or bug fixes to production while the issue work is ongoing.
  * assignee creates new branch for issue work 
    * new branch is based on the development branch: 
      * git checkout origin/dev (ensures it is always the latest)
      * git branch -c newBranchName
  * issue labels: feature, bug
  * branch naming convention: type-issueLabel-short-description 
    * Ex: feature-4-update-mail-api, bug-5-skills-list-alignment
  * assignee creates MR, approver (Duncan for now) reviews and approves
    * code must be production-ready
      * if not, add "DRAFT: " to the beginning of the MR title
        * DM: auto becomes not eligible for merge would be nice ... this may be a paid feature.
  * assignee merges into the development branch
* production
  * assignee opens merge request: development -> main
    * DM: todoDM: look into using a tag to identify the merge
  * approver approves and merges
  * everyone double checks
  * approver releases to production
  * everyone tests in production

# setup notes
* Slack integration is at the project level
* MR approver requires paid GitLab
* 

# research to do
* Vercel, GitLab Pages, or AWS
* GitLab auto devOps: https://gitlab.com/help/topics/autodevops/index.md
* 

