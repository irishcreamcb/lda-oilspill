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
data : [0.00544872,0.00544872,0.00544872,0.0012706,0.00128968,0.00545256,0.00544542,]
},
]
}
var context = document.getElementById('Key Entities RankingTask_x_Task-spiderWeb').getContext("2d");
var chart = new Chart(context, {
		type: 'radar',
		data: data,
		options: {
				autowidth:false,
			scale: { ticks: { min:0, max:0.00545256, display:false}}
		}
});

