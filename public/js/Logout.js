//Allows user to logout
const logout = () => {
 
  fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  })
}

document.querySelector('#logout-btn').addEventListener('click', logout);