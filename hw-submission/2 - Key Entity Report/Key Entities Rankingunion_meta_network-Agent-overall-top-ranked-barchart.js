Chart.defaults.plugins.legend.position = 'bottom'

var data = {
labels:['manila_bay_oil_spill_contingency_plan','pcg_bataan_station_command','mt_mary_anne','manila_bay_ay','limay_vice','philippine_coast_guard','sunken','government','compensation','department',],
datasets : [
{
label: 'Agent (union_meta_network)',
backgroundColor: 'rgba(255,0,0,0.2)',
borderColor: 'rgba(255,0,0,1)',
borderWidth: 1,
data : [1,0.482047,0.344454,0.335663,0.306414,0.298123,0.249173,0.222578,0.218746,0.213764,]
},
]
}
var context = document.getElementById('Key Entities Rankingunion_meta_network-Agent-overall-top-ranked-barchart').getContext("2d");
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

