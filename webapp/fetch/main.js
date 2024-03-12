console.log("Data - Fetch");

const dataElement = document.querySelector(".data");
const getDataElement = document.querySelector(".getData");

function getData() {
  fetch("./data.json")
    .then((res) => res.json())
    .then((result) => {
      console.log("Result ", result);

      dataElement.innerHTML = JSON.stringify(result, 0, 2);
    });
}

getDataElement.addEventListener("click", getData);

// main();
