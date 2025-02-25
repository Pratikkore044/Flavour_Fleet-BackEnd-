const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;


const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");

        const fetched_data = mongoose.connection.db.collection("food_items");
        global.food_items  = await fetched_data.find({}).toArray();

        const foodCategory = mongoose.connection.db.collection("food_category");
        global.food_Category = await foodCategory.find({}).toArray();


    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

module.exports = mongoDB;