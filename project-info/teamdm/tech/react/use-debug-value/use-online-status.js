import { useSyncExternalStore, useDebugValue } from 'react'
// source URL?: https://react.dev/reference/react/useDebugValue

//(done) DM: good, but add some comments to explain what is happening in all 4 files for useDebug and useImperativeHandle

/*
  - useDebugValue is a React hook that allows you to display a label for custom hooks in React DevTools.
  - it takes a value and a formatter function as arguments.
  - the formatter function is called only when React DevTools are open.
  - the formatter function is called with the value as an argument.
  - it does not return anything.

*/
export function useOnlineStatus() {
  const isOnline = useSyncExternalStore(
    subscribe,
    () => navigator.onLine,
    () => true
  )
  useDebugValue(isOnline ? 'Online' : 'Offline')
  return isOnline
}

function subscribe(callback) {
  window.addEventListener('online', callback)
  window.addEventListener('offline', callback)
  return () => {
    window.removeEventListener('online', callback)
    window.removeEventListener('offline', callback)
  }
}
