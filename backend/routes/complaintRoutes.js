const express = require("express");

const router = express.Router();

const {
    addComplaint,
    getComplaints,
    updateStatus,
    searchByLocation,
    deleteComplaint,
    filterByCategory
} = require("../controllers/complaintController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, addComplaint);

router.get("/", getComplaints);

router.put("/:id", updateStatus);

router.get("/search/location", searchByLocation);
router.delete("/:id", deleteComplaint);
router.get(
   "/filter/category",
   filterByCategory
);

module.exports = router;