import { Column } from "@ant-design/plots";
import { HandleColor } from "../../Modules/HandleColor";

const Barchart = ({ chart }) => {
  const conf = {
    data: chart.data,
    height: 230,
    xField: "name",
    yField: "value",
    maxColumnWidth: 20,
    padding: "auto",
    appendPadding: 10,
    seriesField: "name",
    label: false,
    color: HandleColor(chart),
    yAxis: {
      title: {
        text: chart.yTitle,
        style: {
          fontSize: 16,
        },
      },
      line: {
        style: {
          stroke: "black",
          lineWidth: 1,
          strokeOpacity: 0.3,
        },
      },
    },
    legend: false,
  };

  return (
    <>
      <p>{chart.title}</p>
      <Column {...conf} />
    </>
  );
};

export default Barchart;
