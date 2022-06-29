

import {
 
    aloka,
    auth,
    
  } from "./firebase.js";
  

  const formCrearCuenta = document.getElementById("signup-form2");


  
  //crear cuenta de inicio de sesión
  
  formCrearCuenta.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const correo = formCrearCuenta["email2"];
    const contrasena = formCrearCuenta["password2"];
   
  
   
   try {
      //  console.log(correo.value)
        //console.log(contrasena.value)

        await  aloka(auth,correo.value,contrasena.value)
    } catch (error) {
      console.log(error);
    }
  });
  