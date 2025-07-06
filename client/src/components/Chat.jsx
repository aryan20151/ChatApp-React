import { useEffect, useState } from "react";
import io from "socket.io-client";
import Header from "./Header";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

const socket = io("http://localhost:5000");

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Prompt once only
    const savedName = sessionStorage.getItem("chatUserName");
    if (!savedName) {
      const name = prompt("Enter your name") || "Anonymous";
      sessionStorage.setItem("chatUserName", name);
      setUserName(name);
    } else {
      setUserName(savedName);
    }

    const savedMessages = JSON.parse(sessionStorage.getItem("chatMessages") || "[]");
    setMessages(savedMessages);

    socket.on("message", (msg) => {
      setMessages((prev) => {
        const updated = [...prev, msg];
        sessionStorage.setItem("chatMessages", JSON.stringify(updated));
        return updated;
      });
    });

    return () => socket.off("message");
  }, []);

  const sendMessage = (msg) => {
    socket.emit("user-message", msg);
  };

  const clearChat = () => {
    sessionStorage.removeItem("chatMessages");
    setMessages([]);
  };

  return (
    <div style={{ background: "#f0f2f5", minHeight: "100vh", padding: "20px" }}>
      {userName && (
        <>
          <Header userName={userName} setUserName={setUserName} clearChat={clearChat} />
          <MessageList messages={messages} userName={userName} />
          <MessageInput userName={userName} sendMessage={sendMessage} />
        </>
      )}
    </div>
  );
};

export default Chat;
