let username;

function login() {
    username = document.getElementById('username').value;
    if (username) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('chat-screen').style.display = 'flex';
    }
}

function sendMessage() {
    const message = document.getElementById('message').value;
    if (message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = `${username}: ${message}`;
        document.getElementById('messages').appendChild(messageElement);
        document.getElementById('message').value = '';
    }
}
