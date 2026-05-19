import { useState } from "react";
import axios from "axios";

function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

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

        } catch (error) {

            console.log(error);

            alert("Login Failed");
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