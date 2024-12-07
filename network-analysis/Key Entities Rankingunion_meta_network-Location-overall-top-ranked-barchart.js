Chart.defaults.plugins.legend.position = 'bottom'

var data = {
labels:['manila_bay','malolos_city','malabon_city','east_asia','cavite_city','iloilo_city','zamboanga_city','bacoor_city',],
datasets : [
{
label: 'Location (union_meta_network)',
backgroundColor: 'rgba(255,0,0,0.2)',
borderColor: 'rgba(255,0,0,1)',
borderWidth: 1,
data : [1,0.50927,0.4728,0.280996,0.15864,0.0752134,0.028592,0.025464,]
},
]
}
var context = document.getElementById('Key Entities Rankingunion_meta_network-Location-overall-top-ranked-barchart').getContext("2d");
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

