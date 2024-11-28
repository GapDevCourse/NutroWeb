const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

// Initialize the Express app
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/healthRecipes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected successfully!");
}).catch((err) => {
    console.log("MongoDB connection error:", err);
});

// Define schemas
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    diseases: [String], // Array of diseases
    calories: Number, // Daily calorie requirement
    alcohol: String,
    exercise: String,
    sun_exposure: Number, // Sun exposure in minutes per day
    step_count: Number, // Steps count per day
    caffeine_intake: Number, // Cups of caffeine per day
    screen_time: Number, // Screen time in hours per day
    hydration: Number, // Water intake in liters per day
    mental_health: String, // Mental health status
    weight: Number, // Weight in kg
    height: Number, // Height in cm
    diet_preference: String // New field for dietary preference (veg, non-veg, both)
});

const recipeSchema = new mongoose.Schema({
    disease: String,
    recipes: [{
        name: String,
        ingredients: [String],
        calories: Number, // Each recipe has a calorie value
        procedure: [String], // Field for recipe procedure
        diet_preference: String // New field to classify recipe as veg, non-veg, or both
    }]
});

// Define models
const User = mongoose.model('User', userSchema);
const Recipe = mongoose.model('Recipe', recipeSchema);

// API endpoint to save user data and fetch recipes
app.post('/submit', async (req, res) => {
    try {
        const {
            name, age, gender, diseases, calories, alcohol, exercise, sun_exposure,
            step_count, caffeine_intake, screen_time, hydration, mental_health,
            weight, height, diet_preference // Added diet preference
        } = req.body;

        console.log("Received data:", req.body);

        const user = new User({
            name,
            age,
            gender,
            diseases,
            calories,
            alcohol,
            exercise,
            sun_exposure,
            step_count,
            caffeine_intake,
            screen_time,
            hydration,
            mental_health,
            weight,
            height,
            diet_preference // Save dietary preference
        });
        await user.save();
        console.log("User saved successfully!");

        const recipes = [];
        // Loop through each disease to find relevant recipes
        for (const disease of diseases) {
            const recipeData = await Recipe.findOne({ disease });
            if (recipeData) {
                recipeData.recipes.forEach(recipe => {
                    // Check calorie and diet preference
                    if (
                        recipe.calories <= calories &&
                        (diet_preference === 'both' || recipe.diet_preference === diet_preference)
                    ) {
                        recipes.push({
                            name: recipe.name,
                            ingredients: recipe.ingredients,
                            calories: recipe.calories,
                            procedure: recipe.procedure, // Include procedure in response
                            diet_preference: recipe.diet_preference // Include diet preference (veg, non-veg, both)
                        });
                    }
                });
            }
        }

        if (recipes.length > 0) {
            res.json({ success: true, recipes });
        } else {
            res.json({ success: false, message: "No recipes found for the selected conditions and calorie requirement." });
        }
    } catch (error) {
        console.error("Error:", error); // Log the error with a more detailed message
        res.status(500).json({ success: false, error: error.message });
    }
});

// Set up the server to listen on a port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
