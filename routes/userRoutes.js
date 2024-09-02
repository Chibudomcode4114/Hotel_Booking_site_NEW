// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/userController');
// const protect = require('../middleware/authMiddleware')
// const authorize = require('../middleware/roleMiddleware')


// //get all users
// router.get('/', userController.getAllUsers);

// //get a user by ID
// router.get('/:id', userController.getUserById);

// //add a user
// router.post('/', userController.addUser);

// //update a user
// router.patch('/:id', userController.updateUser);

// // delete a user
// router.delete('/:id', userController.deleteUser);

// // get logged in user
// router.get('/profile', protect, (req, res) => {
//     res.send(`Hello ${req.user.name}`);
// });

// module.exports = router