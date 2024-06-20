function submitForm() {
    let firstNameInput = document.getElementById("first-name");
    let lastNameInput = document.getElementById("last-name");
    let addressInput = document.getElementById("address");
    let pincodeInput = document.getElementById("pincode");
    let genderInputs = document.getElementsByName("gender");
    let foodChoiceInput = document.getElementById("food-choice");
    let stateInput = document.getElementById("state");
    let countryInput = document.getElementById("country");

    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let address = addressInput.value;
    let pincode = pincodeInput.value;
    let gender = getSelectedRadioValue(genderInputs);
    let foodChoice = foodChoiceInput.value;
    let state = stateInput.value;
    let country = countryInput.value;

    if (firstName && lastName) {
        let table = document.getElementById("dataTable");
        let newRow = table.insertRow(table.rows.length);

        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        let cell4 = newRow.insertCell(3);
        let cell5 = newRow.insertCell(4);
        let cell6 = newRow.insertCell(5);
        let cell7 = newRow.insertCell(6);
        let cell8 = newRow.insertCell(7);

        cell1.innerHTML = firstName;
        cell2.innerHTML = lastName;
        cell3.innerHTML = address;
        cell4.innerHTML = pincode;
        cell5.innerHTML = gender;
        cell6.innerHTML = foodChoice;
        cell7.innerHTML = state;
        cell8.innerHTML = country;

        firstNameInput.value = "";
        lastNameInput.value = "";
        addressInput.value = "";
        pincodeInput.value = "";
        resetRadioButtons(genderInputs);
        foodChoiceInput.value = "";
        stateInput.value = "";
        countryInput.value = "";
    } else {
        alert("Please fill in all required fields...");
    }
}

function getSelectedRadioValue(radioInputs) {
    for (let i = 0; i < radioInputs.length; i++) {
        if (radioInputs[i].checked) {
            return radioInputs[i].value;
        }
    }
    return null; 
}

function resetRadioButtons(radioInputs) {
    for (let i = 0; i < radioInputs.length; i++) {
        radioInputs[i].checked = false;
    }
}