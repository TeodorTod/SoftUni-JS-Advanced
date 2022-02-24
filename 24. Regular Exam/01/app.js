function solve() {
 
    let fNameInput = document.getElementById("fname");
    let lNameInput = document.getElementById("lname");
    let emailInput = document.getElementById("email");
    let dateInput = document.getElementById("birth");
    let positionInput = document.getElementById("position");
    let salaryInput = document.getElementById("salary");
    let tBody = document.getElementById("tbody");
 
    let buttonHire = document.getElementById("add-worker");
 
    buttonHire.addEventListener("click", (ev) => {
 
        ev.preventDefault();
 
        if (fNameInput.value !== "" || lNameInput.value !== "" || emailInput.value !== "" ||
            dateInput.value !== "" || positionInput.value !== "" || salaryInput.value !== "") {
                let fName = fNameInput.value;
                let lName = lNameInput.value;
                let email = emailInput.value;
                let date = dateInput.value;
                let position = positionInput.value;
                let salary = salaryInput.value;
         
                salary = Number(salary);
         
         
                let trForTheBody = document.createElement("tr")
         
                //making structur
                let tdFname = document.createElement("td");
                tdFname.textContent = fName;
         
                let tdLname = document.createElement("td");
                tdLname.textContent = lName;
         
                let tdEmail = document.createElement("td");
                tdEmail.textContent = email;
         
                let tdDate = document.createElement("td");
                tdDate.textContent = date;
         
                let tdPosition = document.createElement("td");
                tdPosition.textContent = position;
         
                let tdSalary = document.createElement("td");
                tdSalary.textContent = salary;
         
                //buttonMaking
                let tdForButtons = document.createElement("td");
         
                let buttonFired = document.createElement("button");
                buttonFired.className = "fired";
                buttonFired.textContent = "Fired";
         
                let buttonEdit =  document.createElement("button");
                buttonEdit.className = "edit";
                buttonEdit.textContent = "Edit";

                trForTheBody.appendChild(tdFname);
                trForTheBody.appendChild(tdLname);
                trForTheBody.appendChild(tdEmail);
                trForTheBody.appendChild(tdDate);
                trForTheBody.appendChild(tdPosition);
                trForTheBody.appendChild(tdSalary);
                trForTheBody.appendChild(tdForButtons);
         
                tBody.appendChild(trForTheBody);
         
                buttonEdit.addEventListener("click", (ev) => {
         
                    fNameInput.value = fName;
                    lNameInput.value = lName;
                    emailInput.value = email;
                    dateInput.value = date;
                    positionInput.value = position;
                    salaryInput.value = salary;
         
                    let budget = document.getElementById("sum");
                    let totalBudget = budget.textContent;
                    totalBudget = Number(totalBudget);
         
                    budget.textContent = (totalBudget - salary).toFixed(2);
         
                    ev.currentTarget.parentElement.parentElement.remove(ev)
         
                })
         
                buttonFired.addEventListener("click", (ev) => {
         
                    let budget = document.getElementById("sum");
                    let totalBudget = budget.textContent;
                    totalBudget = Number(totalBudget);
         
                    budget.textContent = (totalBudget - salary).toFixed(2);
         
                    ev.currentTarget.parentElement.parentElement.remove(ev)
         
                })
         
                tdForButtons.appendChild(buttonFired);
                tdForButtons.appendChild(buttonEdit);

         
                
         
                fNameInput.value = "";
                lNameInput.value = "";
                emailInput.value = "";
                dateInput.value = "";
                positionInput.value = "";
                salaryInput.value = "";
         
                let budget = document.getElementById("sum");
                let totalBudget = budget.textContent;
                totalBudget = Number(totalBudget);
         
                budget.textContent = (totalBudget + salary).toFixed(2);
        } 
    
 
    });
 
 
}
solve();