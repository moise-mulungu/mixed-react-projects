
# clone someone else's repo to your repository in github

# steps
* clone the repository: git clone https://github.com/user-name/repo-name.git 
* in the terminal, go to the newly created repo directory: cd repo-name
* remove the .git/ directory: rm -r ./.git
* create a new repository in GitHub
* in the terminal: (still in the new repo root directory)
```sh
git init
git add --all
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/your-user-name/repo-name.git
git push -u origin main
```

# note: you can quickly fork a repository to your github, just to see it work, but the forked repo will contain all the original git history. The above procedure removes and reinitialize the git to empty history