//const open = document.getElementById("open_sign");

//open.addEventListener("click", () =>{alert(prueba)});





//Logica del formulario habilita//

function cambiar(){
    //document.getElementById("contacto").innerHTML = "Cambiado";
    document.getElementById("formulario").style.display="block";
}

document.getElementById("open_sign").onclick = function(){cambiar();}

function ocultar(){
    //document.getElementById("contacto").innerHTML = "Cambiado";
    document.getElementById("formulario").style.display="none";
    document.getElementById("errorEnv").style.display="none";
    document.getElementById("errorEnv1").style.display="none";
    document.getElementById("usuario").value="";
    document.getElementById("password").value="";
    document.getElementById("error").style.display="none";
    document.getElementById("errorPass").style.display="none";

}

document.getElementById("cerrar").onclick = function(){ocultar();}

/*const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{0,16}$/, // Letras, numeros, guion y guion_bajo
	password: /^.{4,12}$/, // 4 a 12 digitos.
}*/

const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const campos = {
    usuario: false,
    password: false
}

const validarFormulario = (e) => {
    switch (e.target.name){
        case "usuario":
            if(expresiones.usuario.test(e.target.value)){
                console.log(expresiones.usuario.test(e.target.value));
                document.getElementById("grupo__usuario").classList.remove("formulario__grupo-incorrecto");
                document.getElementById("grupo__usuario").classList.add("formulario__grupo-correcto");
            }else{
                document.getElementById("grupo__usuario").classList.add("formulario__grupo-incorrecto");
            }
            break;
        case "password":
            console.log("Funcionó!!!");
            break;
    }
}

inputs.forEach(input => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});
/**********************************************/
/**************VALIDA ENTRADAS*****************/
/**********************************************/
formulario.addEventListener("submit", (e) => {
    usuario="admin";
    contrasena="admin";
    e.preventDefault();
    validaUsuario();
    ValidaContrasena();
    if(document.getElementById("usuario").value == "admin" && document.getElementById("password").value =="admin"){
        document.getElementById("formulario").style.display="none";
        document.getElementById("errorEnv").style.display="none";
        document.getElementById("errorEnv1").style.display="none";
        document.getElementById("usuario").value="";
        document.getElementById("password").value="";
        document.getElementById("error").style.display="none";
        document.getElementById("errorPass").style.display="none";  
    }else{
        document.getElementById("errorEnv").style.display="block";
        document.getElementById("errorEnv1").style.display="block";
        document.getElementById("usuario").value="";
        document.getElementById("password").value="";
    }

});

function validaUsuario(){
    let valUsuario = document.getElementById("usuario").value;
    if (valUsuario == ""){
        console.log("Usuario vacio");
        document.getElementById("error").style.display="block";
        return false;
    }else{
        document.getElementById("error").style.display="none";
        return true;
    }
}

function ValidaContrasena(){
    let valPass = document.getElementById("password").value;
    if (valPass == ""){
        console.log("Contraseña vacia");
        document.getElementById("errorPass").style.display="block";
        return false;
    }else{
        document.getElementById("errorPass").style.display="none";
        return true;
    }
}

/**********************************************/
/*************LOGICA DE EDICION****************/
/**********************************************/

document.getElementById('editContacto').addEventListener('click', function() { 
    editContacto();
   })

function editContacto(){
    console.log("Editando contacto");
    document.getElementById("formularioEditContacto").style.display="block";
}


