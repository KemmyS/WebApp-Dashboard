const lineChart = document.getElementById("line-chart");
const barChart = document.getElementById("daily-chart");
const doughnutChart = document.getElementById("doughnut-chart");

const hourly = new Chart(lineChart, {
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

const dailyChart = new Chart(barChart, {
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

const dailyUser = new Chart(doughnutChart, {
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
// console.log(hourly);

// console.log(doughnutChart);
// console.log(doughnutChart.children);
// console.log(doughnutChart.childNodes);
