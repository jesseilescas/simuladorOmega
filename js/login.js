let btnIngresar = document.getElementById('btnIngresar')
btnIngresar.addEventListener('click', ingresar)
function ingresar(){
    let usuario = document.getElementById('usuario').value
    let password = document.getElementById('password').value
    if (usuario == 'ADMINISTRADOR' && password == '12345') {
        window.open("../views/principal.html", "_self");    
    }else{
        alert('Ingrese Usuario y/o Contraseña corrrectos')
    }
}