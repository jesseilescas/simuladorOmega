
const inv = 5000
const data = {
  labels: ['OMEGA', ''],
  datasets: [{
    label: 'Inversion',
    data: [0, 0],
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(0, 0, 0, 0)'
    ],
    borderColor: [
      'rgba(255, 26, 104, 1)',
      'rgba(0, 0, 0, 0)'
    ],
    borderWidth: 1
  }]
};
const config = {
  type: 'doughnut',
  data
  
};
const myChart = new Chart(
  document.querySelector('#myChart'),
  config
)
function actualizarChart(rango) {
    const valorInversion = rango.value
    console.log(valorInversion);
    myChart.config.data.datasets[0].data[0] = valorInversion
    myChart.config.data.datasets[0].data[1] = inv-valorInversion
    myChart.update()
    
}