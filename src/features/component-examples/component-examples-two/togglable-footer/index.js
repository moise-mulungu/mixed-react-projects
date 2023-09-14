import React from 'react'
import Footer from './footer'

function TogglableFooter() {
  const [includeFooter, setIncludeFooter] = React.useState(false)

  return (
    <>
      <h1>Some Application</h1>
      <form className="footer-toggle-wrapper">
        <input
          type="checkbox"
          id="footer-toggle"
          checked={includeFooter}
          onChange={(event) => {
            setIncludeFooter(event.target.checked)
          }}
        />
        <label htmlFor="footer-toggle">Toggle Footer</label>
      </form>
      {includeFooter && <Footer />}
    </>
  )
}

export default TogglableFooter
