document.addEventListener("DOMContentLoaded", function () {
  const signupLink = document.getElementById("signupLink");
  const signupForm = document.getElementById("signupForm");

  signupLink.addEventListener("click", function () {
      signupForm.classList.add("glow");

      setTimeout(() => {
          signupForm.classList.remove("glow");
      }, 1500);
  });
});