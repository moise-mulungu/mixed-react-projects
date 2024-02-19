## definition
react-router-dom is a library in React that allows you to create single-page applications with navigation and routing capabilities. It keeps your UI in sync with the URL.

// DM: Moise, this is so basic that is not helpful. I think you learned "npm install" on your first day at Microverse. If you intended it to be related to the other info in this file, rewrite it accordingly, otherwise delete it. MM: i removed the two unnecessary howtos.

// DM: good
<!-- // 
DM: note: the below is all handled by nextjs, but it is useful to understand this when you see it in articles/tutorials on the Web. 
  MM: it's also useful when working on a React project which doesn't involve NextJS i think. 
	DM: not use nextjs? perish the thought! JK BUT really, nextjs is so superior to CRA, however my last job used CRA to start the app, but it was so modified that it was unrecognizable. Also, even with CRA everyone uses a better package for routing than react-router-dom. but still good to know it. MM: that make sense, NextJS is straightforward and more concise than working with CRA. but as always new libraries are often more simplified than their alternatives. DM: ok, but "predecessor" vocabulary is off - CRA is not a predecessor to nextjs, they are both separate things currently in development. Try picking a better word or change the sentence. 
	MM: I think alternatives seem to be appropriate here, i referred to that by comparing JavasCript, React CRA, and NextJS.
	DM: OK, but remember you dont pick CRA vs NextJS due to the routing, but to a lot of other reasons.
 -->
## components
Here are some of the main components provided by react-router-dom:
1. BrowserRouter: A <BrowserRouter> is used for applications with a dynamic server that knows how to handle any type of URL.
2. Route: This component <Route> is used to define a match between the current URL and the component that should be rendered.
3. Switch: This component <Switch> is used to render only the first Route or Redirect that matches the current location.
4. Link: This component <Link> is used to create links in your application. It's equivalent to using <a> tags in HTML, but it works with the router to navigate between your routes without a page refresh.
5. Redirect: This component <Redirect /> is used to redirect from one route to another.
6. useParams: This is a hook `useParams()` that allows you to access the dynamic parts of the URL, known as parameters.
7. useHistory: This is a hook `useHistory()` that gives you access to the history instance that you may use to navigate.
8. useLocation: This is a hook `useLocation()` that returns the current location object which contains information about the current URL.

DM: howtos go in comments in JS because it would cause errors if not in comments. in MD no need to put in comments.(ok)

//(done) DM: todoMM: this is not useful to you in the future. you already kow how to import. if you want a list of all the items you can import from react-router-dom, then explain that in the howto. 


howtoreact:: react: define a route; 1. Use the Router component to wrap your entire application, 2. Use Switch/Routes and Route components to define your routes. 3. Each Route component should have a path prop, which is the URL path for that route, when the URL matches this path, the route is activated. 4. The element prop is used to define what should be rendered when the route is activated. This should be a React element or component 