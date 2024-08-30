function getButton(seat) {
    return document.getElementById(seat);
}
console.log(getButton('A1'));
// console.log('A1');


function seatBooking(seat) {
    getButton(seat).classList.add('bg-green-400')
    getButton(seat).classList.add('text-white')
    const totalSeat = getButton('seatLeft').innerText-1
    getButton('seatLeft').innerText = totalSeat
    
}