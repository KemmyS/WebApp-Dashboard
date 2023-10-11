const lineChart = document.getElementById("line-chart");
const barChart = document.getElementById("daily-chart");
const doughnutChart = document.getElementById("doughnut-chart");

const hourlyBtn = document.querySelector(".hourly-btn");
const dailyBtn = document.querySelector(".daily-btn");
const weeklyBtn = document.querySelector(".weekly-btn");
const monthlyBtn = document.querySelector(".monthly-btn");

// chart Js line graph
const trafficLineChart = new Chart(lineChart, {
  type: "line",
  data: {
    datasets: [
      {
        label: "Traffic data",
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
        fill: true,

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

// function for an interactive line graph
function changeChart(data) {
  trafficLineChart.data.datasets[0].data = data;
  trafficLineChart.update();
}

// calling the change function for each button
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

// chart Js bar graph
const dailyBarChart = new Chart(barChart, {
  type: "bar",
  data: {
    datasets: [
      {
        label: "Daily Traffic",
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

// chart Js doughnut graph
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
        align: "center",
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
        legend.left += 10; //adds margin-left to the legend
      },
    },
  ],
});