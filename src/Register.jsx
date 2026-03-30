import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Register() {

  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const submitLogic = (data) => {

    const users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(data);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful");

    // ✅ Redirect to Login Page
    navigate("/Login");

    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitLogic)}>

      <input
        type="text"
        placeholder="Full Name"
        {...register("name", { required: true })}
      />
      <br />

      <input
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
      />
      <br />

      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: true })}
      />
      <br />

      <input
        type="number"
        placeholder="Mobile Number"
        {...register("mobile", { required: true })}
      />
      <br />

      <button type="submit">Register</button>

    </form>
  );
}

export default Register;