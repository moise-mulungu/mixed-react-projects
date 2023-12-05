
DM: the purpose of all this was to use codesandbox and do all of this work there, but it looks like you did all of this on your local machine? So, you've left me wondering why you didn't follow my instructions below by doing this on codesandbox and providing me a demo URL? I'm sure there is a reason, but you need to communicate it to me. That said, it is useful to have gone through the process of making this new repo work locally, and good job listing all your setup steps. 

DM: so, what was your reason? The idea was to learn how to use codesandbox.io which provides an environment to quickly test some new code outside the project repo AND get an instant sharable link. 
MM: there was a step that i didn't understand "how to import a repository from GitHub on codesanbox". i was mistaken for not asking AI for clarification, i just followed your provided steps below. DM: ok, sometimes my steps may not seem understandable if you read ahead, but if you go through them in order, once you see what is in the browser, you'll see that my steps are enough info based on what you see in the browser. So, even if steps don't seem to make sense, try them one-by-one in order, then you'll be able to figure it out.(ok)

Here is the AI prompt: how to import a repository from github on codesanbox?
AI answer: 

  1. Go to CodeSandbox website: https://codesandbox.io
  2. Click on the "Sign In" button at the top right corner and sign in with your account.
  3. After signing in, click on the "Create Sandbox" button at the bottom right corner.
  4. In the new window that appears, click on the "Import Project" button at the top right corner.
  5. In the "Import from GitHub" section, paste the URL of the GitHub repository you want to import.
  6. Click on the "Import and Fork" button.

1. project(https://github.com/theodorusclarence/ts-nextjs-tailwind-starter) installation:
   1. forked the project
   2. cloned 
   3. installed dependencies; yarn was not install and encountered conflict between yarn and yarnpkg. i ru the following to resolve conflict: 
      sudo apt-get remove yarnpkg
      curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
      echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
      sudo apt-get update
      sudo apt-get install yarn
   this process took over an hour due to the packages volume and internet instability 
   4. the localhost: 3000 run successfully with the NextJS homepage
   5. added "**/*.js", "**/*.jsx" to the include property in tsconfig.json file
   6. changed src/app/pages.tsx file extension to jsx
   7. pushed with a "initial commit" as first commit
   8. created a "three-button-exercise" branch
   9. copilot prompt: "ReactJS, tailwindcss; write a component that displays a button group of 3 buttons that will change the background color of the page to 3 different colors"
   10. add the copilot provided code to the src/app/page.jsx
   11. close and run the server again
   12. commit the change and pushed



# codesandbox.io sandbox for NextJS-tailwind

# WHY

if you get a new UI solution from ChatGPT, you can test it real quickly in a NextJS-tailwind already set up for you.

fast add new items to package.json, saves time because no need to add, install, (them maybe uninstall) in your app repo.

scenario: a feature/component/package called fooBar is not working in your app, and you need to test fooBar in a clean, simple environment that is not affected by the specific config in your nextjs/tailwindcss app.

# setup create a reusable sandbox
* https://codesandbox.io 
  * sign in
  * option: import repository https://github.com/theodorusclarence/ts-nextjs-tailwind-starter (NextJS V13)
    * note: this starter is by a private person, not codesandbox, but it looks well-maintained and I see sensible setup choices.
    * by selecting someone else's repo, you will be forced to "fork" the repo (i.e., create a copy of the repo in your GitHub)
    * DM blocker I experienced: popup RE code completions - no way to get rid of the popup. solution: use a private window (the issue must be one of my Chrome extensions?)
* if necessary, click the dev button in the terminals panel in order to start NextJS    
* you should see the standard NextJS homepage in the browser
* enable JS code/files
  * add `"**/*.js", "**/*.jsx", ` to /tsconfig.json "include" property
  * change src/app/page.tsx to .jsx
    * note: NextJS 13 introduced a (optional) new app directory for routing, so now src/app/page.jsx can be the homepage (equivalent to src/pages/index.jsx)
  * restart dev server
  * you should see the standard NextJS starter homepage again
* commit your changes to the "main" branch
  * create a new terminal in the terminals pane; 
    * run `git status` 
    * run `git branch --all`
      * DM: I got stuck in what looks like a VI editor. I hit "Escape" then "w" to get back to the command prompt
  * commit
    ```
		git add --all
    git commit -m "feat: initial commit"
    git push 
    ```
    * RE "feat:" in the commit message, see https://github.com/conventional-changelog/commitlint/#what-is-commitlint
* important note: you are on the "main" branch. keep this branch free of any testing or exercises. 
  * the "main" branch is your fresh, clean environment for testing
  * create new feature branches for each test, proof-of-concept

# note about https://github.com/theodorusclarence/ts-nextjs-tailwind-starter
* good for both of use to get some exposure to other ways of doing things
  * however, it should function much like our current repo
  * DM: I plan to study this starter to hopefully get some good ideas.
* note: for some reason, there are two "components" directories. Be careful which one you put your components into. (I should probably read the NextJS 13 release notes to understand why, but I suspect it has to do with NextJS 13 implements "react server components")

# test some code
* create a new branch for this exercise
  * `git checkout -b three-buttons-exercise`
* get some code to test
  * example: ask AI (ChatGPT, GitHub Copilot or SiderAI) to write react/tailwindcss code. example prompt: "ReactJS, tailwindcss; write a component that displays a button group of 3 buttons that will change the background color of the containing div to 3 different colors"
* test the code
  * insert the AI-generated js/JSX into pages/index.jsx or create a new component and import it into index.jsx.
  * npm install any packages that you need in the terminal (start a new terminal at the bottom panel)
* see if it works!
  * DM's URL: https://jxf7z4-3000.csb.app/
  * MM's URL: https://codesandbox.io/p/github/moise-mulungu/ts-nextjs-tailwind-starter/main?workspaceId=c977606c-3102-4078-868c-1735ee81ab93
    *(in progress) DM: todoMM: I can't access that URL. please send me the URL like the one I provided above. That URL is visible in your codesandbox workspace just above the pane where you can see your code running. MM: i found something weird with codesandbox, when i imported the link, it was not a sandbox so i wanted to convert it a sandbox. after trying many attempts, i decided to delete and import it again, but this time the url that i wanted to paste was invalid, i don't how could the same url that i imported the first becomes invalid. i don't know if its my connection or something else.  
    *(done) DM: import your new repo into codesandbox.io and send me the demo url. If there is some reason you absolutely cannot use codesandbox.io, then publish this on Vercel, then put your Vercel link into the README.md and push. The idea is to get a URL to share because it is too much trouble for me to clone and run locally (on the job, your manager/teammates will want a link they can click on quickly). 

* commit changes to the branch

# summary
* now you know how to test out a feature/component/config in a fresh, clean nextjs/tw repo






