import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const LocalAndGuestGraph = ({ guestAndLocalChart = [] }) => {
  const [chartState, setChartState] = useState({
    series: [
      { name: "Guests", data: [] },
      { name: "Locals", data: [] },
    ],
    options: {
      chart: {
        height: 400,
        type: "area",
        toolbar: { show: true },
      },
      colors: ["#734f96", "#b478ef"],
      dataLabels: { enabled: false },
      stroke: { curve: "smooth" },
      xaxis: {
        type: "category",
        categories: [],
        tickPlacement: "between",
      },
      tooltip: {
        x: { show: true },
      },
      grid: { show: true },
    },
  });

  useEffect(() => {
    if (!guestAndLocalChart?.length) return;

    // Ensure proper month order (important)
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

    const sortedData = [...guestAndLocalChart].sort(
      (a, b) =>
        monthOrder.indexOf(a.monthName) - monthOrder.indexOf(b.monthName),
    );

    const categories = sortedData.map((item) => item.monthName);
    const guestData = sortedData.map((item) => item.totalGuest || 0);
    const localData = sortedData.map((item) => item.totalLocal || 0);

    setChartState((prev) => ({
      ...prev,
      series: [
        { name: "Guests", data: guestData },
        { name: "Locals", data: localData },
      ],
      options: {
        ...prev.options,
        xaxis: {
          ...prev.options.xaxis,
          categories,
        },
      },
    }));
  }, [guestAndLocalChart]);

  const chartWidth =
    chartState.series?.[0]?.data?.length < 9
      ? "100%"
      : chartState.series[0].data.length * 80;

  return (
    <div className="apex_chart_box overflow-x-auto">
      <div id="chart" style={{ width: chartWidth }}>
        <ReactApexChart
          options={chartState.options}
          series={chartState.series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
};

export default LocalAndGuestGraph;
