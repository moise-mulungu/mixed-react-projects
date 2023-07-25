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

      - connect to both your GitHub and Vercel accounts
      - go to your vercel dashboard, click on `Add new` button(a drop list will appear)
      - select (project)

    - ## steps to deploy to Vercel

      - select any project you want to deploy by clicking the`import` button.
      - once you select a project,you'll be directed to popup which would give you option to select, but yu can just click the `deploy` button at the bottom.
      - wait for the deployment for some seconds

    howtonextjs: Once connected to your vercel account, go to the link `Deploying a Git repository` and select a GitHub

    - here is the deploy site link: https://vercel.com/moise-mulungu/vercel-api-routes-829z/rFWW9Mg6dPxpnvVjawM2GuiAguUU

- !!!important: fill in the bullet points above all of the steps you take (i.e., document the process). Also, I want to see some howtonextjs lines among your documented steps (just do howtonextjs for stuff that is new to you, or tricky, or non-intuitive - issues you may ask yourself about later).
- then, learn about nextjs API routes by looking at the code in the repo, keeping in mind the info here: https://nextjs.org/docs/pages/building-your-application/routing/api-routes
