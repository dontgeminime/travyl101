document.addEventListener("DOMContentLoaded", function () {
  const packages = document.querySelectorAll(".card");
  const days = document.querySelectorAll(".day");
  const creditCardBtn = document.getElementById("creditCardBtn");

  let selectedPackage = null;
  let selectedDate = null;

  // Function to check if both package and date are selected
  function canProceedToPayment() {
    return selectedPackage !== null && selectedDate !== null;
  }

  // Event listener for selecting a package
  packages.forEach((package) => {
    package.addEventListener("click", function () {
      packages.forEach((p) => {
        p.classList.remove("expanded");
        p.querySelector(".package-info").style.display = "none";
      });

      this.classList.add("expanded");
      this.querySelector(".package-info").style.display = "block";
      selectedPackage = this.id;
      checkPaymentButton();
    });
  });

  // Generate calendar for July 2024
  const calendar = document.getElementById("calendar");
  const month = 6; // July (zero-indexed month)
  const year = 2024;

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement("div");
    day.className = "day";
    day.innerText = i;
    day.addEventListener("click", function () {
      days.forEach((d) => d.classList.remove("selected"));
      this.classList.add("selected");
      selectedDate = this.innerText;
      checkPaymentButton();
    });
    calendar.appendChild(day);
  }

  // Function to enable/disable credit card button based on selection
  function checkPaymentButton() {
    if (canProceedToPayment()) {
      creditCardBtn.removeAttribute("disabled");
    } else {
      creditCardBtn.setAttribute("disabled", "true");
    }
  }

  // Event listener for credit card button
  creditCardBtn.addEventListener("click", function () {
    if (!canProceedToPayment()) {
      alert("Please select a package and a date to proceed with payment.");
      return;
    }
    // Redirect to Stripe payment page
    window.location.href = "https://buy.stripe.com/14kfZzclvfoD8O4003";
  });
});
