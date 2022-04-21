let dato = 'Y'

while (dato != 'N') {
    
    const nombre = prompt('Ingrese el nombre completo del cliente')
    const direccion = prompt('Ingrese la dirección del cliente')
    const inversion = parseInt(prompt('Ingrese la inversion del cliente'))
    dato = prompt('Desea continuar Y/N').toUpperCase()
    let gananciaMensual = inversion * 0.125
    let interesCompuesto = gananciaMensual * 16
    let gananciaTotal = inversion + interesCompuesto

    const datos =[ //se contruye objeto
        {name: nombre, adress: direccion, inv: inversion, mens: gananciaMensual, compuesto: interesCompuesto, final: gananciaTotal}
    ]
        function imprimirDatos () {
            for(const inf of datos){
                const listaDatos = document.getElementById('listaDatos');
                listaDatos.innerHTML = `
                <h3>Nombre: ${inf.name}</h3>
                <h3>Direccion: ${inf.adress}</h3>
                <h3>Inversion Inicial: $ ${inf.inv}</h3>
                <h3>Ganancia Mensual: $ ${inf.mens}</h3>
                <h3>Interes Compuesto: $ ${inf.compuesto}</h3>
                <h3>Saldo Final: $ ${inf.final}</h3>
                <h2>Recuerda que el tiempo de trabajo son 16 meses(Valor expresado en M.N/MXN)</h2>
                <button id="refrescarPagina" class="btn btn-dark">Calcular Nuevamene</button>
                `
             document.body.appendChild(listaDatos);

            }    
        }
        imprimirDatos()
        
    }
    const btn = document.getElementById('refrescarPagina')
    btn.addEventListener('click', resfrescarPag)
    function resfrescarPag(){
        location.reload()
    }
    