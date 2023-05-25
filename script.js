// Function to calculate the area (luas) of a square
function calculateLuas() {
    // Get the input value
    var sisiLuas = parseFloat(document.getElementById("sisi-luas").value);

    // Calculate the area
    var luas = sisiLuas * sisiLuas;

    // Display the result
    document.getElementById("output_luas").textContent = "Luas: " + luas;
}

// Function to calculate the perimeter (keliling) of a square
function calculateKeliling() {
    // Get the input value
    var sisiKeliling = parseFloat(document.getElementById("sisi-keliling").value);

    // Calculate the perimeter
    var keliling = 4 * sisiKeliling;

    // Display the result
    document.getElementById("output_keliling").textContent = "Keliling: " + keliling;
}

// Event listener for luas form submission
document.getElementById("input-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    calculateLuas(); // Call the calculateLuas function
});

// Event listener for keliling form submission
document.getElementById("input-form2").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    calculateKeliling(); // Call the calculateKeliling function
});
