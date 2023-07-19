function countdown(number, callback) {
    if (number > 0) {
      document.getElementById("countdown").innerText = number;
      setTimeout(function() {
        countdown(number - 1, callback);
      }, 1000);
    } else {
      callback();
    }
  }
  
  function displayMessage(message) {
    document.getElementById("countdown").innerText = message;
  }
  