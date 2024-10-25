// function redirect(page) {
//   if (page === "home") {
//     location.replace = "../index.html";
//     window.location.href = "../index.html";
//   } else if (page === "blog") {
//     location.replace = "../blog.html";
//     window.location.href = "../blog.html";
//   }
// }
console.log("scripts.js added");
function redirectBlog() {
  window.location.href = "../blog.html";
}
function redirectHome() {
  window.location.href = "../index.html";
}
const donation = document.getElementById("donationPage");
const toggleDonation = document.getElementById("toggleDonation");

const history = document.getElementById("historyPage");
const toggleHistory = document.getElementById("toggleHistory");

// when Donation Button is clicked
toggleDonation.addEventListener("click", function () {
  history.classList.add("hidden");
  donation.classList.remove("hidden");
  // css changes
  toggleDonation.classList.remove("bg-gray-100");
  toggleDonation.classList.add("bg-[#B4F416]");
  toggleHistory.classList.add("bg-gray-100");
  toggleHistory.classList.remove("bg-[#B4F416]");
});
//   });

// when History Button is clicked
toggleHistory.addEventListener("click", function () {
  history.classList.remove("hidden");
  donation.classList.add("hidden");
  // css changes
  toggleDonation.classList.add("bg-gray-100");
  toggleDonation.classList.remove("bg-[#B4F416]");
  toggleHistory.classList.remove("bg-gray-100");
  toggleHistory.classList.add("bg-[#B4F416]");
});
