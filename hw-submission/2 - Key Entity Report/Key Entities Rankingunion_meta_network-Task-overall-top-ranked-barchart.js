Chart.defaults.plugins.legend.position = 'bottom'

var data = {
labels:['test','remain','told','sold','insure','coordin','appear','offload','develop','wait',],
datasets : [
{
label: 'Task (union_meta_network)',
backgroundColor: 'rgba(255,0,0,0.2)',
borderColor: 'rgba(255,0,0,1)',
borderWidth: 1,
data : [1,0.88874,0.803886,0.777223,0.531342,0.417361,0.408728,0.408728,0.36902,0.368896,]
},
]
}
var context = document.getElementById('Key Entities Rankingunion_meta_network-Task-overall-top-ranked-barchart').getContext("2d");
var chart = new Chart(context, {
		type: 'bar',
		data: data,
		options: {
			indexAxis:'y',
			autowidth:false,
			scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true
				}
			}]
		}
	}
});

