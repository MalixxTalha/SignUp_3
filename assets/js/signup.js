

// password validation
function submitForm(event) {
    event.preventDefault();
    
    // Clear previous error messages

    document.getElementById('suEmail').style.border = "1px solid #c9c9c9";
    document.getElementById('errorEmail').innerText = '';
    document.getElementById('suPassword').style.border = "1px solid #c9c9c9";

    let isValid = true;
    //password valiadtion
    let pass = document.getElementById('suPassword').value;
    if (!pass.match(/[0-9]/)) isValid = false;
    if (!pass.match(/[A-Z]/)) isValid = false;
    if (!pass.match(/[a-z]/)) isValid = false;
    if (pass.length <= 8) isValid = false;
    if (!pass.match(/[!\@\#\$\%\^\&\*\(\)\_\+\=\[\]\{\}\;\:\'\"\,\<\.\>\/\?]/)) isValid = false;
    if (isValid==false) {
        document.getElementById('suPassword').style.border = "1px solid red";
    }


    // Validate email
    const email = document.getElementById('suEmail').value;
    if (email.trim() === '') {
        document.getElementById('errorEmail').innerText = 'Email is required';
        document.getElementById('suEmail').style.border = "1px solid red";
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('errorEmail').innerText = 'Invalid email format';
        document.getElementById('suEmail').style.border = "1px solid red";
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // Proceed with form submission or further processing
    }
}


// email validation
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

// show password
var hide_show_pass;
function pass(){
   
    if (hide_show_pass===1) {
        document.getElementById('suPassword').type='password';
        document.getElementById('pass-icon').src='./assets/images/icons/pass-hide.png';
        document.getElementById('hide-show').innerText = 'Hide';
        hide_show_pass=0;        
    }
    else{
        document.getElementById('suPassword').type='text';
        document.getElementById('pass-icon').src='./assets/images/icons/pass-show.png';
        document.getElementById('hide-show').innerText = 'Show';
        hide_show_pass=1;   
    }


}



// google recapture customize 
  window.onload = function() {
            const recaptchaFrame = document.querySelector('.g-recaptcha iframe');
            if (recaptchaFrame) {
                recaptchaFrame.style.backgroundColor = 'white';
                recaptchaFrame.style.border = '1px solid black';
                recaptchaFrame.style.borderRadius = '4px'; // Optional: rounded corners
            }
        };