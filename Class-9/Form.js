
function submitForm(event) {

    event.preventDefault();

    let rName = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let date = document.getElementById('date').value;
    let subject = document.getElementById('Course').value;

    let gender = document.querySelector('input[name="gender"]:checked').value;
    let hobby = document.querySelectorAll('input[name="hobby"]:checked');

    let hobbyValue = [];

    hobby.forEach(
        function (hobby) {
            hobbyValue.push(hobby.value);
        }
    );

    // Start Validation
    // name field validation
    if (rName == '') {
        alert("Name can not be emty.");
        return;
    }
    else if (rName.length <= 3) {
        alert("Name must have at least 4 charecter");
        return;
    }
// email field validation
    const regEx= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(regEx.test(email)){

    }
    else{
        alert("Not a valid email address");
        return;
    }
    // End Validation

    let output = "Name: " + rName + "\n";

    output += "Email: " + email + "\n";

    output += "Password: " + password + "\n";

    output += "Gender: " + gender + "\n";

    output += "DOB: " + date + "\n";

    output += "Course: " + subject + "\n";

    output += "Hobby: " + hobbyValue + "\n";



    let newWindow = window.open("", '_blank');
    newWindow.document.write("<pre>" + output + "</pre>");


}

let myForm = document.getElementById('myForm');

myForm.addEventListener('submit', submitForm);
