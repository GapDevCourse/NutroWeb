// Array of sample health facts
const healthFacts = [
    "Drinking water before meals can help promote weight loss.",
    "Eating plenty of fruits and vegetables can lower blood pressure.",
    "Regular exercise improves mental health and mood.",
    "Maintaining a balanced diet boosts immunity.",
    "Sleep is crucial for maintaining a healthy weight."
];

// Function to display a random health fact
function displayHealthFact() {
    const randomFact = healthFacts[Math.floor(Math.random() * healthFacts.length)];
    document.getElementById('daily-fact').textContent = randomFact;
}

// Call the function to display a fact when the page loads
window.onload = function() {
    displayHealthFact();
};

// BMI Calculator logic
document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);

    const bmi = (weight / (height * height)).toFixed(2);

    let resultText = `Your BMI is ${bmi}. You are `;
    if (bmi < 18.5) {
        resultText += 'underweight.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultText += 'of normal weight.';
    } else if (bmi >= 25 && bmi < 29.9) {
        resultText += 'overweight.';
    } else {
        resultText += 'obese.';
    }

    document.getElementById('bmi-result').textContent = resultText;
});

// Logout functionality
document.getElementById('logout-btn').addEventListener('click', function(event) {
    event.preventDefault();
    alert('You have been logged out.');
    window.location.href = 'loginPage.html';
});

   /* document.getElementById('healthForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            age: document.getElementById('age').value,
            gender: document.getElementById('gender').value,
            bloodType: document.getElementById('blood-type').value,
            height: document.getElementById('height').value,
            weight: document.getElementById('weight').value,
            conditions: document.getElementById('conditions').value,
            allergies: document.getElementById('allergies').value,
            medications: document.getElementById('medications').value,
            exercise: document.getElementById('exercise').value,
            diet: document.getElementById('diet').value,
            smoking: document.getElementById('smoking').value,
            alcohol: document.getElementById('alcohol').value,
            sleep: document.getElementById('sleep').value,
            stress: document.getElementById('stress').value,
            mentalHealth: document.getElementById('mental-health').value,
            hydration: document.getElementById('hydration').value,
            familyHistory: document.getElementById('family-history').value,
            screenTime: document.getElementById('screen-time').value,
            caffeineIntake: document.getElementById('caffeine-intake').value,
            sunExposure: document.getElementById('sun-exposure').value,
            stepCount: document.getElementById('step-count').value
        };

        console.log('Collected Data:', formData); // For testing purposes
        document.getElementById('submission-status').textContent = "Health information submitted successfully!";

        // Redirect to main.html after submission
        window.location.href = 'main.html';
    });*/


