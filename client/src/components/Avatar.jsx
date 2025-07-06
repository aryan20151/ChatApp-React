const Avatar = ({ name, isOwn }) => {
    const getInitial = (n) => n?.trim()?.[0]?.toUpperCase() || "U";
  
    return (
      <div style={{
        width: "35px",
        height: "35px",
        backgroundColor: isOwn ? "#28a745" : "#007bff",
        color: "#fff",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold"
      }}>
        {getInitial(name)}
      </div>
    );
  };
  
  export default Avatar;
  