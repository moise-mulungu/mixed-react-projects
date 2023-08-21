

# next steps
- Duncan
  - help out as needed while Moise sets up the deployment process
  - review top-level jsx/html
    - look for repeated stuff to consolidate (abstract into reusable components)
    - DM: this looks OK for now, so moving it down to the bottom of this section
  - anything to abstract into src/ui (lowest priority)
- Moise
  - publish to Vercel
    - add a 'stage' branch to the repository 
      - you'll have 3 URLS: development, stage, production
        - development and stage will be at an obscure URL so you don't have worries about unwanted visitors, they will be just for us two
        - stage URL is for review just before deploying to production; we can both view it; it will not be changed by other work being done in the development branch
      - deploy process: merge development branch to the stage branch (gitlab-vercel web hook ensures the stage URL will be updated immediately upon merge); review stage URL; merge stage branch to the production branch; review all changes in production
  - look at the entire portfolio, fix little things, make a list of more involved things still to be done
  - 
  - contact form
    - implement production email API and test it with the testing url

