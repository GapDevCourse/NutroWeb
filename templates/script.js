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
