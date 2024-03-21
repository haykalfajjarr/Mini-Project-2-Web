document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var formData = {
        name: name,
        email: email,
        message: message
    };

    displayAlert(formData);
});

function displayAlert(formData) {
    var message = "Name: " + formData.name + "\nEmail: " + formData.email + "\nMessage: " + formData.message;
    alert(message);
}