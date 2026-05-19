import { Link } from "react-router-dom";

function Navbar() {

    return (

        <div className="navbar">

            <h1 className="logo">

                Smart Complaint System

            </h1>

            <div className="nav-links">

                <Link to="/register-complaint">

                    Register Complaint

                </Link>

                <Link to="/complaints">

                    Complaints

                </Link>

                <Link to="/signup">

                    Signup

                </Link>

                <Link to="/">

                    Login

                </Link>

            </div>

        </div>
    );
}

export default Navbar;