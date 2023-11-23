
# Firebase (FB)

## advice DM got from an experienced FB DEV
(special code by DM (a flag for my knowledge base): ;;;firebase;; packages, security, full-text search ;;;)
### all professional FB (ReactJS) DEVs use this package:
* https://github.com/CSFrequency/react-firebase-hooks/tree/master
  * tutorials may tell you to write code that is duplicated in react-firebase-hooks. this is OK. use that code, so you learn about using FB, but in a subsequent version, replace that code with the hooks in react-firebase-hooks 
### issue: FB does not support full-text search 
* Firebase is super! lack of full-text search is the only bad news
  * FB says, "we don't do full-text search": https://firebase.google.com/docs/firestore/solutions/search
  * note: sooner or later you'll want to offer users full-text search of all messages
* solution: connect data to web-based services like TypeSense, algolia, or the like
  * TypeSense best
    * TypeSense setup: https://typesense.org/docs/guide/firebase-full-text-search.html#step-1-run-typesense
###  issue: article doesn't say how to secure data WRT user auth flow
* RE https://www.freecodecamp.org/news/building-a-real-time-chat-app-with-reactjs-and-firebase/
* note: this issue is RE the FB data setup specifically (not Auth); the article says leave data open to be read by anyone
  * from article: "The  allow read: if true; means that anyone can read your database." no mention of it, add security rules later
* solution: edit sec rules in scripting called common expression language (CEL) (declarative)
  * DM: ! note about this (level of indentation): DM not expert in FB, so these may not be explicit/exact instructions. In any case, this issue is definitely important to be addressed
  * can't config data access security in JS like much of the FB config
  * you need to do it "manually" using CEL
  * optional alternative solution: FB cloud functions
    * FB cloud functions run in admin mode, so just secure the endpoints (todo: how?)
    * do not write data direct to client(todo: clarify "client" is browser or db), have a cloud function that does it
    * then tell CEL all writes are forbidden (so only cloud functions can write)
    * ? this is RE writing data, not reading, so still have to use CEL for securing the reading of data, but if use CFs, do as above
