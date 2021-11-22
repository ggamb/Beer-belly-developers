//Allows users to login
const loginForm = (event) => {
  event.preventDefault();
  const username = document.querySelector("#username").value.trim();

  const password = document.querySelector("#password").value.trim();

  if (username && password) {
    fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    })
    .then(response => {
      if (response.ok) {
        document.location.replace("/");
      }
    })
    .catch( err => {
      console.log(err);
    })


  }
}

document.querySelector('#login-btn').addEventListener('click', loginForm);
