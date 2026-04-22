import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const TotalRevenue = ({ revenueChart = [] }) => {
  const [chartState, setChartState] = useState({
    series: [
      { name: "Revenue", data: [] },
      { name: "Trips", data: [] },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: true,
          tools: { download: true },
        },
        events: {
          mounted: function (chartContext) {
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
      dataLabels: { enabled: false },
      xaxis: {
        categories: [],
        position: "bottom",
        tickPlacement: "between",
      },
      fill: { opacity: 1 },
      tooltip: {
        y: {
          formatter: (val) => val,
        },
      },
      grid: {
        xaxis: { lines: { show: false } },
        yaxis: { lines: { show: true } },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
      },
    },
  });

  useEffect(() => {
    if (!revenueChart?.length) return;

    const monthOrder = [
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
    ];

    const sortedData = [...revenueChart].sort(
      (a, b) =>
        monthOrder.indexOf(a.monthName) - monthOrder.indexOf(b.monthName),
    );

    const categories = sortedData.map((item) => item.monthName);
    const revenueData = sortedData.map((item) => item.totalRevenue || 0);
    const tripsData = sortedData.map((item) => item.totalTrip || 0);

    setChartState((prev) => ({
      ...prev,
      series: [
        { name: "Revenue", data: revenueData },
        { name: "Trips", data: tripsData },
      ],
      options: {
        ...prev.options,
        xaxis: {
          ...prev.options.xaxis,
          categories,
        },
      },
    }));
  }, [revenueChart]);

  const chartWidth =
    chartState.series?.[0]?.data?.length < 9
      ? "100%"
      : chartState.series[0].data.length * 100;

  return (
    <div className="overflow-x-auto apex_chart_box">
      <div id="chart" style={{ width: chartWidth }}>
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
