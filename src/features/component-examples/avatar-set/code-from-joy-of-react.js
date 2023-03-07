// First challenge: Create a component that renders a set of avatars
// App.js
import Avatar from './Avatar'

function App() {
  return (
    <div className="avatar-set">
      <Avatar
        src="https://sandpack-bundler.vercel.app/img/avatars/001.png"
        alt="person with curly hair and a black T-shirt"
      />
      <Avatar
        src="https://sandpack-bundler.vercel.app/img/avatars/002.png"
        alt="person wearing a hijab and glasses"
      />
      <Avatar
        src="https://sandpack-bundler.vercel.app/img/avatars/003.png"
        alt="person with short hair wearing a blue hoodie"
      />
      <Avatar
        src="https://sandpack-bundler.vercel.app/img/avatars/004.png"
        alt="person with a pink mohawk and a raised eyebrow"
      />
    </div>
  )
}

export default App
