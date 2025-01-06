import React, { useState } from "react";
import { RiAttachment2 } from "react-icons/ri";
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const senderAvatar = "https://via.placeholder.com/40"; // Replace with sender's avatar URL
  const recipientAvatar = "https://via.placeholder.com/40"; // Replace with recipient's avatar URL

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: true }]);
      setNewMessage("");
    }
  };

  const receiveMessage = () => {
    setMessages([...messages, { text: "This is a recipient's reply.", sender: false }]);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-center mb-4 ${
              msg.sender ? "justify-end" : "justify-start"
            }`}
          >
            {!msg.sender && (
              <img
                src={recipientAvatar}
                alt="Recipient"
                className="w-10 h-10 rounded-full mr-2"
              />
            )}
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                msg.sender
                  ? "bg-green-500 text-white"
                  : "bg-gray-300 text-gray-800"
              }`}
            >
              {msg.text}
            </div>
            {msg.sender && (
              <img
                src={senderAvatar}
                alt="Sender"
                className="w-10 h-10 rounded-full ml-2"
              />
            )}
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-300">
        <div className="flex items-center space-x-2 mb-2">
          <RiAttachment2 className="text-xl cursor-pointer text-gray-600" />
        </div>
        <div className="flex items-center">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={sendMessage}
            className="ml-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Send
          </button>
          <button
            onClick={receiveMessage}
            className="ml-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Simulate Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
