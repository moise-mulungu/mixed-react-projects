import { useState, useEffect } from 'react'

export default function UseOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true)
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true)
    }
    function handleOffline() {
      setIsOnline(false)
    }
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])
  return isOnline
}

/* 

(done)DM: put the image in the teamdm section in the react hooks folder. Don't put an image in a directory unless it is used by a file in that directory

DM; put comments in all 3 .js files, explaining how it works and what happens. I can't understand just by looking at the code. I don't see where the function handleOnline is called. 

DM: put all 3 .js files in a separate directory named use-online-status - it is good to keep related files in one place in one directory.


*/
