
# common git commands
https://www.vocabularyof.tech/vcs/git/new-git-repo
```git

# update your local representation of what is on the remote
# "git status" will lie to you because it can't know about changes on the remote until you fetch origin
git fetch origin 

# see all branches, including on the remote
git branch --all 

# start a new development branch
git fetch origin
git checkout origin/development # no need to pull local development first
git checkout -b bug/jiraTicketNumber # run this immediately after the previous command

# check which branch you are on; see the status of the branch
# use this each time you start coding
git status

# push your work to the remote
git add --all
git commit -m 'initial commit'
git push

```
```bash
# a very helpful bash alias to see all your branches order by recent use
alias branches='git for-each-ref --sort=committerdate refs/heads/ --format='\''%(committerdate:short) %(refname:short)'\'''
```

# 