document.getElementById('health-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data from all fields
    const formData = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        diseases: Array.from(document.getElementById('disease').selectedOptions).map(option => option.value),
        calories: document.getElementById('calories').value,
        alcohol: document.getElementById('alcohol').value,
        exercise: document.getElementById('exercise').value,
        sun_exposure: document.getElementById('sun_exposure').value,
        step_count: document.getElementById('step_count').value,
        caffeine_intake: document.getElementById('caffeine_intake').value,
        screen_time: document.getElementById('screen_time').value,
        hydration: document.getElementById('hydration').value,
        mental_health: document.getElementById('mental_health').value,
        weight: document.getElementById('weight').value,
        height: document.getElementById('height').value,
        diet_preference: document.getElementById('diet_preference').value // Add dietary preference
    };

    // Validation - Check for required fields
    if (!formData.name || !formData.age || !formData.gender || formData.diseases.length === 0 || !formData.calories) {
        alert("Please fill in all the required fields.");
        return;
    }

    // Check if calories input is a valid number
    if (isNaN(formData.calories) || formData.calories <= 0) {
        alert("Please enter a valid calorie requirement.");
        return;
    }

    try {
        const response = await fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (result.success) {
            localStorage.setItem('recipeData', JSON.stringify(result.recipes));
            window.location.href = '/recipes.html'; // Redirect to the recipes page
        } else {
            alert(result.message || "Error fetching recipes.");
        }
    } catch (error) {
        console.error("Error submitting the form:", error);
        alert("An error occurred while submitting the form. Please try again later.");
    }
});
