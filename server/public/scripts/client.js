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
}