function submitForm(event) {
    event.preventDefault();

    let kName = document.getElementById('name').value;
    if (kName == "") {
        alert("Enter ur full name");
        return;
    }
    else if (kName.length < 4) {
        alert("Enter at least 4 Charecters");

    }

    let email = document.getElementById('email').value;
    const regEx = /^\S+@\S+\.\S+$/;
    if (regEx.test(email)) {

    }
    else {
        alert("Enter the valid email address");
        return;
    }

    let password = document.getElementById('password').value;
    if (password.length < 8 || password.length > 20) {
        alert("Plz at least 8 Charecters");
        return
    }

    let gender = document.querySelector('input[name="gender"]:checked');
    if (gender == null) {
        alert("plz enter ur gender");
        return;
    }

    let hobby = document.querySelectorAll('input[name="hobby"]:checked');
    if (hobby.length == 0) {
        alert("enter ur hobby");
        return;
    }

    let hobbyValue = [];
    for (let i = 0; i < hobby.length; i++) {
        hobbyValue.push(hobby[i].value);

    }

    let round = document.getElementById('round').value;
    if(round=="Select One"){
        alert("plz enter ur round");
        return;
    }

    let dob = document.getElementById('dob').value;
    if(dob==""){
        alert("plz enter ur dob");
        return;
    }
    let address = document.getElementById('address').value;
    if(address==""){
        alert("plz enter ur address");
        return;
    }

    let output="Name    :  " + kName + "\n";
    output += "Email   :  " + email + "\n";
    output += "Password:  " + password + "\n";
    output += "Gender  :  " + gender.value + "\n";
    output += "Hobby   :  " + hobbyValue + "\n";
    output += "Round   :  " + round + "\n";
    output += "DOB     :  " + dob + "\n";
    output += "Address :  " + address + "\n";

    let newWindow = window.open("", ('_blank'));
    newWindow.document.write("<pre>" + output + "</pre>");

}

let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', submitForm);
