import React from 'react'
import Popup from 'reactjs-popup'
// import 'reactjs-popup/dist/index.css'

// DM: todoMM: "gif" means an image format. no abbreviations rule
export default function PopupGif() {
  return (
    <div>
      <h4>NextJs Popup - GeeksforGeeks</h4>
      <Popup trigger={<button> Click to open popup </button>}>
        <div>GeeksforGeeks</div>
        <button>Click here</button>
      </Popup>
    </div>
  )
}
