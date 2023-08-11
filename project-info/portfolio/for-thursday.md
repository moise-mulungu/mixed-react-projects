
# for Thursday

* keep working on the same 4 tasks - timebox so you spend time on each. (done)
* address every "DM:" in my Wednesday commit with (ok), (done), or (in progress) so that I can check or remove them. Don't let tasks pile up.

1. Debug next-email(almost done)
2. Create a vercel URL for the development branch of vercel-api-routes. Complete already?(done)
3. Publish next-email on vercel, creating URLs for dev and main branches. Document the process in a new file I'll put in the myPortfolio repo. 
   * you don't have to have email working in order to do this. As long as "npm run dev" compiles, you can publish it.
   * document the steps in detail. What you put in github-to-vercel-deployment-setup-documentation is not enough.
4. recursion: see the comments I added to files
 
# next-email debugging
connection timeout - means the the server can't respond due to some error, and the connect exceeds the timeout limit - means there is something wrong with your smtpOptions.
## don't try to get gmail working until you get the tutorial working correctly
* get a mailtrap.io account and make it work. The writer implies that his code works with mailtrap, so get an account and make it work first. do gmail later, if needed.
  * after you get an account update the values in smtpOptions.auth with your credentials and see if it works.
  * best to always do one small step at a time. Gmail integration may be difficult, so be sure the code works first.
* hints
  * make a tech vocab entry for "credentials"
  * read this: https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables
    * based on the screenshot you sent, I"m not sure you understand process.env and the .env.local file.
  * keep trying, you'll get it!!!
```js
// Replace with your SMTP credentials
const smtpOptions = {
  host: process.env.SMTP_HOST || "smtp.mailtrap.io",
  port: parseInt(process.env.SMTP_PORT || "2525"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || "user",
    pass: process.env.SMTP_PASSWORD || "password",
  },
} // https://www.kirandev.com/next-js-react-email-sending
```


here are the steps to start over with git for the next-email repo
# re-create the GitHub repo, there should not be 10000 commits in your local
* in GitHub
  * delete the next-email repository
  * create next-email repo again in GitHub
  * add me as collaborator
* in the send-email repo on your computer
Try putting .react-email into gitiginore
```
git init # this will reset the .git directory
git add --all
git commit -m "first commit"
git branch -M main # rename default branch to 'main'
git remote add origin https://GitHub.com/moise-mulungu/next-email.git
git push -u origin main

```
