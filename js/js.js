document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const submitBtn = document.getElementById("submitButton");
  const errorMsg = document.querySelector(".errorMessage");

  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission if validation fails

      let isValid = true;
      const inputs = form.querySelectorAll("input, textarea");

      inputs.forEach(input => {
          if (input.type !== "checkbox" && input.type !== "radio") {
              if (!input.value.trim()) {
                  isValid = false;
              }
          }
      });
  });
});