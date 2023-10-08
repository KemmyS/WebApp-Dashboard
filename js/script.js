const lineChart = document.getElementById("line-chart");
const barChart = document.getElementById("daily-chart");
const doughnutChart = document.getElementById("doughnut-chart");
const notification = document.getElementById("alert");
const message1 = document.getElementById("message1");
const message2 = document.getElementById("message2");
const xIcon = document.querySelector(".x-icon");
const iconBell = document.querySelector(".svg-bell");
const iconBellDot = document.querySelector(".notification")

const toggleTextOn = document.querySelectorAll(".toggle-text--on");
const toggleTextOff = document.querySelectorAll(".toggle-text--off");
const toggleSwitches = document.querySelectorAll(".white-circle");

const SHOW_CLASS = "show";
const HIDE_CLASS = "hide";
const CHANGE_CLASS = "change";

const modals = document.querySelectorAll(".modal");

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
        // legend.left += 10; //adds margin-left to the legend
        legend.left += 10; //adds margin-left to the legend
      },
    },
  ],
});

// inserted text content in the alert tab
message1.textContent = "Alert:You have an unread message";
message2.textContent = "Alert: you have 1 urgent email";

// Cloned message1 and it text context
const messageClone = message1.cloneNode(true);

// added Event Listener to the alert tab
let count = 0;
xIcon.addEventListener("click", (e) => {
  message1.remove();
  message2.style.display = "block";
  count++;
  if (count === 2) {
    notification.remove();
  }
});

// added Event Listener to the icon bell to show modals
// and remove notification dot
iconBell.addEventListener("click", (e) => {

  modals.forEach((modal) => {
    modal.classList.add("show");
    modal.classList.remove("hide");

  });

  iconBellDot.classList.remove("show")
  iconBellDot.classList.add("hide")
  
});

// function for the modal display to close tabs
function modalDisplay(modal){
  modal.addEventListener("click", (e) => {
    const clicked = e.target;
  
    if (clicked.classList.contains("close-tab")) {
  
      if (modal.classList.contains("show")) {
        modal.classList.remove("show");
        modal.classList.add("hide");
      }
    }
  });
}

// called the modal display function
modals.forEach((m) => {
  modalDisplay(m)
})

// function for the toggle switch to display the on and off selection 
// and move btn side by side.
function toggleSwitcher(toggleSwitch, toggleTextOff, toggleTextOn){
  toggleSwitch.addEventListener("click", (e) => {
    const clickedButton = e.target;
  
    if (toggleTextOff.classList.contains(HIDE_CLASS)) {
      toggleTextOff.classList.remove(HIDE_CLASS);
      toggleTextOff.classList.add(SHOW_CLASS);
      toggleTextOff.classList.add(CHANGE_CLASS);
  
      toggleTextOn.classList.add(SHOW_CLASS);
      toggleTextOn.classList.add(CHANGE_CLASS);
      toggleTextOn.classList.remove(HIDE_CLASS);
  
      clickedButton.classList.add(CHANGE_CLASS);
    } else {
      toggleTextOn.classList.remove(HIDE_CLASS);
      toggleTextOn.classList.add(SHOW_CLASS);
      toggleTextOn.classList.remove(CHANGE_CLASS);
  
      toggleTextOff.classList.add(HIDE_CLASS);
      toggleTextOff.classList.remove(SHOW_CLASS);
      toggleTextOff.classList.remove(CHANGE_CLASS);
  
      clickedButton.classList.remove(CHANGE_CLASS);
    }
  });
}

// called the toggle Switcher function
for(let i =0; i < 2; i++) {
  toggleSwitcher(toggleSwitches[i], toggleTextOff[i], toggleTextOn[i]);
}
