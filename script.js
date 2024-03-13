document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission
    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get form values
      var name = document.querySelector('#contactForm input[type="text"]').value;
      var email = document.querySelector('#contactForm input[type="email"]').value;
      var message = document.querySelector('#contactForm textarea').value;
  
      // Perform form validation
      if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields.');
        return;
      }
  
      // Simulate sending message (replace with actual functionality)
      alert('Message sent successfully!');
      document.getElementById('contactForm').reset(); // Clear form fields
    });
  
    // Handle registration button clicks
    var registerButtons = document.querySelectorAll('.register-button');
    registerButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var service = this.getAttribute('data-service');
        alert('You have successfully registered for ' + service + '. We will contact you shortly.');
      });
    });
  });
  