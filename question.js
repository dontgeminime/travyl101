function saveAll() {
  // Display the popup notification
  const popup = document.getElementById("popup");
  popup.classList.add("show");

  // Show the Next button
  const nextButton = document.getElementById("nextButton");
  nextButton.style.display = "block";

  // Hide the popup after a delay
  setTimeout(() => {
    popup.classList.remove("show");
  }, 2000); // Adjust the timeout duration as needed
}

function goToNext() {
  // Implement the functionality for the Next button
  console.log("Going to the next step");
}

function goToNext() {
  // Add any validation logic here if needed (e.g., check if checkboxes are selected)

  // Redirect to dashboard.html
  window.location.href = "dashboard.html";
}
