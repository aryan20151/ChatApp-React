import Avatar from "./Avatar";

const MessageBubble = ({ msg, isOwn }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: isOwn ? "row-reverse" : "row",
        gap: "10px",
        marginBottom: "10px"
      }}
    >
      <Avatar name={msg.name} isOwn={isOwn} />
      <div style={{
        backgroundColor: isOwn ? "#d4edda" : "#e2e3e5",
        borderRadius: "15px",
        padding: "10px",
        maxWidth: "45%",
        wordBreak: "break-word",      
        overflowWrap: "anywhere"      
      }}>
        <strong>{msg.name}:</strong> {msg.text}
        {msg.file && (
          <div style={{ marginTop: "5px" }}>
            {msg.file.startsWith("data:image") ? (
              <img src={msg.file} alt="file" style={{ maxWidth: "100%" }} />
            ) : (
              <a href={msg.file} download={msg.fileName}>{msg.fileName}</a>
            )}
          </div>
        )}
        <div style={{ fontSize: "0.7rem", color: "#666", marginTop: "5px" }}>{msg.time}</div>
      </div>
    </div>
  );
};

export default MessageBubble;
