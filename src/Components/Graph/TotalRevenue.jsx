import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const TotalRevenue = () => {
  const [chartState, setChartState] = useState({
    series: [
      {
        name: "Revenue",
        data: [
          100, 102, 90, 60, 80, 110, 130, 150, 120, 140, 160, 180, 200, 220,
          240,
        ],
      },
      {
        name: "Trips",
        data: [
          80, 85, 70, 50, 75, 95, 115, 140, 100, 120, 150, 170, 190, 210, 230,
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: true,
          tools: {
            download: true,
          },
        },
        events: {
          mounted: function (chartContext, config) {
            chartContext.windowResizeHandler();
          },
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "30px",
          endingShape: "rounded",
        },
      },
      colors: ["#734f96", "#b478ef"],
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
          "Jan",
          "Feb",
          "Mar",
        ],
        position: "bottom",
        tickPlacement: "between",
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          },
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
      },
    },
  });

  const chartWidth =
    chartState.series[0].data.length < 9
      ? "100%"
      : chartState.series[0].data.length * 100;

  return (
    <div className="overflow-scroll apex_chart_box">
      <div className="" id="chart" style={{ width: chartWidth }}>
        <ReactApexChart
          options={chartState.options}
          series={chartState.series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default TotalRevenue;
