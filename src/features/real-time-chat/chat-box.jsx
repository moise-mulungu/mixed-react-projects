export default function ChatBox({ messages }) {
  return (
    <div className="flex-grow overflow-auto p-4 bg-purple-500 text-white">
      {messages.map((message, index) => (
        <div key={index} className="mb-4 border-b-2 border-purple-300 p-2">
          <strong className="font-bold">{message.sender}</strong>: {message.text}{' '}
          <em className="text-sm text-purple-300">{message.timestamp.toLocaleTimeString()}</em>
        </div>
      ))}
    </div>
  )
}

/*
import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import db from './firebase';

export default function ChatBox() {
  const [messages, setMessages] = useState([]);

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
