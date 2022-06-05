import { Pie } from "@ant-design/plots";
import { HandleColor } from "../../Modules/HandleColor";

const Piechart = ({ chart }) => {
  const config = {
    data: chart.data,
    height: 230,
    angleField: "value",
    colorField: "name",
    padding: "auto",
    appendPadding: 10,
    color: HandleColor(chart),
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };

  return (
    <>
      <p>{chart.title}</p>
      <Pie {...config} />
    </>
  );
};

export default Piechart;
