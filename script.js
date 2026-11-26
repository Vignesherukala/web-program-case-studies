
// Get the enquiry form
const form = document.getElementById("enquiryForm");

// Handle form submission
form.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Get student details
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const department = document.getElementById("department").value;
    const type = document.getElementById("type").value;
    const message = document.getElementById("message").value;

    // Display success message
    alert("Enquiry Submitted Successfully!\n\n" +
          "Student Name: " + name + "\n" +
          "Email: " + email + "\n" +
          "Department: " + department + "\n" +
          "Enquiry Type: " + type + "\n" +
          "Message: " + message);

    // Clear form
    form.reset();

});
