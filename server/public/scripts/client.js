console.log("hi");

let monthlyCosts = 0;
let forms = [];

function completedForms(event) {
    event.preventDefault();

    forms.push({
        firstName: firstName.value,
        lastName: lastName.value,
        idNumber: idNumber.value,
        jobTitle: jobTitle.value,
        annualSalary: annualSalary.value
    });

    console.log(forms);

    let employeeInformation = document.getElementById('employees-information');
    let row = employeeInformation.insertRow(forms.length);

    let row1 = row.insertCell(0);
    let row2 = row.insertCell(1);
    let row3 = row.insertCell(2);
    let row4 = row.insertCell(3);
    let row5 = row.insertCell(4);
    let row6 = row.insertCell(5);

    row1.innerHTML = firstName.value;
    row2.innerHTML = lastName.value;
    row3.innerHTML = idNumber.value;
    row4.innerHTML = jobTitle.value;
    row5.innerHTML = annualSalary.value;
    row6.innerHTML = "delete";
}