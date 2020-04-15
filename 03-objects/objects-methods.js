// A method is an object property who's value is a function!!
let restaurant = {
  name: "ASB",
  guestCapacity: 75,
  guestCount: 0,
  status: true,
  checkAvailability: function(partySize) {
    this.status = partySize <= this.guestCapacity - this.guestCount;
  },
  seatParty: function(newGuests) {
    this.checkAvailability(newGuests);
    if (this.status) {
      this.guestCount += newGuests;
      console.log(`${newGuests} have joined the party`);
    } else {
      console.log("not enough room");
    }
  },
  removeParty: function(leavingGuests) {
    this.guestCount -= leavingGuests;
    console.log(`${leavingGuests} have left`);
  }
};

// let status = restaurant.checkAvailability(7);
// console.log(status);

console.log(restaurant.guestCount);
restaurant.seatParty(74);
console.log(restaurant.guestCount);
restaurant.seatParty(7);
console.log(restaurant.guestCount);
restaurant.removeParty(10);
console.log(restaurant.guestCount);
restaurant.seatParty(7);
console.log(restaurant.guestCount);
restaurant.seatParty(7);
console.log(restaurant.guestCount);
