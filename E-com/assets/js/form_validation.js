function check() {
    var name = document.getElementById('name').value.trim();
    var number = document.getElementById('number').value.trim();
    var email = document.getElementById('email').value.trim();
    var subject = document.getElementById('subject').value.trim();
    var message = document.getElementById('message').value.trim();

    if (name === "" || number === "" || email === "" || subject === "" || message === "") {
        alert("All fields are mandatory");
        return false;
    }

    if (!/^\d{10}$/.test(number)) {
        alert("Please enter a valid 10-digit contact number");
        return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    return true;
}