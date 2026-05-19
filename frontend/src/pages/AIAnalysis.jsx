import { useState } from "react";

import axios from "axios";

function AIAnalysis() {

    const [complaint, setComplaint] =
        useState("");

    const [result, setResult] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const handleAnalyze = async () => {

        try {

            setLoading(true);

            const res = await axios.post(

                "https://smart-complaint-system-ffih.onrender.com/api/ai/analyze",

                {
                    complaint
                }
            );

            setResult(res.data.analysis);

            setLoading(false);

        } catch (error) {

            console.log(error);

            setLoading(false);

            alert("AI Analysis Failed");
        }
    };

    return (

        <div className="ai-container">

            <h1>AI Complaint Analyzer</h1>

            <textarea

                rows="10"
                cols="60"

                placeholder="Enter Complaint"

                value={complaint}

                onChange={(e) =>
                    setComplaint(e.target.value)
                }
            />

            <br /><br />

            <button onClick={handleAnalyze}>

                Analyze Complaint

            </button>

            <br /><br />

            {
                loading && <h3>Analyzing...</h3>
            }

            <div className="ai-result">

                {result}

            </div>

        </div>
    );
}

export default AIAnalysis;