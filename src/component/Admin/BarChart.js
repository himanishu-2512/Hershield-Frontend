import React, { useState } from "react";
import Chart from "react-apexcharts";

function BarChart() {
  const [state, setState] = useState({
    options: {
      colors: ["#E91E63", "#F86D69"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
    },
    series: [
      {
        name: "SOS",
        data: [10, 15, 8, 20, 45, 12, 23, 31, 19, 17, 5, 8],
      },
      {
        name: "Complaints",
        data: [40, 46, 34, 64, 23, 34, 54, 64, 76, 24, 53, 54],
      },
    ],
  });
  return (
    <div className="App">
      <div className="row">
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="700px"
          />
        </div>
      </div>
    </div>
  );
}

export default BarChart;
