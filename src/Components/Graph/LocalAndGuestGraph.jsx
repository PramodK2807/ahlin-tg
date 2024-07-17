import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const LocalAndGuestGraph = () => {
  const [chartState, setChartState] = useState({
    series: [
      {
        name: "series1",
        data: [31, 40, 28],
      },
      {
        name: "series2",
        data: [11, 32, 45],
      },
    ],
    // series: [
    //   {
    //     name: "Guests",
    //     data: [],
    //   },
    //   {
    //     name: "Locals",
    //     data: [],
    //   },
    // ],
    options: {
      chart: {
        height: 400,
        type: "area",
        toolbar: {
          show: true,
        },
      },
      colors: ["#734f96", "#b478ef"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "category",
        categories: ["Jan", "Feb", "Mar"],
        tickPlacement: "between",
      },
      tooltip: {
        x: {
          show: true,
        },
      },
      grid: {
        show: true,
      },
    },
  });

  // useEffect(() => {
  //   getOrderNProduct();
  // }, []);

  // const getOrderNProduct = async () => {
  //   try {
  //     let { data } = await OrderAndProductCount();
  //     console.log(data);
  //     if (data && !data?.error) {
  //       const itemData = data?.results?.totalItem || [];
  //       const orderData = data?.results?.totalOrder || [];

  //       // Find the common months
  //       const itemMonths = itemData.map((item) => item.monthName);
  //       const orderMonths = orderData.map((item) => item.monthName);
  //       const commonMonths = itemMonths.filter((month) =>
  //         orderMonths.includes(month)
  //       );

  //       // Filter the data arrays to include only the common months
  //       const filteredItemData = itemData.filter((item) =>
  //         commonMonths.includes(item.monthName)
  //       );
  //       const filteredOrderData = orderData.filter((item) =>
  //         commonMonths.includes(item.monthName)
  //       );

  //       // Create arrays for counts
  //       const itemArr = filteredItemData.map((item) => item.count);
  //       const orderArr = filteredOrderData.map((item) => item.count);

  //       // Find the previous month to the first month in commonMonths
  //       if (commonMonths.length > 0) {
  //         const firstMonth = new Date(`1 ${commonMonths[0]} 2000`);
  //         const prevMonth = new Date(
  //           firstMonth.setMonth(firstMonth.getMonth() - 1)
  //         );
  //         const prevMonthName = prevMonth.toLocaleString("default", {
  //           month: "long",
  //         });

  //         // Add the previous month with a count of 0 if it doesn't already exist
  //         if (!commonMonths.includes(prevMonthName)) {
  //           commonMonths.unshift(prevMonthName);
  //           itemArr.unshift(0);
  //           orderArr.unshift(0);
  //         }
  //       }

  //       setChartState((prevState) => ({
  //         ...prevState,
  //         series: [
  //           {
  //             name: "Total Orders",
  //             data: orderArr,
  //           },
  //           {
  //             name: "Total Items",
  //             data: itemArr,
  //           },
  //         ],
  //         options: {
  //           ...prevState.options,
  //           xaxis: {
  //             ...prevState.options.xaxis,
  //             categories: commonMonths,
  //           },
  //         },
  //       }));
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const chartWidth =
    chartState.series[0].data.length < 9
      ? "100%"
      : chartState.series[0].data.length * 80;

  return (
    <div className="apex_chart_box overflow-scroll">
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
