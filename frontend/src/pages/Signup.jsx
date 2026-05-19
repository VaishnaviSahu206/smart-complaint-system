import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {

    const [name, setName] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");
const navigate = useNavigate();
    const handleSignup = async (e) => {

        e.preventDefault();

        try {

            await axios.post(

                "https://smart-complaint-system-ffih.onrender.com/api/auth/signup",

                {
                    name,
                    email,
                    password
                }
            );

            alert("Signup Successful");
            navigate("/");

        } catch (error) {

   console.log(error);

   alert(

      error.response?.data?.message ||

      "Signup Failed"
   );
}
    };

    return (

        <div className="form-container">

            <h1>Signup</h1>

            <form onSubmit={handleSignup}>

                <input
                    type="text"
                    placeholder="Enter Name"
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                />

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

                    Signup

                </button>

            </form>

        </div>
    );
}

export default Signup;