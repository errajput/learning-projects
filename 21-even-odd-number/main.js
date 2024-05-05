const submitevenoddnumber = document.querySelector("#submit");

function findOddEven() {
  console.log("finding even odd number");
  const number = document.getElementById("number").value;
  console.log("44444", typeof number);
  if (number % 2 == 0) {
    document.getElementById("result").innerHTML = "Even";
  } else {
    document.getElementById("result").innerHTML = "Odd";
  }
}
submitevenoddnumber.addEventListener("click", findOddEven);
