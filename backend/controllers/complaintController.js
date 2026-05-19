const Complaint = require("../models/Complaint");

exports.addComplaint = async (req, res) => {
    try {
        const complaint = new Complaint(req.body);
        await complaint.save();

        res.status(201).json({
            message: "Complaint Added Successfully",
            complaint
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

exports.getComplaints = async (req, res) => {
    try {
        const complaints = await Complaint.find();
        res.json(complaints);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

exports.updateStatus = async (req, res) => {
    try {

        const complaint = await Complaint.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status },
            { new: true }
        );

        res.json(complaint);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

exports.searchByLocation = async (req, res) => {
    try {

        const complaints = await Complaint.find({
            location: req.query.location
        });

        res.json(complaints);

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};
exports.deleteComplaint = async (req, res) => {

    try {

        await Complaint.findByIdAndDelete(req.params.id);

        res.json({
            message: "Complaint Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });
    }
};
exports.filterByCategory = async (req, res) => {

    try {

        const complaints = await Complaint.find({

            category: req.query.category
        });

        res.json(complaints);

    } catch (error) {

        res.status(500).json({

            error: error.message
        });
    }
};