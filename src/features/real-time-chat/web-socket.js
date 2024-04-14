/* WebSocket is a computer communications protocol, providing simultaneous two-way communication channels over a single Transmission Control Protocol connection. The WebSocket protocol was standardized by the IETF as RFC 6455 in 2011.
*/

// an example of a web socket connection in React
import React, { useEffect } from 'react';

const WebSocketExample = () => {
  useEffect(() => {
    const socket = new WebSocket('wss://example.com/socket');

    socket.onopen = () => {
      console.log('WebSocket connection opened');
    };

    socket.onmessage = (event) => {
      console.log('Message received:', event.data);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      {/* Your component JSX here */}
    </div>
  );
};

export default WebSocketExample;
