console.log("JS file loaded"); //maam i needed this to check if nag run ba ang js koh uahus

document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const errorFields = ['firstName', 'lastName', 'sex', 'email', 'password', 'supportReason'];
        errorFields.forEach(field => {
            document.getElementById(field + 'Error').textContent = '';
        });
        
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const sexElem = document.querySelector('input[name="sex"]:checked');
        const sex = sexElem ? sexElem.value : '';
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        
        const contactNumber = document.getElementById('contactNumber').value.trim();
        const supportReason = document.getElementById('supportReason').value.trim();
        
        let isValid = true;
        if (!firstName) {
            document.getElementById('firstNameError').textContent = 'required';
            isValid = false;
        }        
        if (!lastName) {
            document.getElementById('lastNameError').textContent = 'required';
            isValid = false;
        }
        if (!sex) {
            document.getElementById('sexError').textContent = 'required';
            isValid = false;
        }
        if (!email) {
            document.getElementById('emailError').textContent = 'required';
            isValid = false;
        }
        if (!password) {
            document.getElementById('passwordError').textContent = 'required';
            isValid = false;
        }
        if (!supportReason) {
            document.getElementById('supportReasonError').textContent = 'required';
            isValid = false;
        }
        if (!isValid) {
            return;
        }
        
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('sex', sex);
        localStorage.setItem('email', email);
        
        localStorage.setItem('password', password);
        localStorage.setItem('contactNumber', contactNumber);
        localStorage.setItem('supportReason', supportReason);
        
        window.location.href = "profile.html";
    });

