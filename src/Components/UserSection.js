import "../css/user-section.css"; // Import your CSS styles for the UsersSection

const UsersSection = () => {
  const users = [
    { id: 1, username: "Luke Dunphy" },
    { id: 2, username: "Katy perry" },
    { id: 3, username: "Shawn Mendes" },
    { id: 4, username: "itsmeRahul" },
  ];

  return (
    <div className="users-section">
      <div className="profile">
        <img src={`/profile.png`} alt="owner" />
        <button>Switch</button>
      </div>
      <h2>Suggested for You</h2>
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user-item">
            <img src={`/images/${user.username}.jpg`} alt={user.username} />
            <span>{user.username}</span>
            <button>Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersSection;
