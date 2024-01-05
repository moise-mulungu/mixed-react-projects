# DM: todoMM: this is my official UX review, implement each or let's discuss if you think otherwise:
DM: todoMM: write some comments under each suggestion. in the comments discuss your plans to do it, the current status, or discuss your thoughts if you disagree or have another approach.
DM: todoMM: the following two todoMMs are about prioritizing tasks. How it works: an item that has in impact of 3 and effort of 1 should be done sooner than an item that has an impact of 1 and effort of 3.
* DM: todoDM: Duncan will give an "impact" number for each item: 1-3, 3 being highest/best/most useful impact
* DM: todoMM: Moise will give an "effort" number for each item: 1-3, 3 being highest amount of time/work needed (is it "hard" or a "quickie")

## "typing users" you could indicate as an animated "..." next to the connected user. it would save space on mobile. Also, the user who posted the most recently could be at the top of the connected users list.
WHY saves space (esp in mobile), is a common UI indication of activity
Impact 3 note: assumes that the "typing users" feature itself is important

## profile popup - if click on my username in the left column, that should also show the profile, but if I click on another user's name, I shouldn't be able to update, just view.
Impact 2 - convenient for user. is a way to see profile of other users

## login: usually when I enter email, when I put cursor into the input field and type first letter, Chrome will show previous emails I've used, but it doesn't work in the login screen. I'm curious why that is the case, as all login forms allow that default Chrome functionality to happen.
Impact 3 - is common 

## seems like older messages disappear after a period of time? they should not disappear.
* let's discuss before assigning Effort/Impact

## users should be able to delete their messages only, so show delete icon next to my message only

## btw, I used a fake email in the signup dmdmdm@dmdmdm.com and there wasn't an email sent to verify - that would be a good part of auth.
Impact 3 - use industry-standard auth workflow. every authenticated app validates user via email confirmation step

## don't show the login screen if the app is in the process of validating the user. Is it based on cookies or how does the app know that the user is logged in on a previous day?
Impact 2 - avoid confusion as user may think he/she needs to login. always show the current status if something is happening EX loading... "loggin in..."

## user profile edit page: "Photo URL" - it is a file, no? not a URL? Edit field title to be more accurate.
Impact 2 "don't make the user think"

## user profile edit page: if user has previously uploaded a file, show it here (if you haven't already)
Impact 3 - always show the information the user needs (i.e., user can see he/she has already uploaded a photo and which photo)

## hit "Enter" 3 times then click "Send". It correctly posts no message, but the empty lines are still there. Remove all "whitespace" if user submits (via Send or via ctrl-Enter)
Impact 1 - user may come back to the app (without closing the browser tab) and be confused/irritated by extra spaces; don't leave messes around;

## communicate to user somehow what "shortcut/keyboard combinations" are available. EX  Where would you put it in the app UI?
Impact 2 - all functionality must be communicated to the user. No hidden features.

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
