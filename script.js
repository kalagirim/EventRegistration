
document.getElementById("myForm").onsubmit = function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (name == "" || email == "" || phone == "") {
        document.getElementById("message").innerHTML =
            "Please fill all fields";
    }
    else if (!/^\d{10}$/.test(phone)) {
        document.getElementById("message").innerHTML =
            "Enter valid 10 digit phone number";
    }
    else {
        document.getElementById("message").innerHTML =
            "Registration Successful!<br>" +
            "Name: " + name + "<br>" +
            "Email: " + email + "<br>" +
            "Phone: " + phone;
    }
};

document.getElementById("myForm").onreset = function() {
    document.getElementById("message").innerHTML = "";
};
