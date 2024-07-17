function submitForm(event) {
    event.preventDefault();

    let ID = document.getElementById('ID').value;
    let Name = document.getElementById('Name').value;
    let Email = document.getElementById('Email').value;
    let Round = document.getElementById('Round').value;
    let DOB = document.getElementById('DOB').value;
    let About = document.getElementById('About').value;
    let Gender = document.querySelector('input[name="Gender"]:checked').value;
    let Ecucation = document.querySelectorAll('input[name="Ecucation"]:checked');
    let EcucationValue=[];
    for(let i=0;i<Ecucation.length;i++){
        EcucationValue.push(Ecucation[i].value);
    }

    let output ="ID       :  " + ID + "\n";
    output += "Name     :  " + Name + "\n";
    output += "Email    :  " + Email + "\n";
    output += "Round    :  " + Round + "\n";
    output += "DOB      :  " + DOB + "\n";
    output += "Gender   :  " + Gender + "\n";
    output += "Ecucation:  " + EcucationValue + "\n";
    output += "About    :  " + About + "\n";

    let newWindow = window.open("", ('_blank'));
    newWindow.document.write("<pre>" + output + "</pre>");
}

let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', submitForm);