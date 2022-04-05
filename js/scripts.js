let dato = 'Y'

while (dato == 'Y') {
    
    const nombre = prompt('Ingrese el nombre completo del cliente')
    const direccion = prompt('Ingrese la dirección del cliente')
    const inversion = parseInt(prompt('Ingrese la inversion del cliente'))
    dato = prompt('Desea continuar Y/N').toUpperCase()
    let gananciaMensual = inversion * 0.125
    let interesCompuesto = gananciaMensual * 16
    let gananciaTotal = inversion + interesCompuesto
        function imprimirDatos () {
            console.log('Cliente:', nombre)
            console.log('Direccion:', direccion)
            console.log('Cantidad invertida: $', inversion)
            console.log('Interes Compuesto : $', interesCompuesto)
            console.log('Interes mensual en pesos : $', gananciaMensual)
            console.log('Monto final a cobrar: $', gananciaTotal)
            console.log('Recuerda que el tiempo de trabajo son 16 meses(Valor expresado en M.N/MXN)')
        }
        imprimirDatos()
    
    if (dato == 'N') {
        break
    }
}

