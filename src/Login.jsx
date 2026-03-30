import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const { register, handleSubmit, reset } = useForm();
  const [currentUser, setCurrentUser] = useState(null);

  // ✅ Check login status on page load
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  // ✅ Login logic
  const submitLogic = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === data.email && u.password === data.password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      setCurrentUser(user);

      toast.success(`Welcome ${user.name} 🎉`, {
        position: "top-right",
      });
    } else {
      toast.error("Invalid Email or Password ❌", {
        position: "top-right",
      });
    }

    reset();
  };

  // ✅ Logout function
  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);

    toast.info("Logged out successfully 👋", {
      position: "top-right",
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <ToastContainer />

      {currentUser ? (
        <>
          <h2>Welcome {currentUser.name} </h2>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <form onSubmit={handleSubmit(submitLogic)}>
          <h2>Login</h2>

          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <br /><br />

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <br /><br />

          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default Login;