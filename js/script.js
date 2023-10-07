const lineChart = document.getElementById("line-chart");
const barChart = document.getElementById("daily-chart");
const doughnutChart = document.getElementById("doughnut-chart");
const notification = document.getElementById("alert");
const message1 = document.getElementById("message1");
const message2 = document.getElementById("message2");
const xIcon = document.querySelector(".x-icon")
const iconBell = document.querySelector(".svg-bell")

const modals = document.querySelectorAll(".modal");
const modal1 = document.querySelector(".first-notification");
const modal2 = document.querySelector(".second-notification");
const modal3 = document.querySelector(".third-notification");


const hourlyBtn = document.querySelector(".hourly-btn");
const dailyBtn = document.querySelector(".daily-btn");
const weeklyBtn = document.querySelector(".weekly-btn");
const monthlyBtn = document.querySelector(".monthly-btn");

const trafficLineChart = new Chart(lineChart, {
  type: "line",
  data: {
    datasets: [
      {
        label: "none",
        data: [
          { x: "10am", y: 25 },
          { x: "11am", y: 30 },
          { x: "12pm", y: 15 },
          { x: "1pm", y: 35 },
          { x: "2pm", y: 20 },
          { x: "3pm", y: 45 },
          { x: "4pm", y: 20 },
          { x: "5pm", y: 15 },
          { x: "6pm", y: 35 },
          { x: "7pm", y: 15 },
          { x: "8pm", y: 20 },
        ],
        // backgroundColor:[''],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});


function changeChart(data){
    trafficLineChart.data.datasets[0].data = data;
    trafficLineChart.update()
}

hourlyBtn.addEventListener("click", (e) => {
    changeChart([
        { x: "10am", y: 25 },
        { x: "11am", y: 30 },
        { x: "12pm", y: 15 },
        { x: "1pm", y: 35 },
        { x: "2pm", y: 20 },
        { x: "3pm", y: 45 },
        { x: "4pm", y: 20 },
        { x: "5pm", y: 15 },
        { x: "6pm", y: 35 },
        { x: "7pm", y: 15 },
        { x: "8pm", y: 20 },
      ]);
  });

dailyBtn.addEventListener("click", (e) => {
    changeChart([
        { x: "Fri", y: 300 },
        { x: "Sat", y: 150 },
        { x: "Sun", y: 180 },
        { x: "Mon", y: 450 },
        { x: "Tue", y: 300 },
        { x: "Wed", y: 250 },
        { x: "Thu", y: 400 },
      ]);
  });


weeklyBtn.addEventListener("click", (e) => {
    changeChart([
        { x: "16-22", y: 500 },
        { x: "23-29", y: 1000 },
        { x: "30-5", y: 550 },
        { x: "6-12", y: 1200 },
        { x: "13-19", y: 1600 },
        { x: "20-26", y: 1200 },
        { x: "27-3", y: 1000 },
      ]);
  });

monthlyBtn.addEventListener("click", (e) => {
    changeChart([
        { x: "Jan", y: 65 },
        { x: "Feb", y: 55 },
        { x: "Mar", y: 80 },
        { x: "Apr", y: 83 },
        { x: "May", y: 57 },
        { x: "Jun", y: 55 },
        { x: "July", y: 40 },
      ]);
  });


const dailyBarChart = new Chart(barChart, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "none",
        data: [
          { x: "Sun", y: 55 },
          { x: "Mon", y: 105 },
          { x: "Tue", y: 175 },
          { x: "Wed", y: 125 },
          { x: "Thu", y: 225 },
          { x: "Fri", y: 200 },
          { x: "Sat", y: 100 },
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },

    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

const dailyDoughnutChart = new Chart(doughnutChart, {
  type: "doughnut",
  data: {
    labels: ["Desktop", "Tablet", "phones"],
    datasets: [
      {
        label: "Mobile user Dataset",
        data: [260, 50, 50],
        backgroundColor: [
          "rgb(68, 23, 209 )",
          "rgb(118, 164, 138)",
          "rgb(93, 169, 211)",
        ],
        borderColor: [
          "rgb(68, 23, 209 )",
          "rgb(118, 164, 138)",
          "rgb(93, 169, 211)",
        ],
        hoverOffset: 4,
      },
    ],
  },

  options: {
    plugins: {
      legend: {
        display: true,
        position: "right",
        align: 'center',
      },
    },
  },

  plugins: [
    {
      afterUpdate(chart) {
        //This function name of "afterUpdate" means 
        //that after the page loads, it will 
        //call this function and make a change to the chart.

        //We added this plugin because ChartJS does not provide a
        //way to add spacing between the chart and it's legend.

        const legend = chart.legend; //select the chart's legend
        // legend.left += 10; //adds margin-left to the legend
        legend.left += 10; //adds margin-left to the legend
      }
    },
  ],
});

message1.textContent = "Alert:You have an unread message";
message2.textContent = "Alert: New message";

const messageClone = message1.cloneNode(true)

let count = 0
xIcon.addEventListener("click", (e) => {
    message1.remove()
    message2.style.display = "block"
    count++
    if(count === 2){
        notification.remove()
    }
   
    
  });

  console.log(modal1.childNodes);

iconBell.addEventListener("click", (e) => {
    modals.forEach((modal) => {
        modal.classList.add("show")
        modal.classList.remove("hide")
      });
  });

  modal1.addEventListener("click", (e) => {
    const clicked = e.target;

    if(clicked.classList.contains("close-tab")) {
        // console.log("Clicked on X");
      
        if(modal1.classList.contains("show")){
            modal1.classList.remove("show")
            modal1.classList.add("hide")
        }
        
    }
  });


  modal2.addEventListener("click", (e) => {
    const clicked = e.target;

    if(clicked.classList.contains("close-tab")) {
        // console.log("Clicked on X");
      
        if(modal2.classList.contains("show")){
            modal2.classList.remove("show")
            modal2.classList.add("hide")
        }
        
    }
  });

  modal3.addEventListener("click", (e) => {
    const clicked = e.target;

    if(clicked.classList.contains("close-tab")) {
        // console.log("Clicked on X");
      
        if(modal3.classList.contains("show")){
            modal3.classList.remove("show")
            modal3.classList.add("hide")
        }
        
    }
  });





