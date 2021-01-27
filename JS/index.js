const [loginArea, loginButton, transactionArea, depositeBtn, withdrawBtn] = [
  document.querySelector(".welcome-box "),
  document.querySelector(".welcome-box .submit-area .submit"),
  document.querySelector("#transaction-area"),
  document.getElementById("depositeBtn"),
  document.getElementById("withdrawBtn"),
];

loginButton.addEventListener("click", function (e) {
  if (document.querySelector(".welcome-box .submit-area input").value == "") {
    alert("please complete your loign form");
  } else {
    loginArea.style.display = "none";
    transactionArea.style.display = "initial";
  }
});
/* ============== monry update  system event handler =================== */

depositeBtn.addEventListener("click", function (e) {
  updateSpanText("balanceDisplay", "depositeAmount");
  updateSpanText("depositeDisplay", "depositeAmount");
  document.getElementById("depositeAmount").value = "";
});
withdrawBtn.addEventListener("click", function (e) {
  updateSpanText("withDrawDisplay", "withdrawAmount");
  reduceBalance("balanceDisplay","withdrawAmount");
});
 
function reduceBalance(id, valueInId) {
  var takeValue = document.getElementById(valueInId);
  var takeValueNumber = parseFloat(takeValue.value);
  var current = document.getElementById(id).innerText;
  var currentNumber = parseFloat(current);
  var amount = currentNumber + -1 * takeValueNumber;
  document.getElementById(id).innerText = amount;
}

function updateSpanText(id, valueInId) {
  var takeValue = document.getElementById(valueInId);
  var takeValueNumber = parseFloat(takeValue.value);
  var current = document.getElementById(id).innerText;
  var currentNumber = parseFloat(current);
  var amount = currentNumber + takeValueNumber;
  document.getElementById(id).innerText = amount;
}

/*  ======================== Amount System Event Handler end here ===================== */