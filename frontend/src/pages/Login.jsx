import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post(

                "https://smart-complaint-system-ffih.onrender.com/api/auth/login",

                {
                    email,
                    password
                }
            );

            localStorage.setItem(
                "token",
                res.data.token
            );

            alert("Login Successful");
            if (res.data.role === "admin") {

    navigate("/complaints");

} else {

    navigate("/register-complaint");
}

        } catch (error) {

   console.log(error);

   const errorMessage =

      error.response?.data?.message ||

      "Login Failed";

   alert(errorMessage);

   if (
      errorMessage.includes("signup")
   ) {

      navigate("/signup");
   }
}
    };

    return (

    <div className="form-container">

        <h1>Login</h1>

        <form onSubmit={handleLogin}>

            <input
                type="email"
                placeholder="Enter Email"
                onChange={(e) =>
                    setEmail(e.target.value)
                }
            />

            <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) =>
                    setPassword(e.target.value)
                }
            />

            <button type="submit">
                Login
            </button>

        </form>

    </div>
);
}

export default Login;