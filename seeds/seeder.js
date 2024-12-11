const mongoose = require('mongoose');
const Item = require('../models/item');

mongoose.connect('mongodb://127.0.0.1:27017/inventory-db')
    .then(() => {
        console.log("Connection Open");
    })
    .catch(err => {
        console.log("Error");
        console.log(err);
    });

const seedDb = async () => {
    await Item.deleteMany({});
    const items = new Item({
        name: 'Sample Item',
        category: 'Electronics',
        quantity: 10,
        price: 150.00,
        description: 'A sample electronic item.'
    });
    await items.save();
};

seedDb().then(() => {
    mongoose.connection.close();
});
