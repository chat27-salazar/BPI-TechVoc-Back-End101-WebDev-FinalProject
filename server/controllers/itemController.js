const mongoose = require('mongoose');
const Item = require('../../models/item');

mongoose.connect('mongodb://127.0.0.1:27017/inventory-db')
    .then(() => {
        console.log("Connection Open");
    })
    .catch(err => {
        console.log("Error");
        console.log(err);
    });

// List All Items
exports.items = async (req, res) => {
    const items = await Item.find({});
    res.render('index', {items});
};

// Add Item Form
exports.addItemForm = (req, res) => {
    res.render('new-item');
};

// Create Item
exports.createItem = async (req, res) => {
    const {name, category, quantity, price, description} = req.body;
    const item = new Item({name, category, quantity, price, description});
    await item.save();
    res.redirect('/items');
};

// View Specific Item
exports.viewItem = async (req, res) => {
    const {id} = req.params;
    const item = await Item.findById(id);
    res.render('view-item', {item});
};

// Update Item Form
exports.editItemForm = async (req, res) => {
    const {id} = req.params;
    const item = await Item.findById(id);
    res.render('update-item', {item});
};

// Update Item
exports.updateItem = async (req, res) => {
    const {id} = req.params;
    const {name, category, quantity, price, description} = req.body;
    await Item.findByIdAndUpdate(id, {name, category, quantity, price, description});
    res.redirect('/items');
};

// Delete Item
exports.deleteItem = async (req, res) => {
    const {id} = req.params;
    await Item.findByIdAndDelete(id);
    res.redirect('/items');
};
