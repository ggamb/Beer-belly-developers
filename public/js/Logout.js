
 function logout() {
 
  const response =  fetch('/api/user/logout', {
    method: 'POST',
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