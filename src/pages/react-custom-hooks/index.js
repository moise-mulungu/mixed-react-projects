/*
React comes with several built-in Hooks like useState, useContext, and useEffect. Sometimes, you’ll wish that there was a Hook for some more specific purpose: for example, to fetch data, to keep track of whether the user is online, or to connect to a chat room. You might not find these Hooks in React, but you can create your own Hooks for your application’s needs. src: https://react.dev/learn/reusing-logic-with-custom-hooks
DM: what's this? Should it be in react vocab? "built-in hooks VS custom hooks"
MM: this note is to illustrate the difference between built-in hooks and custom hooks. I put it here to help me remember the difference. I'll move it to the react vocab page as well.
*/
import React from 'react'

//(in progress) DM: why don't you use the "@" imports work here? You should always use @ imports. ex: import abc from '@/features/path/to/file
// MM: DM: once i add '@' to the import, i am getting the following error: Module not found: Can't resolve. is it configured globally or just for some specific files?

import SaveButton from '../../../src/features/react-custom-hooks/use-online-status/save-button'
import StatusBar from '../../../src/features/react-custom-hooks/use-online-status/status-bar'

export default function App() {
  return (
    <>
      <SaveButton />
      <StatusBar />
    </>
  )
}
