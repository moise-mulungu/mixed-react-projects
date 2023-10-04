import React from 'react'
// you can use any name for a default import (default import is not inside {}, "named imports" are inside {}: import MyDefaultImport, { myNamedImport1, myNamedImport2 } from 'my-module
import ReactJSPopup from 'reactjs-popup'
// import 'reactjs-popup/dist/index.css'

// by changing the name of the default import, I was able to use here 'Popup' which matches your directory name
export default function Popup() {
  return (
    <div>
      <h4>NextJs Popup - Example</h4>
      <ReactJSPopup trigger={<button> Click to open popup </button>}>
        <div>Your Popup</div>
        <button>Click here</button>
      </ReactJSPopup>
    </div>
  )
}
