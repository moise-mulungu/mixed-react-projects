import React from 'react'
import UseOnlineStatus from './use-online-status'

function SaveButton() {
  const isOnline = UseOnlineStatus()

  function handleSaveClick() {
    console.log('✅ Progress saved')
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  )
}

export default SaveButton