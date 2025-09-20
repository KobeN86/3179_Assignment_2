var vg_1 = "daily_cost_bar_chart.vg.json";
vegaEmbed("#bar_chart", vg_1, {
    theme: 'quartz',
    renderer: 'svg'
}).then(function(result) {
    console.log('Chart loaded successfully');
}).catch(function(error) {
    console.error('Error loading chart:', error);
});