const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// C.R.U.D. Routes
router.get('/items', itemController.items); // Read all items
router.get('/items/new', itemController.addItemForm); // Add item form
router.post('/items', itemController.createItem); // Create item
router.get('/items/:id', itemController.viewItem); // View specific
router.get('/items/:id/edit', itemController.editItemForm); // Update item form
router.put('/items/:id', itemController.updateItem); // Update item
router.delete('/items/:id', itemController.deleteItem); // Delete item

module.exports = router;
