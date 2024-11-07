import os
from pymongo import MongoClient
from dotenv import load_dotenv

# Load environment variables
load_dotenv()
username = os.environ.get("MONGO_USERNAME")
password = os.environ.get("MONGO_PASSWORD")
cluster = os.environ.get("MONGO_CLUSTER")

# MongoDB connection string
connection_string = f"mongodb+srv://{username}:{password}@{cluster}"
client = MongoClient(connection_string)
db = client["nutro_web_db"]

# Class for MongoDB Collection: Users
class UsersCollection:
    def __init__(self):
        self.collection = db["users"]

    def add_user(self, user_data):
        """Add a new user to the collection."""
        return self.collection.insert_one(user_data)

    def get_user(self, user_id):
        """Retrieve a user by their ID."""
        return self.collection.find_one({"_id": user_id})

    def update_user(self, user_id, update_data):
        """Update a user's information."""
        return self.collection.update_one({"_id": user_id}, {"$set": update_data})

    def delete_user(self, user_id):
        """Delete a user from the collection."""
        return self.collection.delete_one({"_id": user_id})

    def list_users(self):
        """List all users in the collection."""
        return list(self.collection.find())

# Class for MongoDB Collection: Recipes
class RecipesCollection:
    def __init__(self):
        self.collection = db["recipes"]

    def add_recipe(self, recipe_data):
        """Add a new recipe to the collection."""
        return self.collection.insert_one(recipe_data)

    def get_recipe(self, recipe_id):
        """Retrieve a recipe by its ID."""
        return self.collection.find_one({"_id": recipe_id})

    def update_recipe(self, recipe_id, update_data):
        """Update a recipe's information."""
        return self.collection.update_one({"_id": recipe_id}, {"$set": update_data})

    def delete_recipe(self, recipe_id):
        """Delete a recipe from the collection."""
        return self.collection.delete_one({"_id": recipe_id})

    def list_recipes(self):
        """List all recipes in the collection."""
        return list(self.collection.find())
