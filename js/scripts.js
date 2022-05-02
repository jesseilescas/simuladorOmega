
    let btn = document.getElementById('btnGuardar')
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
        let dolar = document.getElementById('dolar').value
        sessionStorage.setItem('dolar', dolar)
        
        location.reload()
        
    }
    const nomb = sessionStorage.getItem('name')
    const dir = sessionStorage.getItem('adress')
    const tel = sessionStorage.getItem('phone')
    const inv = parseFloat( sessionStorage.getItem('inv'))
    const dol = parseFloat( sessionStorage.getItem('dolar'))
    //Calculo de intereses y ganancia
    let gananciaMensual = parseFloat(inv * 0.125)
    let interesCompuesto = parseFloat(gananciaMensual * 16)
    let gananciaTotal = parseFloat(inv + interesCompuesto)

    let invPesos = parseFloat(inv * dol)
    let gananciaMensualPesos = parseFloat(gananciaMensual * dol)
    let interesCompuestoPesos = parseFloat(interesCompuesto* dol)
    let gananciaTotalPesos = parseFloat(gananciaTotal * dol)
    

    const btnMostrar = document.getElementById('btnMostrar')
    btnMostrar.addEventListener('click', mostrarDatos)
    const divDatos = document.getElementById('formInfo')
    function mostrarDatos(){
        divDatos.innerHTML = `
        <h3>Nombre: ${nomb}</h4>
        <h4>Dirección: ${dir}</h4>
        <h4>Teléfono: ${tel}</h4>
        <hr>
        <h4>Inversión Inicial: $ ${inv.toLocaleString('en-US')} USD</h4>
        <h4>Ganancia Mensual: $ ${gananciaMensual.toLocaleString('en-US')} USD</h4>
        <h4>Interés Compuesto: $ ${interesCompuesto.toLocaleString('en-US')} USD</h4>
        <h4>Saldo Final: $ ${gananciaTotal.toLocaleString('en-US')} USD</h4>
        <hr>
        <h4>Inversión Inicial: $ ${invPesos.toLocaleString('en-US')} MXN</h4>
        <h4>Ganancia Mensual: $ ${gananciaMensualPesos.toLocaleString('en-US')} MXN</h4>
        <h4>Interés Compuesto: $ ${interesCompuestoPesos.toLocaleString('en-US')} MXN</h4>
        <h4>Saldo Final: $ ${gananciaTotalPesos.toLocaleString('en-US')} MXN</h4>
        `

    }
    
    