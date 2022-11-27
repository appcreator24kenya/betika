function showdeposit() {
    var deposit = document.getElementById("deposit-container");
    if (deposit.style.display == "none") {
        deposit.style.display = "flex";
        deposit.style.paddingTop = "0px";
    } else {
        deposit.style.display = "none";
    }
}