document.getElementById('vibrateButton').addEventListener('click', () => {
  // Check if the vibrate method is supported
  if ('vibrate' in navigator) {
    // Vibrate your phone for 200 milliseconds
    navigator.vibrate(200);

    // Send a vibration request to your partner's device
    sendVibrationRequest();
  }
});

function sendVibrationRequest() {
  // Make an AJAX request to your server with the vibration request
  fetch('/vibrate')
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        console.log('Vibration request sent successfully');
      } else {
        console.error('Failed to send vibration request');
      }
    })
    .catch(error => {
      console.error('Error sending vibration request:', error);
    });
}