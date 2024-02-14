## Promise terminology
DM: good! put into a promises vocabulary file in the same dir structure as the others.
Promises come with some quite specific terminology that it's worth getting clear about.(ok)

First, a promise can be in one of three states:

* pending: the promise has been created, and the asynchronous function it's associated with has not succeeded or failed yet. This is the state your promise is in when it's returned from a call to fetch(), and the request is still being made.
* fulfilled: the asynchronous function has succeeded. When a promise is fulfilled, its then() handler is called.
* rejected: the asynchronous function has failed. When a promise is rejected, its catch() handler is called.
DM: todoMM: what does "resolved" mean, when used with the above 3 terms?