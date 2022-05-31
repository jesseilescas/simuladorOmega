
    let btn = document.getElementById('btnGuardar')
    btn.addEventListener('click', guardarDatos)
    const usuarioSession = sessionStorage.getItem('usuario')
    const nombreSession = document.querySelector('#usuarioSession')
    nombreSession.innerHTML = `
        <p>Hola, ${usuarioSession}        
        `
        //Guardar Datos
    function guardarDatos (){
        let nombre = document.getElementById('nombre').value
        sessionStorage.setItem('name', nombre)
        let telefono = document.getElementById('telefono').value
        sessionStorage.setItem('phone', telefono)
        let inversion = document.getElementById('inversion').value
        sessionStorage.setItem('inv', inversion)
        let dolar = document.getElementById('dolar').value
        sessionStorage.setItem('dolar', dolar)
        
        swal({
            title: "Enhorabuena",
            text: "Los datos se registraron correctamente",
            icon: "success",
          });
          location.reload();
    }
   
    
    const nomb = sessionStorage.getItem('name')
    const tel = sessionStorage.getItem('phone')
    const inv = parseFloat( sessionStorage.getItem('inv'))
    const dol = parseFloat( sessionStorage.getItem('dolar'))
    const registro = 49
    //Calculo de intereses y ganancia
    let gananciaMensual = parseFloat(inv * 0.125)
    let interesCompuesto = parseFloat(gananciaMensual * 16)
    let gananciaTotal = parseFloat(inv + interesCompuesto)

    let invPesos = parseFloat(inv * dol)
    let gananciaMensualPesos = parseFloat(gananciaMensual * dol)
    let interesCompuestoPesos = parseFloat(interesCompuesto* dol)
    let gananciaTotalPesos = parseFloat(gananciaTotal * dol)
    //Mostrar simulación
    const btnSimulacion = document.getElementById('btnSimulacion')
    btnSimulacion.addEventListener('click', mostrarSimulacion)


    function mostrarSimulacion() {
        let fecha = moment()

        const simulacion = document.getElementById('simulacion')
        simulacion.style.display='block'
        const tabSim = document.getElementById('tablaSim')
        tabSim.style.display='block'
        

        const fechaAhora = document.getElementById('fecha-ahora')
        fechaAhora.value= fecha.format('LLL')
        fechaAhora.style.textAlign='right'

        const simNombre = document.getElementById('simNombre')
        simNombre.value = nomb
        const simTelefono = document.getElementById('simTelefono')
        simTelefono.value = tel
        
        const simCapitalU = document.getElementById('capitalU')
        simCapitalU.value = '$ '+ inv.toLocaleString('en-US')+' USD'
        const simCapitalm = document.getElementById('capitalM')
        simCapitalm.value ='$ '+ (inv * dol).toLocaleString('en-US')+' MX'

        const simRegistroU = document.getElementById('registroU')
        simRegistroU.value = '$ '+ registro.toLocaleString('en-US')+' USD'
        const simRegistrom = document.getElementById('registroM')
        simRegistrom.value ='$ '+ (registro * dol).toLocaleString('en-US')+' MX'

        const simtotalU = document.getElementById('totalU')
        simtotalU.value = '$ '+ (registro+ inv).toLocaleString('en-US')+' USD'
        const simtotalm = document.getElementById('totalM')
        simtotalm.value ='$ '+ ((registro +inv) *dol).toLocaleString('en-US')+' MX'

        const simRetornoU = document.getElementById('retornoU')
        simRetornoU.value = '$ '+ ( inv*3).toLocaleString('en-US')+' USD'
        const simRetornom = document.getElementById('retornoM')
        simRetornom.value ='$ '+ ((inv*3) *dol).toLocaleString('en-US')+' MX'
        
        const simUtilidadU = document.getElementById('utilidadU')
        simUtilidadU.value = '$ '+ ( (inv*3)-inv).toLocaleString('en-US')+' USD'
        const simUtilidadm = document.getElementById('utilidadM')
        simUtilidadm.value ='$ '+ (( (inv*3)-inv) *dol).toLocaleString('en-US')+' MX'
    }
    
    function calcularInteresMensual(){
        let tasaMensual = 0.0906
        interesComp = inv * tasaMensual
        saldoNuevo = inv + interesComp
        
        tabla = document.querySelector('#tablaSimulacion')
        for (let i = 1; i <=16; i++) {
            let row = document.createElement('tr')
            let rowData = document.createElement('td')
            rowData.innerHTML= 'Mes '+ i

            let rowData1 = document.createElement('td')         
            rowData1.innerHTML= '$ ' +interesComp.toLocaleString('en-US')+ ' USD | $ ' + (interesComp*dol).toLocaleString('en-US') + 'MXM'

            let rowData2 = document.createElement('td')         
            rowData2.innerHTML= '$ ' +saldoNuevo.toLocaleString('en-US')+ ' USD | $ ' + (saldoNuevo*dol).toLocaleString('en-US') + 'MXM'

            tabla.appendChild(row)
            row.appendChild(rowData)
            row.appendChild(rowData1)
            row.appendChild(rowData2)

            
            interesComp = saldoNuevo*tasaMensual
            saldoNuevo= saldoNuevo+interesComp
            
            
           
        }
       

    }
    calcularInteresMensual()

    // const btnMostrar = document.getElementById('btnMostrar')
    // btnMostrar.addEventListener('click', mostrarDatos)
    // const divDatos = document.getElementById('formInfo')

        // function mostrarDatos(){
        //     divDatos.innerHTML = `
        //     <h3>Nombre: ${nomb}</h4>
        //     <h4>Dirección: ${dir}</h4>
        //     <h4>Teléfono: ${tel}</h4>
        //     <hr>
        //     <h4>Inversión Inicial: $ ${inv.toLocaleString('en-US')} USD</h4>
        //     <h4>Ganancia Mensual: $ ${gananciaMensual.toLocaleString('en-US')} USD</h4>
        //     <h4>Interés Compuesto: $ ${interesCompuesto.toLocaleString('en-US')} USD</h4>
        //     <h4>Saldo Final: $ ${gananciaTotal.toLocaleString('en-US')} USD</h4>
        //     <hr>
        //     <h4>Inversión Inicial: $ ${invPesos.toLocaleString('en-US')} MXN</h4>
        //     <h4>Ganancia Mensual: $ ${gananciaMensualPesos.toLocaleString('en-US')} MXN</h4>
        //     <h4>Interés Compuesto: $ ${interesCompuestoPesos.toLocaleString('en-US')} MXN</h4>
        //     <h4>Saldo Final: $ ${gananciaTotalPesos.toLocaleString('en-US')} MXN</h4>
        //     `

        // }
    
        