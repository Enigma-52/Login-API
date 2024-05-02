const loginForm = document.getElementById('loginForm');
const mainContent = document.getElementById('mainContent');
const logoutBtn = document.getElementById('logoutBtn');

const timeInSeconds = 2 * 60;

function login(username, password) {
  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => {
    if (response.ok) {
      showMainContent();
      startInactivityTimer();
    } else {
      alert('Invalid credentials');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

// Show the main content
function showMainContent() {
  loginForm.style.display = 'none';
  mainContent.style.display = 'block';
}

// User inactivity timer
let inactivityTimer;

// Start the inactivity timer
function startInactivityTimer() {
  clearInactivityTimer();
  inactivityTimer = setTimeout(timeExpired, timeInSeconds * 1000); // 2 minutes

  // Reset the inactivity timer on user interaction
  document.addEventListener('mousemove', resetInactivityTimer);
  document.addEventListener('keydown', resetInactivityTimer);
}

function timeExpired(){
    alert("Session expired due to inactivity, Please Login again.");
    logout();
}

// Clear the inactivity timer
function clearInactivityTimer() {
  clearTimeout(inactivityTimer);
}

// Reset the inactivity timer
function resetInactivityTimer() {
  clearInactivityTimer();
  startInactivityTimer();
}

// logout function
function logout() {
    fetch('/api/logout', {
      method: 'POST'
    })
    .then(response => {
      if (response.ok) {
        mainContent.style.display = 'none';
        loginForm.style.display = 'block';
      } else {
        console.error('Error logging out');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
    
  }

// Login button click event
const loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  login(username, password);
});

logoutBtn.addEventListener('click', logout);