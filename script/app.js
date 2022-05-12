const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255, 99, 132,0.4)",
      borderColor: "rgba(100, 99, 132,0.2)",
      data: [35, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {},
};
const myChart = new Chart(document.getElementById("myChart"), config);
