async function loginForm(event) {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();

  const password = document.querySelector("#password").value.trim();

  if (username && password) {
    const response = await fetch("/login", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}



document.querySelector('#login-btn').addEventListener('click', loginForm);
