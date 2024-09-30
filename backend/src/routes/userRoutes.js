const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.delete('/:id', userController.deleteUser);
router.post('/export', userController.exportUsers);
router.put('/:id', userController.updateUserPut);

module.exports = router;