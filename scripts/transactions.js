function tnxBox(value, title) {
  // create DOM
  const txnDiv = document.createElement("div");
  txnDiv.classList.add(
    "notification",
    "w-[75%]",
    "bg-gray-50",
    "border-[1px]",
    "border-gray-300",
    "rounded-xl",
    "p-6",
    "order-first"
  );
  txnDiv.innerHTML = `
          <p class="text-xl font-bold">
            <span id="txnamount">000</span> Taka was donated in
            <span id="post_name">Demo Testing Life, Bangladesh</span>
          </p>
          <p>
            Date:
            <span id="date" class="pb-2"> day month date year 24h timezone (country)</span>
          </p>
`;

  // CRUD on tnxBox [OK]
  document.getElementById("txnamount").innerText = value;
  document.getElementById("post_name").innerText = title;
  document.getElementById("date").innerText = new Date();
  document.getElementById("historyPage").appendChild(txnDiv);
  document.getElementById("txnamount").setAttribute("id", "");
  document.getElementById("post_name").setAttribute("id", "");
  document.getElementById("date").setAttribute("id", "");
}
