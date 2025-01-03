const form = document.getElementById("form") as HTMLFormElement;
const button = document.getElementById("button") as HTMLButtonElement;
const result = document.getElementById("result") as HTMLDivElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  button.disabled = true;
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = "Message sent!";
        result.classList.add("success");
      } else {
        console.log(response);
        result.innerHTML = json.message;
        result.classList.add("failure");
      }
      button.disabled = false;
    })
    .catch((error) => {
      console.log(error);
      button.disabled = false;
      result.innerHTML = "Something went wrong.";
      result.classList.add("failure");
    })
    .then(() => {
      form.reset();
    });
});
