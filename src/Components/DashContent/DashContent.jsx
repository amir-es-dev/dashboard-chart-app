import "./DashContent.css";
import Barchart from "../Barchart/Barchart";
import Piechart from "../Piechart/Piechart";
import MainContext from "../Main/Context/MainContext";
import { useContext } from "react";

const DashContent = () => {
  const { charts, selectedChart, setSelectedChart } = useContext(MainContext);

  return (
    <div className="charts-box">
      {charts?.map((chart) => (
        <div
          className={`chart-box ${
            selectedChart?.id === chart.id ? "selected-chart" : ""
          }`}
          style={{ width: chart.width }}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedChart(chart);
          }}
          key={chart.id}
        >
          {chart.type === "barChart" ? (
            <Barchart chart={chart} />
          ) : (
            <Piechart chart={chart} />
          )}
        </div>
      ))}
    </div>
  );
};

export default DashContent;
