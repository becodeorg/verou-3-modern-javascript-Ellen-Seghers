export const createChart = (date, temperature, minTemperature, maxTemperature) => {
    const chartElement = document.getElementById("graphic");
    //Make a variable with a graph in it
    const newChart = new Chart(chartElement, {
        type: 'line',
        data: {
            labels: date,
            datasets: [{
                label: "Temperature",
                backgroundColor: 'rgb(255, 255, 26)',
                borderColor: 'rgb(255, 255, 26)',
                data: temperature,
            },{
                label: "Min. Temperature",
                backgroundColor: 'rgb(77, 195, 255)',
                borderColor: 'rgb(77, 195, 255)',
                data: minTemperature,
            },{
                label: "Max. Temperature",
                backgroundColor: 'rgb(255, 64, 0)',
                borderColor: 'rgb(255, 64, 0)',
                data: maxTemperature,
            }]
        },
        options: {
            plugins: {
                legend: {
                    position: "bottom"
                },
                title: {
                    display: true,
                    text: 'Forecast 5 days: Temperature',
                    color: 'black'
                }
            }
        }
    });
    return newChart;
}

//Update the data
export const showsGraphic = (chart, date, temperature, minTemperature, maxTemperature) => {
    console.log(date);
    console.log(temperature);
    console.log(minTemperature);
    console.log(maxTemperature);
    addData(chart, date, [temperature, minTemperature, maxTemperature]);
}

function addData(chart, label, data) {
    chart.config.data.labels = label;
    for(let i = 0; i < data.length; i++){
        chart.config.data.datasets[i].data = data[i];
    }
}
