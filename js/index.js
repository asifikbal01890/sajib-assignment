function getButton(seat) {
  return document.getElementById(seat);
}

function seatBooking(seat) {
  const buttonColor = getButton(seat).classList.value;
  const ulList = getButton("upcoming-price");

  if (buttonColor.includes("bg-green-400") === true) {
    alert("All ready Booked");
  } else if (ulList.children.length > 3) {
    alert("You can't booked more then 4 seats");
  } else {
    // access button and add class
    getButton(seat).classList.add("bg-green-400", "text-white");

    // access total seats and decrease
    const totalSeat = getButton("seatLeft").innerText - 1;
    getButton("seatLeft").innerText = totalSeat;

    // access ul list and added dynamic html
    const li = document.createElement("li");
    li.classList.add("flex", "justify-between", "mb-2");
    li.innerHTML = ` <span>${seat}</span>
                        <span>Economy</span>
                        <span>550</span>`;
    ulList.appendChild(li);

    getButton("totalPrice").innerText = 550 * ulList.children.length;
  }
}

function applyCoupon() {
  const inputValue = getButton("coupon-input").value;
  const totalPrice = getButton("totalPrice").innerText;
  if (inputValue === "NEW15") {
    const discountAmount = (parseInt(totalPrice) * 15) / 100;
    const grandTotals = parseInt(totalPrice) - discountAmount;
    getButton("discount").innerText = discountAmount.toFixed();
    getButton("grandTotal").innerText = grandTotals.toFixed();
  }
   if (inputValue === "Couple 20") {
    const discountAmount = (parseInt(totalPrice) * 20) / 100;
    const grandTotals = parseInt(totalPrice) - discountAmount;
    getButton("discount").innerText = discountAmount.toFixed();
    getButton("grandTotal").innerText = grandTotals.toFixed();
  }
  if (totalPrice === '0' && inputValue === "NEW15" && inputValue === "Couple 20") {
    alert("you can't select any seat")
  }
  else{
    alert('invalid coupon')
  }
  getButton("coupon-input").value = ''
}
