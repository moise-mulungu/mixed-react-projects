DM: todoMM: this is my official UX review, implement each or let's discuss if you think otherwise:
* if I send or ctrl-Enter with empty message, it puts a blank message. Same with a few space characters. So, grab the message, call .trim() then see if its empty, if so don't post it.(MM: done)
* if possible, when I change my username, make the previous messages reflect the new username.(MM: done)
* "typing users" you could indicate as an animated "..." next to the connected user. it would save space on mobile. Also, the user who posted the most recently could be at the top of the connected users list.
* profile popup
  * make username change color (slightly, like very light purple) upon mouseover, or an underline, so that it is clear that username is a clickable thing. See how it works in slack.
	* if click on username in the left column, that should also show the profile, but if I click on your name, I shouldn't be able to update, just view.
  * typically you want 2 things so that users can exit the popup without clicking "update profile" button
    * click anywhere outside the popup, the popup closes
    * an "X" at the top right they can click to close the popup and/or a "Cancel" button
* if I reload, I shouldn't have to login again. (MM: done)
* login: usually when I enter email, when I put cursor into the input field and type first letter, Chrome will show previous emails I've used, but it doesn't work in the login screen. I'm curious why that is the case, as all login forms allow that default Chrome functionality to happen. 
* seems like older messages disappear after a period of time? they should not disappear.
* make the messages column scrollable  so that when lots of messages you can see them all.
  * also, the messages column should always auto-scroll to the bottom so that  users can see the latest messages. 
* users should be able to delete their messages only, so show delete icon next to my message only
  * you can login as a separate user
* btw, I used a fake email in the signup dmdmdm@dmdmdm.com and there wasn't an email sent to verify - that would be a good part of auth.
