# DM: todoMM: this is my official UX review, implement each or let's discuss if you think otherwise:
* DM: write some comments under each suggestion. in the comments discuss your plans to do it, the current status, or discuss your thoughts if you disagree or have another approach.
* DM: the following two todo-MMs are about prioritizing tasks. How it works: an item that has in impact of 3 and effort of 1 should be done sooner than an item that has an impact of 1 and effort of 3.
  * DM: Duncan will give an "impact" number for each item: 1-3, 3 being highest/best/most useful impact
  * DM: Moise will give an "effort" number for each item: 1-3, 3 being highest amount of time/work needed (is it "hard" or a "quickie")
* DM: sort these putting the ones you'll do first at the top. Sort by the impact/effort ratio. If impact is 3 and effort is 1, that goes first, then impact 3, effort 2, ...
bp DM: if I put a new item here, always put the Effort and add any comments, discussion, questions that you may have
  
## Reverse sort the messages so that the newest message is at the top
Impact 3 Cannot see new messages
Effort 2 - this process can be done in the firebase store. i am not sure how difficult it will be, but i think Effort 2 is appropriate.

## bug - upon new signup, the display name is empty, so any messages the user types is not shown in the messages list. Solution: upon signup, automatically populate displayName with username from the signup form
Impact 3 
Effort TBD while we discuss
* MM:j there is something that i don't understand here, username vs displayName, when signing up the form requires email, username/displayName and password. when you mentioned "automatically populate displayName with username from the signup form". i understand that i need to use autofill for displayName on the username field? right? (DM: no, the browser handles autofill, not you). I know you always tell me when communicating to not "make you think", but this one makes me think as well. i am sorry for addressing myself this way to my tech lead (may be it's not appropriate) DM: it is appropriate to bring it up and discuss in detail as you did - all Western leads want communication open, and they will actually penalize you if you DONT bring up when lead makes a mistake/miscalculation. I was asked what I would do in this scenario during an interview once. The correct answer was I would constructive-criticism-like bring up the issue to the lead.
* DM: yeah, my solution may not have made sense. The main problem is that when I signed up, then submitted my first message, there was no display name, it was blank. So, you should signup as a new user then make a post to see if you can reproduce the error, then discuss what you found here. 

MM: this could constitute a separate task as the "typing users" above is complete. i updated the task as well.
## List all the connected users in the main app page and the user who posted the most recently message could be at the top of the connected users list.
Impact 3
Effort 3: after struggling with this task for almost two days, i think it's worth effort 3.

## user profile edit page: if user has previously uploaded a file, show it here (if you haven't already)
Impact 3 - always show the information the user needs (i.e., user can see he/she has already uploaded a photo and which photo)
Effort  2: 
  * MM: as i am still unable to upload the image, it will be hard to estimate the effort, but it will be hard.
  * DM: estimate the effort assuming Effort after uploading the image is complete, as you'll have to do that anyway, even if you didn't add this functionality.
  * MM: i change this to 3 because firebase data storage for retrieval is more complex than expected.
  * DM: I changed it to 2 because you already have the profile image showing on the profile page - this is already done!
  
//(done) DM: todoMM: this should come before Impact 3 Effort 3. Think of it like Impact - Effort. 3 - 3 is 0. 2 - 1 is 1. Sort again based on that. MM: i sorted them out according to the result of subtraction between Impact/Effort. the bigger the result, the first on the list. right?
## don't show the login screen if the app is in the process of validating the user. Is it based on cookies or how does the app know that the user is logged in on a previous day?
Impact 2 - avoid confusion as user may think he/she needs to login. always show the current status if something is happening EX loading... "logging in..."
Effort 1 - this can be done by just adding some lines of code in the function that handles the login process.

## if I mistakenly enter "dmdmdm@dmdmdm" (invalid email) during signup, no error is shown, and it doesnt log me in or take me directly to the app after signup, yet the user was created
Impact 2 - always catch and "surface" all errors to the user. the fact that I can enter an incorrect email and this error is not surfaced to the user indicates that there is an area of code that is not covered by error catching and handling code.
  * note: this kind of thing is why DEVs need testing, to catch unexpected errors like this. I only noticed it because I used an invalid email.
Effort 1: i'll catch the error of invalid email, but for a valid email once you sign up, it directing straight to the app. you can double check! DM: ok that's a temporary workaround, but never make the user do extra work. 
* I'm going to change this to a 1 because it is very simple to validate an form input for a proper email formatting.

## user profile edit page: "Photo URL" - it is a file, no? not a URL? Edit field title to be more accurate.
Impact 2 "don't make the user think"
Effort 1: this is just a text change. "Photo URL" is not clear because user is not uploading a URL, but an image file.

## btw, I used a fake email in the signup dmdmdm@dmdmdm.com and there wasn't an email sent to verify - that would be a good part of auth.
Impact 3 - use industry-standard auth workflow. every authenticated app validates user via email confirmation step
Effort 3 - i would have to go through the firebase documentation for modifying the authentication process.

