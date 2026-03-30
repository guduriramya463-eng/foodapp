import React from 'react'

function Welcome({ user, setPage }) {

  const logout = () => {
    setPage("login");
  };

  return (
    <div style={{ textAlign: "left", marginLeft: "20px" }}>

      <h2>Welcome {user} to Food-Zone</h2>

      <br />

      <button onClick={logout}>Logout</button>

    </div>
  );
}

export default Welcome;