# dom websocket

index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>WebSockets Demo</title>

  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="page-wrapper">
    <h1>WebSockets Demo</h1>

    <div id="status">Connecting...</div>

    <ul id="messages"></ul>

    <form id="message-form" action="#" method="post">
      <textarea id="message" placeholder="Write your message here..." required></textarea>
      <button type="submit">Send Message</button>
      <button type="button" id="close">Close Connection</button>
    </form>
  </div>

  <script src="script.js" ></script>
</body>
</html>
```

style.css

```css
*, *:before, *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

html {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 100%;
  background: #333;
}

#page-wrapper {
  width: 650px;
  background: #FFF;
  padding: 1em;
  margin: 1em auto;
  border-top: 5px solid #69c773;
  box-shadow: 0 2px 10px rgba(0,0,0,0.8);
}

h1 {
	margin-top: 0;
}

#status {
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.open {
  color: green;
}

.closed {
  color: red;
}


ul {
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.95rem;
}

ul li {
  padding: 0.5rem 0.75rem;
  border-bottom: 1px solid #EEE;
}

ul li:first-child {
  border-top: 1px solid #EEE;
}

ul li span {
  display: inline-block;
  width: 90px;
  font-weight: bold;
  color: #999;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.sent {
  background-color: #F7F7F7;
}

.received {}

#message-form {
  margin-top: 1.5rem;
}

textarea {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #D9D9D9;
  border-radius: 3px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);
  min-height: 100px;
  margin-bottom: 1rem;
}

button {
  display: inline-block;
  border-radius: 3px;
  border: none;
  font-size: 0.9rem;
  padding: 0.6rem 1em;
  color: white;
  margin: 0 0.25rem;
  text-align: center;
  background: #BABABA;
  border-bottom: 1px solid #999;
}

button[type="submit"] {
  background: #86b32d;
  border-bottom: 1px solid #5d7d1f;
}

button:hover {
  opacity: 0.75;
  cursor: pointer;
}
```

script.js

```js
window.onload = function() {

  const form = document.getElementById('message-form');
  const messageField = document.getElementById('message');
  const messagesList = document.getElementById('messages');
  const socketStatus = document.getElementById('status');
  const closeBtn = document.getElementById('close');

  form.onsubmit = function (e) {
    e.preventDefault();

    // Retrieve the message from the textarea.
    const message = messageField.value;

    // Send the message through the WebSocket.
    socket.send(message);

    // Add the message to the messages list.
    messagesList.innerHTML += '<li class="sent"><span>Sent:</span>' + message +
                            '</li>';

    // Clear out the message field.
    messageField.value = '';

    return false;
  }

  const socket = new WebSocket('ws://localhost:3000');

  socket.onopen = function (event) {
    socketStatus.innerHTML = 'Connected to:' + event.currentTarget.url;
    socketStatus.className = 'open';
  };

  socket.onerror = function (error) {
    console.log('WebSocket Error: ' + error);
  }

  closeBtn.onclick = function(e) {
    e.preventDefault();
    socket.close();
    return false;
  }
};

```