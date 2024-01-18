# DM: todoMM: this is my official UX review, implement each or let's discuss if you think otherwise:
(done)DM: write some comments under each suggestion. in the comments discuss your plans to do it, the current status, or discuss your thoughts if you disagree or have another approach.(ok)
(ok)DM: the following two todo-MMs are about prioritizing tasks. How it works: an item that has in impact of 3 and effort of 1 should be done sooner than an item that has an impact of 1 and effort of 3.
* DM: todoDM: Duncan will give an "impact" number for each item: 1-3, 3 being highest/best/most useful impact
* (done)DM: : Moise will give an "effort" number for each item: 1-3, 3 being highest amount of time/work needed (is it "hard" or a "quickie")

## "typing users" you could indicate as an animated "..." next to the connected user. it would save space on mobile. Also, the user who posted the most recently could be at the top of the connected users list.
WHY saves space (esp in mobile), is a common UI indication of activity
Impact 3 note: assumes that the "typing users" feature itself is important
Effort 2: may be adjusted after the dependent code is written
  * I changed it to 2 because it is a simple UI addition using data that is already available (after you have the list of users who are typing). Simple UI change would be a 1, but maybe a 2 if you need to put typingUsers into global state.
  (MM: i just delete it)DM: todoMM: what is this line for?
  * MM: i gave this 3 because i have not successfully yet displayed the list of users when someone is connected, the first is to list the users and then to check if the user can see other users.
  * DM: good point, but only show the effort to do the thing. You can list dependencies separately. "displaying the list of connected users" is something you have to do anyway, this is just about adding a "..." after you already have that info in the app.(ok) DM: so, what is the effort? Put something after effort. If you don't know yet, still you should make your best estimate, and you can put "(may be adjusted after the dependent code is written)
  
## profile popup - if click on my username in the left column, that should also show the profile, but if I click on another user's name, I shouldn't be able to update, just view.
Impact 2 - convenient for user. is a way to see profile of other users
Effort 2 - i that's interesting to implement as well. the effort level can vary between 1-2 DM: definitely a 2

## login: usually when I enter email, when I put cursor into the input field and type first letter, Chrome will show previous emails I've used, but it doesn't work in the login screen. I'm curious why that is the case, as all login forms allow that default Chrome functionality to happen.
Impact 3 - is common 
Effort 1 - i am not sure how long it may take, but with assumption i think it can't be difficult.

## seems like older messages disappear after a period of time? they should not disappear.
* let's discuss before assigning Effort/Impact

## btw, I used a fake email in the signup dmdmdm@dmdmdm.com and there wasn't an email sent to verify - that would be a good part of auth.
Impact 3 - use industry-standard auth workflow. every authenticated app validates user via email confirmation step
Effort 3 - i would have to go through the firebase documentation for modifying the authentication process.

## don't show the login screen if the app is in the process of validating the user. Is it based on cookies or how does the app know that the user is logged in on a previous day?
Impact 2 - avoid confusion as user may think he/she needs to login. always show the current status if something is happening EX loading... "logging in..."
Effort 1 - this can be done by just adding some lines of code in the function that handles the login process.

## user profile edit page: if user has previously uploaded a file, show it here (if you haven't already)
Impact 3 - always show the information the user needs (i.e., user can see he/she has already uploaded a photo and which photo)
Effort  2
  * MM: as i am still unable to upload the image, it will be hard to estimate the effort, but it will be hard.
  * DM: estimate the effort assuming Effort after uploading the image is complete, as you'll have to do that anyway, even if you didn't add this functionality.

## hit "Enter" 3 times then click "Send". It correctly posts no message, but the empty lines are still there. Remove all "whitespace" if user submits (via Send or via ctrl-Enter)
Impact 1 - user may come back to the app (without closing the browser tab) and be confused/irritated by extra spaces; don't leave messes around;
Effort 1 - i will have to refactor the code

## communicate to user somehow what "shortcut/keyboard combinations" are available. EX  Where would you put it in the app UI?
Impact 2 - all functionality must be communicated to the user. No undocumented/unsurfaced/hidden features.
Effort 2 - what type of communication to use for users? do you mean adding text to each feature of the app? Is there any hidden features? The ctrl-Enter feature is "hidden" if you don't explicitly tell the user in the UI.

## if I mistakenly enter "dmdmdm@dmdmdm" (invalid email) during signup, no error is shown, and it doesnt log me in or take me directly to the app after signup, yet the user was created
Impact 2 - always catch and "surface" all errors to the user. the fact that I can enter an incorrect email and this error is not surfaced to the user indicates that there is an area of code that is not covered by error catching and handling code.
  * note: this kind of thing is why DEVs need testing, to catch unexpected errors like this. I only noticed it because I used an invalid email.
Effort 2: i'll catch the error of invalid email, but for a valid email once you sign up, it directing straight to the app. you can double check!

## option to delete account
Impact 3 - option to delete is "de rigueur" for user apps
Effort 3

## User Profile page: display the users email (not editable, unless you have a feature to update the email on the account)
Impact 2 - always provide user all the information. what if user forgets which email user used to create the account

## user profile, upon change username, if there are no messages yet, the username under Connected Users does not change upon save. However, if there are messages by the user, then username does change in all places.
* to test this, remove all messages for a user and change the user name. Upon save of the new user name, you should see the new user name under Connected Users.
Impact 3 - user must always see the change, otherwise user will waste time wondering why that cant see the change and assume that app is buggy/broken.
Effort 2

(done)DM: todoMM: put a Effort number for all the items above


# done

## done - if I send or ctrl-Enter with empty message, it puts a blank message. Same with a few space characters. So, grab the message, call .trim() then see if its empty, if so don't post it.

## done - if possible, when I change my username, make the previous messages reflect the new username.

## done - profile popup
  * make username change color (slightly, like very light purple) upon mouseover, or an underline, so that it is clear that username is a clickable thing. See how it works in slack.(MM: done)
	* if click on username in the left column, that should also show the profile, but if I click on your name, I shouldn't be able to update, just view.
  * typically you want 2 things so that users can exit the popup without clicking "update profile" button
    * click anywhere outside the popup, the popup closes
    * an "X" at the top right they can click to close the popup and/or a "Cancel" button (MM: done)

## done - if I reload, I shouldn't have to login again.

## done - make the messages column scrollable  so that when lots of messages you can see them all.
  * also, the messages column should always auto-scroll to the bottom so that  users can see the latest messages. 
## users should be able to delete their messages only, so show delete icon next to my message only
Effort 3 - i worked on this task for almost three hours in aim to figure out what to fix. details are provided in the files

## user profile edit page: "Photo URL" - it is a file, no? not a URL? Edit field title to be more accurate.
Impact 2 "don't make the user think"
Effort 2: uploading file with firebase is more complex than expected, but i think effort 2 is appropriate.
