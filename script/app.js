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

let response;

function displayAsiaCountry(response) {
  // console.log(response);
  let GetAsiaCountries;
  for (let i = 0; i < response.data.length; i++) {
    GetAsiaCountries = response.data[i].name.common;
    console.log(GetAsiaCountries);
  }
}

let urlApi = "https://restcountries.herokuapp.com/api/v1/region/Asia";
axios.get(urlApi).then(displayAsiaCountry);
alert("Please check the title's message");
