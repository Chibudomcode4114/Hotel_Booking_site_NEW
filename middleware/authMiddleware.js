// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const { routes } = require('../app');

const protect = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Not authenticated' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        if (!req.user) {
            return res.status(401).json({ message: 'User not found' });
        }
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

// const authorize = (...roles) => {
//     return (req, res, next) => {
//         if (!req.user || !roles.includes(req.user.role)) {
//             return res.status(403).json({ message: 'Not authorized' });
//         }
//         next();
//     };
// };

module.exports = protect;
module.exports = routes;