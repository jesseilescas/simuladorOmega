 //fetch a data json
 const tabla = document.querySelector("#tablaActivos")
 
 fetch('../js/data.json')
 .then(datos => datos.json())
 .then(dato =>{
     for(let i of dato["miembros"]){
         let row = document.createElement('tr')
         let rowData = document.createElement('td')
         rowData.innerHTML= i.id
         let rowData1 = document.createElement('td')         
         rowData1.innerHTML= i.nombre
         let rowData2 = document.createElement('td')
         rowData2.innerHTML= i.usuario
         let rowData3 = document.createElement('td')
         rowData3.innerHTML= i.contraseña
         let rowData4 = document.createElement('td')
         rowData4.innerHTML= i.inversionInicial + ' USD'


         tabla.appendChild(row)
         row.appendChild(rowData)
         row.appendChild(rowData1)
         row.appendChild(rowData2)
         row.appendChild(rowData3)
         row.appendChild(rowData4)
         
     }
 })
  