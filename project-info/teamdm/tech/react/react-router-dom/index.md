## definition
react-router-dom is a library in React that allows you to create single-page applications with navigation and routing capabilities. It keeps your UI in sync with the URL.

<!-- howtoreact:: react: how to install react-router-dom; npm install react-router-dom -->

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

<!-- howtoreact:: react: how to import react-router-dom components; import { BrowserRouter as Router, Routes, Route, Switch, Link, Redirect, useParams, useHistory, useLocation } from 'react-router-dom'; -->

<!-- howtoreact:: react: define a route; 1. Use the Router component to wrap your entire application, 2. Use Switch/Routes and Route components to define your routes. 3. Each Route component should have a path prop, which is the URL path for that route, when the URL matches this path, the route is activated. 4. The element prop is used to define what should be rendered when the route is activated. This should be a React element or component -->