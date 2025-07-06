import { useState } from "react";

const MessageInput = ({ userName, sendMessage }) => {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);

  const toBase64 = (file) =>
    new Promise((res, rej) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => res(reader.result);
      reader.onerror = rej;
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text && !file) return;

    const base64 = file ? await toBase64(file) : null;

    const msg = {
      userId: sessionStorage.getItem("chatUserId") || Math.floor(Math.random() * 100000),
      name: userName,
      text,
      file: base64,
      fileName: file?.name || null,
      time: new Date().toLocaleString(),
    };

    sendMessage(msg);
    setText("");
    setFile(null);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        style={{ flex: 1, padding: "10px", borderRadius: "20px", border: "1px solid #ccc" }}
      />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit" style={{
        padding: "10px 20px",
        borderRadius: "25px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none"
      }}>Send</button>
    </form>
  );
};

export default MessageInput;
