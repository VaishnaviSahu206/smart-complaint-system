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

const [analysis, setAnalysis] =
    useState("");

const [loading, setLoading] =
    useState(false);

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value
        });
    };
const handleAIAnalysis = async () => {

    try {

        setLoading(true);

        const res = await axios.post(

            "https://smart-complaint-system-ffih.onrender.com/api/ai/analyze",

            {
                complaint:
                formData.description
            }
        );

        setAnalysis(res.data.analysis);

        setLoading(false);

    } catch (error) {

        console.log(error);

        setLoading(false);

        alert("AI Analysis Failed");
    }
};
    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const token =
                localStorage.getItem("token");
                if (!token) {

   alert("Please login first");

   return;
}

            const res = await axios.post(

                "https://smart-complaint-system-ffih.onrender.com/api/complaints",

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
<button

    type="button"

    onClick={handleAIAnalysis}
>

    Analyze with AI

</button>
{
    loading &&

    <h3>Analyzing...</h3>
}

{
    analysis && (

        <div className="ai-result">

            <h3>AI Analysis</h3>

            <p>{analysis}</p>

        </div>
    )
}
                <button type="submit">

                    Submit Complaint

                </button>

            </form>

        </div>
    );
}

export default ComplaintForm;