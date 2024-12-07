Chart.defaults.plugins.legend.position = 'bottom'

var data = {
labels:['Total Degree Centrality','Out-Degree Centrality','In-Degree Centrality','Betweenness Centrality','Betweenness Centrality (inverted links)','Closeness Centrality','Closeness Centrality (inverted links)',],
datasets : [
{
label: 'union_meta_network',
backgroundColor: 'rgba(255,0,0,0.2)',
borderColor: 'rgba(255,0,0,1)',
borderWidth: 1,
fill:true,
data : [0.0694444,0.0694444,0.0694444,0.0119048,0.00793651,0.0682953,0.0675292,]
},
]
}
var context = document.getElementById('Key Entities RankingLocation_x_Location-spiderWeb').getContext("2d");
var chart = new Chart(context, {
		type: 'radar',
		data: data,
		options: {
				autowidth:false,
			scale: { ticks: { min:0, max:0.0694444, display:false}}
		}
});

