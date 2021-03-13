var button = document.querySelector('button'),
    email = document.querySelector('input[type=email]'),
    errorMessage = document.querySelector('#errorMessage'),
    errorIcon = document.querySelector('#errorIcon'),
    mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    button.addEventListener("click", () => {
      if (email != "" && email.value.match(mailformat)) {
        errorMessage.classList.add("opacity-0");
        errorIcon.classList.add("opacity-0");
        errorIcon.classList.remove("-translate-x-3")
      } else {
        errorMessage.classList.remove("opacity-0");
        errorIcon.classList.remove("opacity-0");
        errorIcon.classList.add("-translate-x-3")
      }
    })
    
    eruda.init();