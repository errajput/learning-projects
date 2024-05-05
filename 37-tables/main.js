// 1- Select Input Box, Button, Output

const table = (num) => {
  const rv = [];
  for (let i = 1; i <= 10; i++) {
    rv.push(num * i);
  }
  return rv;
};

const allTable = (num) => {
  const rv = [
    // [1, 2, 3, 4, 5],
    // [2, 4, 6, 8, 10],
  ];

  for (let i = 1; i <= num; i++) {
    rv.push(table(i));
  }

  return rv;
};

const calculate = () => {
  console.log("Calculating Table");
  const tableArray = table(document.querySelector("#number").value);

  document.querySelector("#result").innerHTML = "";
  tableArray.forEach((v) => {
    // console.log('V ', v);
    document.querySelector("#result").innerHTML += `
        <tr>
            <td>${v}</td>
        </tr>
    `;
  });

  //   document.querySelector('#result').innerHTML = tableArray;
};

const calculateAll = () => {
  console.log("Calculating ALl Table");
  const allTableArray = allTable(document.querySelector("#number").value);
  document.querySelector("#result").innerHTML = "";

  allTableArray.forEach((tableArray) => {
    tableArray.forEach((v) => {
      document.querySelector("#result").innerHTML += `
              <tr>
                  <td>${v}</td>
              </tr>
          `;
    });
  });
};

document.querySelector("#calculate").addEventListener("click", calculate);
document.querySelector("#calculateAll").addEventListener("click", calculateAll);
