function hamburg() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(0px)";
}

function cancel() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(-500px)";
}

const texts = [
    "DESIGNER UX/UI",
    "DEVELOPPEUR",
    "DESIGNER-GRAPHIC",
    "WEB-DESIGNER",
    "ILLUSTRATOR"
      
]

let speed = 100;

const textElements = document.querySelector(".typewriter-text")

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if(charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1)
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter,500)
    }
}

window.onload = typeWriter;

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  const nom = form.querySelector("input[name='nom']");
  const email = form.querySelector("input[name='email']");
  const message = form.querySelector("textarea[name='message']");


  [nom, email, message].forEach((field) => {
    field.addEventListener("input", () => validateField(field));
  });


  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const isNomValid = validateField(nom);
    const isEmailValid = validateField(email);
    const isMessageValid = validateField(message);

    if (isNomValid && isEmailValid && isMessageValid) {
      showSuccess(form, "✅ Message envoyé avec succès !");
      form.reset();
    }
  });

 
  function validateField(field) {
    let valid = true;
    const value = field.value.trim();
    removeError(field); 

    if (field.name === "nom") {
      if (value.length < 2) {
        showError(field, "Le nom doit contenir au moins 2 caractères.");
        valid = false;
      }
    }

    if (field.name === "email") {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (value === "") {
        showError(field, "L'adresse e-mail est obligatoire.");
        valid = false;
      } else if (!emailPattern.test(value)) {
        showError(field, "Veuillez entrer une adresse e-mail valide (ex : exemple@gmail.com).");
        valid = false;
      }
    }

    if (field.name === "message") {
      if (value.length < 10) {
        showError(field, "Le message doit contenir au moins 10 caractères.");
        valid = false;
      }
    }

    return valid;
  }

  function showError(field, message) {
    const error = document.createElement("span");
    error.classList.add("error-message");
    error.textContent = message;
    error.style.color = "#ff4c4c";
    error.style.fontSize = "0.85rem";
    error.style.display = "block";
    error.style.marginTop = "5px";
    field.classList.add("error");
    field.parentElement.appendChild(error);
  }

  function removeError(field) {
    const error = field.parentElement.querySelector(".error-message");
    if (error) error.remove();
    field.classList.remove("error");
  }

  function showSuccess(form, message) {
    const success = document.createElement("p");
    success.textContent = message;
    success.style.color = "#00ff6a";
    success.style.fontWeight = "600";
    success.style.marginTop = "15px";
    success.style.textAlign = "center";
    success.classList.add("success-message");

    const oldSuccess = form.querySelector(".success-message");
    if (oldSuccess) oldSuccess.remove();

    form.appendChild(success);
    setTimeout(() => success.remove(), 3000);
  }
});

const scrollBtn = document.getElementById("scrollTopBtn");


window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


