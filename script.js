function login() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Log data to console
  console.log('Email:', email);
  console.log('Password:', password);

  // Send data to local API (replace with your actual API endpoint)
  var apiEndpoint = 'http://localhost:your-port/your-api-endpoint';
  fetch(apiEndpoint, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          email: email,
          password: password
      })
  })
  .then(response => response.json())
  .then(data => console.log('API Response:', data))
  .catch(error => console.error('Error:', error));
}