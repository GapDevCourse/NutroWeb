# models.py
from pydantic import BaseModel, Field
from typing import List, Optional
from bson import ObjectId

class UserHealthData(BaseModel):
    name: str
    age: int
    gender: str
    bloodType: str
    height: Optional[float]
    weight: Optional[float]
    knownHealthConditions: List[str]
    allergies: List[str]
    currentMedication: List[str]
    exerciseFrequency: str
    dietaryPreferences: str
    smokingHabits: Optional[str]
    alcoholConsumption: Optional[str]
    averageSleepHours: Optional[int]
    stressLevel: Optional[str]
    mentalHealthConcerns: List[str]
    dailyWaterIntake: Optional[int]
    familyHealthHistory: List[str]
    averageScreenTime: Optional[int]
    dailyCaffeineIntake: Optional[str]
    dailySunExposure: Optional[int]
    averageDailySteps: Optional[int]

class Recipe(BaseModel):
    name: str
    ingredients: List[str]
    instructions: str
    suitableForConditions: List[str]
    dietaryPreferences: List[str]






