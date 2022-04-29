

    const btn = document.getElementById('btnGuardar')
    btn.addEventListener('click', guardarDatos)
        //Guardar Datos
    function guardarDatos (){
        let nombre = document.getElementById('nombre').value
        sessionStorage.setItem('name', nombre)
        let direccion = document.getElementById('direccion').value
        sessionStorage.setItem('adress', direccion)
        let telefono = document.getElementById('telefono').value
        sessionStorage.setItem('phone', telefono)
        let inversion = document.getElementById('inversion').value
        sessionStorage.setItem('inv', inversion)
        location.reload()
        console.log(nombre)
        console.log(direccion)
        console.log(telefono)
        console.log(inversion)
        
    }
    const nomb = sessionStorage.getItem('name')
    const dir = sessionStorage.getItem('adress')
    const tel = sessionStorage.getItem('phone')
    const inv = parseFloat( sessionStorage.getItem('inv'))
    //Calculo de intereses y gancia
    let gananciaMensual = parseFloat(inv * 0.125)
    let interesCompuesto = parseFloat(gananciaMensual * 16)
    let gananciaTotal = parseFloat(inv + interesCompuesto)
    

    const btnMostrar = document.getElementById('btnMostrar')
    btnMostrar.addEventListener('click', mostrarDatos)
    const divDatos = document.getElementById('formInfo')
    function mostrarDatos(){
        divDatos.innerHTML = `
        <h3>Nombre: ${nomb}</h3>
        <h3>Direccion: ${dir}</h3>
        <h3>Teléfono: ${tel}</h3>
        <h3>Inversion Inicial: $ ${inv.toLocaleString('en-US')}</h3>
        <h3>Ganancia Mensual: $ ${gananciaMensual.toLocaleString('en-US')}</h3>
        <h3>Interes Compuesto: $ ${interesCompuesto.toLocaleString('en-US')}</h3>
        <h3>Saldo Final: $ ${gananciaTotal.toLocaleString('en-US')}</h3>
        `
     document.appendChild(divDatos);

    }
    
    