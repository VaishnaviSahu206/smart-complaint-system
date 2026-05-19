import { useEffect, useState } from "react";

import axios from "axios";

function ComplaintList() {

    const [complaints, setComplaints] =
        useState([]);

    const [searchLocation, setSearchLocation] =
        useState("");
        const [category, setCategory] =
    useState("");

    useEffect(() => {

        fetchComplaints();

    }, []);

    const fetchComplaints = async () => {

        const res = await axios.get(

            "http://localhost:5000/api/complaints"
        );

        setComplaints(res.data);
    };

    const searchComplaint = async () => {

        const res = await axios.get(

            `http://localhost:5000/api/complaints/search/location?location=${searchLocation}`
        );

        setComplaints(res.data);
    };

    const updateStatus = async (id) => {

        await axios.put(

            `http://localhost:5000/api/complaints/${id}`,

            {
                status: "Resolved"
            }
        );

        fetchComplaints();
    };
    const filterCategory = async () => {

    const res = await axios.get(

        `http://localhost:5000/api/complaints/filter/category?category=${category}`
    );

    setComplaints(res.data);
};

    return (

    <div className="list-container">

        <h1 className="list-title">
            All Complaints
        </h1>

        <div className="search-box">

            <input
                type="text"
                placeholder="Search by location"
                onChange={(e) =>
                    setSearchLocation(e.target.value)
                }
            />

            <button onClick={searchComplaint}>
                Search
            </button>

        </div>
        <br />

<div className="search-box">

    <input

        type="text"

        placeholder="Filter by category"

        onChange={(e) =>
            setCategory(e.target.value)
        }
    />

    <button onClick={filterCategory}>

        Filter

    </button>

</div>

        {
            complaints.map((item) => (

                <div
                    key={item._id}
                    className="complaint-card"
                >

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                    <p>
                        <strong>Category:</strong>
                        {item.category}
                    </p>

                    <p>
                        <strong>Location:</strong>
                        {item.location}
                    </p>

                    <p className="status">

                        Status:
                        {item.status}

                    </p>

                    <button
                        className="resolve-btn"

                        onClick={() =>
                            updateStatus(item._id)
                        }
                    >
                        Mark Resolved
                    </button>

                </div>
            ))
        }

    </div>
);
}

export default ComplaintList;