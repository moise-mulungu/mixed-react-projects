
# moisemulungu.com domain transfer process
https://www.namecheap.com/support/knowledgebase/article.aspx/1187/46/how-can-i-move-a-domain-from-one-namecheap-account-to-another/

## moisemulungu.com initial setup steps
* setup domain -> vercel 
* setup email forwarding
* other? DM will provide screenshot of his namecheap domain setup


# Vercel: deployment and hosting

# moisemulungu.vercel.app initially, later can buy custom domain if needed

- "moisemulungu" will be the "project name" in Vercel
  - https://vercel.com/docs/concepts/projects/domains/working-with-domains

# todo when it's time to publish: GitLab to Vercel

https://vercel.com/docs/concepts/deployments/git/vercel-for-gitlab

# DM: todoMM: practice deploying to Vercel (using GitHub, but it will be very similar via GitLab)

- get a practice repo
  - git clone https://github.com/vercel/next.js
  - cd to examples/api-routes
  - create a new repo on your GitHub
  - initialize git and do the necessary in order to push this new repo to GitHub (done)
- Google: "GitHub to vercel"

  - connect your GitHub repo to Vercel and publish the repo on Vercel(successfully deployed, but I got page not found)

    - ## steps to connect your GitHub repo to vercel

      - go to your vercel dashboard, click on `Add new` button(a drop list will appear)
      - select (project)

    - ## steps to deploy to Vercel

      - select any project you want to deploy by clicking the`import` button.
      - once you select a project,you'll be directed to popup which would give you option to select, but yu can just click the `deploy` button at the bottom.

    howtonextjs: Once connected to your vercel account, go to the link `Deploying a Git repository` and select a GitHub

    - here is the deploy site link: https://vercel-api-routes-829z-git-setup-moise-mulungu.vercel.app/
      (done)DM: this is asking me to login. Please put a public link here DM: bump

- then, learn about nextjs API routes by looking at the code in the repo, keeping in mind the info here: https://nextjs.org/docs/pages/building-your-application/routing/api-routes

MAIN branch URLS:
<!-- MM: After changing the domain name, the first link still works, why? DM: I don't know. This is probably the URL that was assigned automatically before you specifiec the specific domain below -->
https://vercel-api-routes-829z-git-setup-moise-mulungu.vercel.app/
https://moise-practice.vercel.app/

DEVELOPMENT branch URL:
https://moise-new-practice.vercel.app/
DM: rename the subdomain to contain the word development, so that it is clear which is which, using the 
moise-practice-development.vercel.app(done)

DM: go to Slack.com and connect the 2 new GitHub repos to Slack. Maybe you can do it directly in the Slack app, but maybe you'll have to go do slack.com.(done)


# more Github/Vercel practice

1. tech vocab: Google image search on "anatomy of a URL". Pick a good image that shows all the parts of a URL and put that into the repo.
2. Vercel: find out how to change the sub-domain of vercel-api-routes-829z-git-setup-moise-mulungu.vercel.app to be shorter and more readable. For example: moise-practice.vercel.app

document the steps to do this here:
1. create a new branch `development` from main on VSCode (`git checkout -b development`)
2. make some changes and push to GitHub
3. go to your vercel dashboard(login)
4. select one of your deployed projects
5. click on `Domains` button
6. click on `Edit` button (there is a domain field to fill in)
7. click on `Save` button to save your changes.

1. Github/Vercel: create a 'development' branch in your practice repo. Connect it to Vercel to get a subdomain/URL for the development branch. See how Vercel will re-build each time you push.
2. Github/Vercel: using the Github Web UI (not git on command line), merge development branch to main/master branch - this will trigger a Vercel rebuild of your production URL (based on main/master branch)


