
async function logout() {
 
  const response = await fetch('/logout/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });
  console.log("**logout")
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#logout-btn').addEventListener('click', logout);