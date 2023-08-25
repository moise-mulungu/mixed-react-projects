/*
React comes with several built-in Hooks like useState, useContext, and useEffect. Sometimes, you’ll wish that there was a Hook for some more specific purpose: for example, to fetch data, to keep track of whether the user is online, or to connect to a chat room. You might not find these Hooks in React, but you can create your own Hooks for your application’s needs. src: https://react.dev/learn/reusing-logic-with-custom-hooks
*/
import React from 'react'
import SaveButton from '../../../project-info/teamdm/tech/react/react-custom-hooks/save-button'
import StatusBar from '../../../project-info/teamdm/tech/react/react-custom-hooks/status-bar'

export default function App() {
  return (
    <>
      <SaveButton />
      <StatusBar />
    </>
  )
}
