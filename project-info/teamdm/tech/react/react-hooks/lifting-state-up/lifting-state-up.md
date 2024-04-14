<!-- src: https://react.dev/learn/sharing-state-between-components -->
# steps to take for lifting state up

## Identify the shared state: 
Determine which component(s) need access to the state that needs to be lifted up. Look for components that are siblings or have a parent-child relationship.

## Define the state in a common parent component: 
Create a state variable in a common parent component that will hold the shared state. This can be done using the useState hook or by declaring a state object in a class component's constructor.

## Pass the state as props: 
Pass the state variable as a prop to the child component(s) that need access to it. This can be done by including the state variable in the props object when rendering the child component(s).

## Update the state via callbacks: 
To update the shared state, pass down a callback function as a prop to the child component(s). This callback function should be responsible for updating the state in the parent component. When the child component needs to update the state, it can invoke this callback function, passing the updated value as an argument.