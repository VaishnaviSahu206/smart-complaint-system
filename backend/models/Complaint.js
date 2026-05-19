const mongoose = require("mongoose");

const ComplaintSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required"]
    },

    email: {
        type: String,
        required: [true, "Email is required"],

        match: [
            /^\S+@\S+\.\S+$/,
            "Please enter valid email"
        ]
    },

    title: {
        type: String,
        required: [true, "Title is required"]
    },

    description: {
        type: String,
        required: [true, "Description is required"]
    },

    category: {
        type: String,
        required: [true, "Category is required"]
    },

    location: {
        type: String,
        required: [true, "Location is required"]
    },

    status: {
        type: String,
        default: "Pending"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model(
    "Complaint",
    ComplaintSchema
);