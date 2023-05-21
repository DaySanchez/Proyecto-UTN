
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Enviar";
  } else {
    document.getElementById("nextBtn").innerHTML = "Siguiente";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n);
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
  //DESCARGA PDF CON DATOS
          var name = document.getElementById("name").value;
          var apellido = document.getElementById("apellido").value;
          var telefono = document.getElementById("telefono").value;
          var email = document.getElementById("email").value;
          var nacimiento = document.getElementById("dia").value; 
          var usuario = document.getElementById("username").value;
          var password = document.getElementById("password").value;
          var doc = new jsPDF();
          doc.text(20,20,"Nombre: " + name);
          doc.text(20,30,"Apellido: " + apellido);
          doc.text(20,40,"Telefono: " + telefono);
          doc.text(20,50,"email: " + email);
          doc.text(20,60,"nacimiento: " + nacimiento);
          doc.text(20,70,"Usuario: " + usuario);
          doc.text(20,80,"Password: " + password);
          doc.save("form.pdf"); 
    let formulario = document.getElementById('regForm');
    window.alert('usuario registrado correctamente!!');
    guardarDatos()
    formulario.reset();
    currentTab = 0;
    showTab(currentTab)
    // ... the form gets submitted:
    //document.getElementById("regForm").submit();
    //return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }

  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}

let datosGuardados = {};

function guardarDatos() {
  let datos = {
    nombre: document.getElementById("name").value,
    apellido: document.getElementById("apellido").value,
    email: document.getElementById("email").value,
    telefono: document.getElementById("telefono").value,
    nac: document.getElementById("dia").value,
    usuario: document.getElementById("username").value,
    usuario: document.getElementById("password").value,
  };
  datosGuardados = datos; // Guardar los datos en la variable

  console.log(datosGuardados);
}



function submit (){
    currentTab = 0;
    showTab(n)
}

// FORMULARIO DE CONTACTO //
var inputs = document.getElementsByClassName("formInput");
for (var i= 0; i<inputs.length; i++) {
    inputs[i].addEventListener("keyup", function(){
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add("fijar")
        } else {
            this.nextElementSibling.classList.remove("fijar");
        }
    });
}

