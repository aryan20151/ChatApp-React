import MessageBubble from "./MessageBubble";
import { useRef, useEffect } from "react";

const MessageList = ({ messages, userName }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div style={{
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "15px",
      height: "60vh",
      overflowY: "auto",
      marginBottom: "20px"
    }}>
      {messages.map((msg, idx) => (
        <MessageBubble key={idx} msg={msg} isOwn={msg.name === userName} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;
