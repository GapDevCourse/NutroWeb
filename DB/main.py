# main.py
from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from bson import ObjectId
from config import db
from models import UserHealthData, Recipe
import uvicorn

app = FastAPI()

# Route to save user health data
@app.post("/api/user-health")
async def save_user_health_data(data: UserHealthData):
    result = db["users"].insert_one(data.dict())
    return {"message": "User data saved successfully", "id": str(result.inserted_id)}

# Route to fetch recommended recipes
@app.get("/api/recommend-recipes")
async def recommend_recipes(healthConditions: list):
    query = {"suitableForConditions": {"$in": healthConditions}}
    recipes = list(db["recipes"].find(query))
    for recipe in recipes:
        recipe["_id"] = str(recipe["_id"])  # Convert ObjectId to string for JSON
    return recipes


@app.get("/")
async def home():
    return "Hello World"

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
