export default function ChatBox({ messages }) {
  return (
    <div className="flex-grow overflow-auto p-4 bg-purple-500 text-white">
      {messages.map((message, index) => {
        // dm: where is the property sender in the message object?
        console.log({ message, index })
        return (
          <div
            key={
              // ahem!
              index
            }
            className="mb-4 border-b-2 border-purple-300 p-2"
          >
            {/* <strong className="font-bold">{message.sender}</strong>: {message.text}{' '} */}
            {/* <em className="text-sm text-purple-300">{message.timestamp.toLocaleTimeString()}</em> */}
          </div>
        )
      })}
    </div>
  )
}

/*

DM: THis doesn't help because you're not telling me what was this code for? What did you try? What didn't work? As with my comment in message-input.jsx today, best comment out individual lines (and those lines should have a comment explaining their purpose), otherwise I'm lost.  DM: ok these sound good, but please put them in the code as comments over the code where it happens. Otherwise its too hard for me to follow. You can leave the app in a broken state and then I can help debug, but give me instructions about what is the problem, what you tried, and what I should do to reproduce the bug (ie try to login, try to signup, etc)(ok, it's done!)

import { useEffect, useState } from 'react';
// import the firebase functions; onSnapshot function to get the messages from the database in real-time, query function to order the messages by the time they were created, collection function to get the messages from the database, and orderBy function to order the messages by the time they were created
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import db from './firebase';

export default function ChatBox() {
  // declare the state message so that it can only be accessed here
  const [messages, setMessages] = useState([]);

  // useEffect hook to get the messages from the database and set them to the state
  useEffect(() => {
    const messagesCollection = collection(db, 'messages');
    const q = query(messagesCollection, orderBy('createdAt'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex-grow overflow-auto p-4 bg-purple-500 text-white">
      {messages.map((message, index) => (
        <div key={index} className="mb-4 border-b-2 border-purple-300 p-2">
          <strong className="font-bold">{message.user}</strong>: {message.text}{' '}
          <em className="text-sm text-purple-300">{new Date(message.createdAt).toLocaleTimeString()}</em>
        </div>
      ))}
    </div>
  );
}

*/
