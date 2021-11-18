async function signupForm(event) {
  event.preventDefault();
  console.log('enter signup form')
  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (username && password) {
    const response = await fetch("/Users/", {
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

document.querySelector('#createAccount-btn').addEventListener('submit', signupForm);
