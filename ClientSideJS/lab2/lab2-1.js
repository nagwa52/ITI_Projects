window.onload = function () {
  var Noofvalue,
    i,
    sum = 0,
    Average;
  const array = [];

  console.log("start");
  Noofvalue = prompt("enter the number of values do you want");

  for (i = 0; i < Noofvalue; i++) {
    array[i] = prompt("enter number" + (i + 1));
    sum += parseInt(array[i]);
    Average = sum / Noofvalue;
  }
  alert("Sum is " + sum);
  alert("Average is " + Average);
};
