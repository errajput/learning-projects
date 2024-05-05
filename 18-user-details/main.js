const userDetailFormElement = document.querySelector("form#userDetailForm");
const submitFormElement = document.querySelector("button#submit");
const userDetailTableElement = document.querySelector("#userDetailTable");

function search() {
  let input = document.getElementById("search").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("search");
}
function addUserDetail(e) {
  e.preventDefault();

  const name = userDetailFormElement.name.value;
  const email = userDetailFormElement.email.value;
  const gender = userDetailFormElement.gender.value;
  const canVote = userDetailFormElement.canVote.checked;
  //   console.log({ name, email, gender, canVote });
  const dataHtml = `
    <tr>
        <td>${name}</td>
        <td>${email}</td>
        <td>${gender}</td>
        <td>${canVote}</td>
        <td><button>Edit</button></td>
        <td><button>Delete</button></td>
    </tr>`;
  //   console.log(dataHtml);

  userDetailTableElement.innerHTML += dataHtml;
}

submitFormElement.addEventListener("click", addUserDetail);
