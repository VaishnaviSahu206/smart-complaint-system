import { useState } from "react";

import axios from "axios";

function ComplaintForm() {

    const [formData, setFormData] = useState({

        name: "",
        email: "",
        title: "",
        description: "",
        category: "",
        location: ""

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const token =
                localStorage.getItem("token");

            const res = await axios.post(

                "http://localhost:5000/api/complaints",

                formData,

                {
                    headers: {
                        authorization: token
                    }
                }
            );

            alert("Complaint Submitted");

            console.log(res.data);

        } catch (error) {

            console.log(error);

            alert("Error submitting complaint");
        }
    };

    return (

        <div className="form-container">

            <h1>Complaint Registration</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="title"
                    placeholder="Complaint Title"
                    onChange={handleChange}
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    onChange={handleChange}
                />

                <button type="submit">

                    Submit Complaint

                </button>

            </form>

        </div>
    );
}

export default ComplaintForm;