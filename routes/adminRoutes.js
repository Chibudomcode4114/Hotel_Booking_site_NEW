const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const authorize = require('../middleware/authorize'); // Import from the correct file
// Example route that requires admin privileges
router.get('/admin-dashboard', protect, authorize('admin'), (req, res) => {
    res.send('Admin Dashboard');
});

module.exports = router;