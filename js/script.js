document.addEventListener("DOMContentLoaded", function () {
  const signupLink = document.getElementById("signupLink");
  const signupForm = document.getElementById("signupForm");

  if (signupLink && signupForm) {
    signupLink.addEventListener("click", function (e) {
        e.preventDefault();
        signupForm.classList.add("glow");
        signupForm.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => signupForm.classList.remove("glow"), 1500);
    });
  }
});

console.log("File linked");
