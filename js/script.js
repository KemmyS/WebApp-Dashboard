const lineChart = document.getElementById("line-chart");


const hourly = new Chart(lineChart,{
    type:"line",
    data:{
    datasets:[{
        label:"none",
        data:[
            { x:'10am', y:25 },
            { x:'11am', y:30 },
            { x:'12pm', y:15 },
            { x:'1pm', y:35 },
            { x:'2pm', y:20 },
            { x:'3pm', y:45 },
            { x:'4pm', y:20 },
            { x:'5pm', y:15 },
            { x:'6pm', y:35 },
            { x:'7pm', y:15 },
            { x:'8pm', y:20 }
            
            ],
        // backgroundColor:[''],
        borderWidth:1
    }]
    },
    options:{
        scales:{
            y:{
                beginAtZero:true,
              
                
            }

        },
        plugins:{
            legend:{
                display:false
            }
        }
    }
});



console.log(hourly);
