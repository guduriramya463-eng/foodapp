import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Get logged-in user
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) setUser(currentUser);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="home-container">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo" onClick={() => navigate("/")}>
          Grand Flavours 🍽️
        </div>

        <div className="nav-buttons">
          {!user && (
            <>
             <button onClick={() => navigate("/register")}>Register</button>
              <button onClick={() => navigate("/login")}>Login</button>
             
            </>
          )}
          <button onClick={() => navigate("/Contact")}>Contact Us</button>
          <button onClick={() => navigate("/about")}>About Us</button>
          {user && (
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="overlay">
          <h2>Welcome to Grand Flavours 🍽️</h2>

          <p className="tagline">Serving happiness, one plate at a time.</p>

          <div className="description">
            <p>
              At Grand Flavours, every dish is crafted with passion, fresh ingredients,
              and a touch of perfection.
            </p>
            <p>
              Fresh ingredients, authentic recipes, and unforgettable taste —
              that's the Grand Flavours promise.
            </p>
          </div>

          <div className="hero-buttons">
            <div className="btn-row">
              <button onClick={() => navigate("/veg")} className="menu-btn">
                Our Menu
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;