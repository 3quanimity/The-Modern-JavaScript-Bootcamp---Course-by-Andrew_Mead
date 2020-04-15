const getTip = function(total, tip = 0.2) {
  return `You should tip ${total * tip}`;
};

let tip = getTip(100, 0.3);
console.log(tip);
