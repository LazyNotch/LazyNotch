document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission

  // Extract form data
  var formData = new FormData(this);
  var formObject = {};
  formData.forEach(function (value, key) {
    formObject[key] = value;
  });

  // Send form data via email
  fetch('https://api.emailservice.com/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to: 'LNAdmin@lazynotch.com',
      subject: 'New Form Submission',
      body: JSON.stringify(formObject),
    }),
  })
    .then(function (response) {
      if (response.ok) {
        console.log('Form submitted successfully');
        // You can show a success message or perform any other actions here
      } else {
        console.log('Form submission failed');
        // You can show an error message or perform any other actions here
      }
    })
    .catch(function (error) {
      console.log('Form submission failed');
      // You can show an error message or perform any other actions here
    });
});
