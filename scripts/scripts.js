console.log("scripts.js added");
// function goBlog() {
//  location.replace = "../blog.html";
//  window.location.href = "../blog.html";
// }
// function goHome() {
//  location.replace = "../index.html";
//  window.location.href = "../index.html";
// }
const donation = document.getElementById("donationPage");
const toggleDonation = document.getElementById("toggleDonation");

const history = document.getElementById("historyPage");
const toggleHistory = document.getElementById("toggleHistory");

// when Donation Button is clicked
toggleDonation.addEventListener("click", function () {
  history.classList.add("hidden");
  donation.classList.remove("hidden");
  // css changes
  toggleDonation.classList.remove("bg-gray-50");
  toggleDonation.classList.add(
    "bg-[#B4F416]",
    "hover:bg-[#B4F416]",
    "pointer-events-none"
  );

  toggleHistory.classList.remove(
    "bg-[#B4F416]",
    "hover:bg-[#B4F416]",
    "pointer-events-none"
  );
  toggleHistory.classList.add("bg-gray-50", "hover:bg-gray-200");
});

// when History Button is clicked
toggleHistory.addEventListener("click", function () {
  history.classList.remove("hidden");
  donation.classList.add("hidden");
  // css changes
  toggleDonation.classList.remove(
    "bg-[#B4F416]",
    "hover:bg-[#B4F416]",
    "pointer-events-none"
  );
  toggleDonation.classList.add("bg-gray-50", "hover:bg-gray-200");

  toggleHistory.classList.remove("bg-gray-50", "hover:bg-gray-200");
  toggleHistory.classList.add(
    "bg-[#B4F416]",
    "hover:bg-[#B4F416]",
    "pointer-events-none"
  );
});

function util(amount, pid, bank_id) {
  let numb = document.getElementById(amount).value;
  let post = document.getElementById(pid).innerText;
  let bank = document.getElementById(bank_id);
  if (checkpoint(numb)) {
    calculate(numb, bank);
    UpdateBalance(numb);
    tnxBox(numb, post);
    popupToast();
  }
}
function popupToast() {
  document.getElementById("toast").classList.remove("hidden");
  document.getElementById("page").style.opacity = "20%";
}
document.getElementById("closeToast").addEventListener("click", function () {
  document.getElementById("toast").classList.add("hidden");
  document.getElementById("page").style.opacity = "100%";
});

function calculate(inputValue, bank) {
  bank.innerText = parseFloat(bank.innerText) + parseFloat(inputValue);
}
function UpdateBalance(change) {
  var wallet = document.getElementById("balance");
  wallet.innerText = parseFloat(wallet.innerText) - parseFloat(change);
}
