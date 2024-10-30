// check validation
function checkpoint(val) {
  const amount = parseFloat(val);
  let wallet = parseFloat(document.getElementById("balance").innerText);
  if (isNaN(amount) || amount < 0) {
    alert("wrong NUMBER");
  } else if (amount > wallet) {
    alert("Insufficient balance");
  } else {
    return true;
  }
}
