import { Link } from "react-router-dom";

function Navbar() {

    return (

        <div className="navbar">

            <h2>Smart Complaint System</h2>

            <div className="nav-links">

                <Link to="/">
                    Register
                </Link>

                <Link to="/complaints">
                    Complaints
                </Link>

                <Link to="/ai">
                    AI Analysis
                </Link>
                <Link to="/signup">
                        Signup
                </Link>
                <Link to="/login">
                    Login
                </Link>

            </div>

        </div>
    );
}

export default Navbar;