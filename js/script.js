document.addEventListener("DOMContentLoaded", function () {
  const signupLink = document.querySelector("#signupLink");
  const signupForm = document.querySelector("#signupForm");

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
