

function submitForm(event) {
    event.preventDefault();

    let rName = document.getElementById('name').value;
    if (rName == "") {
        alert("Enter ur Full Name");
        return;
    }
    else if (rName.length < 4) {
        alert("Enter the min 4 characters");
        return;
    }



    let email = document.getElementById('email').value;
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (regEx.test(email)) {

    }
    else {
        alert("Enter ur valid email address");
        return;
    }

    let password = document.getElementById('password').value;
    if (password.length < 8 || password.length > 20) {
        alert("Enter min 8 characters");
        return;

    }

    let gender = document.querySelector('input[name="gender"]:checked');
    if (gender == null) {
        alert("Enter ur gender");
        return;

    }
    let hobby = document.querySelectorAll('input[name="hobby"]:checked');
    if (hobby.length == 0) {
        alert("Enter ur hobby");
        return;
    }

    let hobbyValue = [];
    for (let i = 0; i < hobby.length; i++) {
        hobbyValue.push(hobby[i].value);

    }

    let round = document.getElementById('round').value;
    if (round == "Select one") {
        alert("Enter ur round");
        return;
    }

    let dob = document.getElementById('dob').value;
    if (dob == "") {
        alert("Enter ur dob");
        return;
    }
    let address = document.getElementById('address').value;
    if (address == "") {
        alert("Enter ur address");
        return;
    }



    let output = "Name :" + rName + "\n";
    output += "Email :" + email + "\n";
    output += "Password :" + password + "\n";
    output += "Gender :" + gender.value + "\n";
    output += "Hobby :" + hobbyValue + "\n";
    output += "Round :" + round + "\n";
    output += "DOB :" + dob + "\n";
    output += "Address :" + address + "\n";

    let newWindrow = window.open("", ('_blank'));
    newWindrow.document.write("<pre>" + output + "</pre>");


}

let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', submitForm);

