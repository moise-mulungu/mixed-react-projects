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

<!-- After changing the domain name, the first link still works, why? -->

https://vercel-api-routes-829z-git-setup-moise-mulungu.vercel.app/

https://moise-practice.vercel.app/

# more Github/Vercel practice

1. tech vocab: Google image search on "anatomy of a URL". Pick a good image that shows all the parts of a URL and put that into the repo.
2. Vercel: find out how to change the sub-domain of vercel-api-routes-829z-git-setup-moise-mulungu.vercel.app to be shorter and more readable. For example: moise-practice.vercel.app

- document the steps to do this here
  - step 1
  - step 2
  - ...

1. Github/Vercel: create a 'development' branch in your practice repo. Connect it to Vercel to get a subdomain/URL for the development branch. See how Vercel will re-build each time you push.
2. Github/Vercel: using the Github Web UI (not git on command line), merge development branch to main/master branch - this will trigger a Vercel rebuild of your production URL (based on main/master branch)

## RE documenting setups/configurations

Search the repo for "SETUP the Ethereal (testing) EMAIL service" and have a look at the detailed list of steps I made. That is an example of how I'd like you to document the things you setup. So, for #2 above, document a list of steps to do it. Document the steps WHILE you are doing them. If you wait until afterward, it will be not good/complete.