## profile popup - if click on my username in the left column, that should also show the profile, but if I click on another user's name, I shouldn't be able to update, just view.
Impact 2 - convenient for user. is a way to see profile of other users
Effort 2 - i that's interesting to implement as well. the effort level can vary between 1-2 DM: definitely a 2

## communicate to user somehow what "shortcut/keyboard combinations" are available. EX  Where would you put it in the app UI?
Impact 2 - all functionality must be communicated to the user. No undocumented/unsurfaced/hidden features.
Effort 2 - what type of communication to use for users? do you mean adding text to each feature of the app? Is there any hidden features? The ctrl-Enter feature is "hidden" if you don't explicitly tell the user in the UI.
  
## option to delete account
Impact 2 - option to delete is "de rigueur" for user apps
* changing it to a 2 because I don't think it is that important for a portfolio app.
Effort 2 - i think Effort 2 is appropriate ven though accessing firebase database is a bit tricky.
*(done) DM: todoMM: think about how you would do this and write your approach here. There are various ways. You  don't have to code this item, but think it thru enough to justify an effort of 3. BTW, the items in this file are not requirements, but rather for discussion and prioritizing. We may decide not to do some of them, especially if the impact is low and the effort high.


## hit "Enter" 3 times then click "Send". It correctly posts no message, but the empty lines are still there. Remove all "whitespace" if user submits (via Send or via ctrl-Enter)
Impact 1 - user may come back to the app (without closing the browser tab) and be confused/irritated by extra spaces; don't leave messes around;
Effort 1 - i will have to refactor the code

## seems like older messages disappear after a period of time? they should not disappear.
* let's discuss before assigning Effort/Impact
* MM: when working with messages, i often delete them for testing new implemented features, but for this task i'll have to keep them for verification for one day. the Effort/Impact could be assigned next week. 
  * MM: after double-checking i found that old messages do not disappear, you may check on your side as well. 
    *(done) DM: todoMM: I don't know how to test that specifically. Give me steps to set up the test. Don't make me think too hard : MM: i think this task is about older messages seem to disappear after a period of time. so the only test is to type (a) message(s) on the chatbox and keep that for two or three days on the same account and see if it will disappear. on my side i checked and found that it doesn't disappear. if i had added tests in the code, that could be help, but for now the only one is to wait for a period of time and see if it will disappear.

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
## done - users should be able to delete their messages only, so show delete icon next to my message only
Effort 3 - i worked on this task for almost three hours in aim to figure out what to fix. details are provided in the files
* DM: nice!



## done - user profile, upon change username, if there are no messages yet, the username under Connected Users does not change upon save. However, if there are messages by the user, then username does change in all places.
* to test this, remove all messages for a user and change the user name. Upon save of the new user name, you should see the new user name under Connected Users.
Impact 3 - user must always see the change, otherwise user will waste time wondering why that cant see the change and assume that app is buggy/broken.
Effort 2
* DM: good!

## done - "typing users" you could indicate as an animated "..." next to the connected user. it would save space on mobile. 
WHY saves space (esp in mobile), is a common UI indication of activity
Impact 3 note: assumes that the "typing users" feature itself is important
Effort 2: may be adjusted after the dependent code is written
  * I changed it to 2 because it is a simple UI addition using data that is already available (after you have the list of users who are typing). Simple UI change would be a 1, but maybe a 2 if you need to put typingUsers into global state.
  * MM: i gave this 3 because i have not successfully yet displayed the list of users when someone is connected, the first is to list the users and then to check if the user can see other users.
  * DM: good point, but only show the effort to do the thing. You can list dependencies separately. "displaying the list of connected users" is something you have to do anyway, this is just about adding a "..." after you already have that info in the app.(ok) DM: so, what is the effort? Put something after effort. If you don't know yet, still you should make your best estimate, and you can put "(may be adjusted after the dependent code is written)

## done - login: usually when I enter email, when I put cursor into the input field and type first letter, Chrome will show previous emails I've used, but it doesn't work in the login screen. I'm curious why that is the case, as all login forms allow that default Chrome functionality to happen.
Impact 3 - is common 
Effort 1 - i am not sure how long it may take, but with assumption i think it can't be difficult.

## done - User Profile page: display the users email (not editable, unless you have a feature to update the email on the account)
Impact 3 - always provide user all the information. what if user forgets which email user used to create the account
* DM changed to 3 because it is really important
Effort 1 - for this, i would have to first access firebase data storage and retrieve data from.  
  *(in progress) DM: todoMM: but you already have code to get data from db. This is the most basic thing in a database-backed app, so you'll learn to do it quickly. Changed to 1 because it seems like a copy and paste to fetch from DB in a new location. 
  *(done) DM: see the Zustand package on GitHub for storing global state that can easily be accessed by any component. Make a fake global state variable, such as key: testKey, value: testValue, then access it in any component! You'll see how easy it is to store all user values in one place and access it from anywhere in your component tree.