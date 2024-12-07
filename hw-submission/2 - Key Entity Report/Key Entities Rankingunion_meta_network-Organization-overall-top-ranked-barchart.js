Chart.defaults.plugins.legend.position = 'bottom'

var data = {
labels:['bfar','incident_management_team','local_government','atmospheric_administration','noaa','up_msi','shogun_ships_company','provincial_agriculture_office','marine_science_institute','lucena_city',],
datasets : [
{
label: 'Organization (union_meta_network)',
backgroundColor: 'rgba(255,0,0,0.2)',
borderColor: 'rgba(255,0,0,1)',
borderWidth: 1,
data : [1,0.881334,0.76576,0.76247,0.672535,0.456509,0.342729,0.341561,0.334668,0.320088,]
},
]
}
var context = document.getElementById('Key Entities Rankingunion_meta_network-Organization-overall-top-ranked-barchart').getContext("2d");
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

