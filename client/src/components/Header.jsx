const Header = ({ userName, setUserName, clearChat }) => {
    return (
      <>
        <h1 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold" }}>
          Real-Time Chat 🚀
        </h1>
  
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", margin: "20px 0" }}>
          <button
            onClick={() => {
              const newName = prompt("Enter new name")?.trim();
              if (newName) {
                setUserName(newName);
                sessionStorage.setItem("chatUserName", newName);
              }
            }}
            style={btn}
          >
            🧑 Change User
          </button>
  
          <button onClick={clearChat} style={btn}>
            🗑 Clear Chat
          </button>
        </div>
      </>
    );
  };
  
  const btn = {
    padding: "10px 20px",
    borderRadius: "25px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer"
  };
  
  export default Header;
  