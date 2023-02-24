
// Extract component
function App() {
  return (
    <ul>
      <li className="contact-card">
        <h2>Sunita Kumar</h2>
        <dl>
          <dt>Job</dt>
          <dd>Electrical Engineer</dd>
          <dt>Email</dt>
          <dd>sunita.kumar@acme.co</dd>
        </dl>
      </li>
      <li className="contact-card">
        <h2>Henderson G. Sterling II</h2>
        <dl>
          <dt>Job</dt>
          <dd>Receptionist</dd>
          <dt>Email</dt>
          <dd>henderson-the-second@acme.co</dd>
        </dl>
      </li>
      <li className="contact-card">
        <h2>Aoi Kobayashi</h2>
        <dl>
          <dt>Job</dt>
          <dd>President</dd>
          <dt>Email</dt>
          <dd>kobayashi.aoi@acme.co</dd>
        </dl>
      </li>
    </ul>
  )
}

export default App

// DM: todoMM: put this example into the new component-examples page
// Solution
function ContactCard({ name, job, email }) {
  return (
    <li className="contact-card">
      <h2>{name}</h2>
      <dl>
        <dt>Job</dt>
        <dd>{job}</dd>
        <dt>Email</dt>
        <dd>{email}</dd>
      </dl>
    </li>
  );
}

function MyApp() {
  return (
    <ul>
      <ContactCard
        name="Sunita Kumar"
        job="Electrical Engineer"
        email="sunita.kumar@acme.co"
      />
      <ContactCard
        name="Henderson G. Sterling II"
        job="Receptionist"
        email="henderson-the-second@acme.co"
      />
      <ContactCard
        name="Aoi Kobayashi"
        job="President"
        email="kobayashi.aoi@acme.co"
      />
    </ul>
  );
}

export default MyApp;


// Creating a “Button” component

import { createRoot } from 'react-dom/client';

const root = createRoot(
  document.querySelector('#root')
);

root.render(
  <div>
    <button
      style={{
        border: '2px solid',
        color: 'red',
        borderColor: 'red',
        background: 'white',
        borderRadius: 4,
        padding: 16,
        margin: 8,
      }}
    >
      Cancel
    </button>
    <button
      style={{
        border: '2px solid',
        color: 'green',
        borderColor: 'green',
        background: 'white',
        borderRadius: 4,
        padding: 16,
        margin: 8,
      }}
    >
      Confirm
    </button>
  </div>
);

// Solution 1

function Button({ color, borderColor, children }) {
  return (
    <button
      style={{
        border: '2px solid',
        color,
        borderColor,
        background: 'white',
        borderRadius: 4,
        padding: 16,
        margin: 8,
      }}
    >
      {children}
    </button>
  );
}

// DM: good job! learning about the 'children' prop!
// Solution 2
function Button({ themeColor, children }) {
  return (
    <button
      style={{
        border: '2px solid',
        color: themeColor,
        borderColor: themeColor,
        background: 'white',
        borderRadius: 4,
        padding: 16,
        margin: 8,
      }}
    >
      {children}
    </button>
  );
}

// Solution 3
// status: 'cancel' | 'confirm'
function Button({ status, children }) {
  let themeColor;

  // DM: todoMM: read about the JS switch statement, and try using it here (another way to avoid 'let', and it will be more readable)
  //             after you do that, put this into src/ui/forms/button.jsx
  if (status === 'cancel') {
    themeColor = 'red'
  } else if (status === 'confirm') {
    themeColor = 'green'
  } else {
    throw new Error('Unrecognized value')
  }

  return (
    <button
      style={{
        border: '2px solid',
        color: themeColor,
        borderColor: themeColor,
        background: 'white',
        borderRadius: 4,
        padding: 16,
        margin: 8,
      }}
    >
      {children}
    </button>
  );
}