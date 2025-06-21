// let register = document.getElementById("register");
let login = document.getElementById("login");
let newUser = JSON.parse(localStorage.getItem("NewUSer")) || [];

function validateData(regex, value, alert) {
  if (regex.test(value)) {
    alert.classList.add("d-none");
    return true;
  } else {
    alert.classList.remove("d-none");
    return false;
  }
}

function isValid() {
  if (
    validateData(/^[\w]{3,10}$/, userName.value, userName, alertName) &&
    validateData(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      email.value,
      email,
      alertEmail
    ) &&
    validateData(/^[\w]{6,15}$/, password.value, password, alertPassword) &&
    validateData(/^01[0125][0-9]{8}$/, phone.value, phone, alertPhone)
  ) {
    return true;
  } else {
    return false;
  }
}

 function register() {
  if (isValid()) {
    let user = {
      name: userName.value,
      email: email.value,
      password: password.value,
      phone: phone.value,
    };
    newUser.push(user);
    localStorage.setItem("NewUser", JSON.stringify(newUser));
    clearData();
    alertRegister.classList.remove("d-none")
  }

  console.log(JSON.parse(localStorage.getItem("NewUser")));
}

function clearData() {
  userName.value = null;
  email.value = null;
  password.value = null;
  phone.value = null;
}

login.addEventListener("click" , function(e){
    e.preventDefault()
    let loginUser = {
        email : loginEmail.value,
        password : loginPassword.value
    }

    console.log(newUser);
    
    
    if ( loginUser.email == newUser.email  && loginUser.password == newUser.password ){   
        console.log('Success');
    }else{
        console.log('valid');
        
    }
})