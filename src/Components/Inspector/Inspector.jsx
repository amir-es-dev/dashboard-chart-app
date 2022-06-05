import "./Inspector.css";
import { useState, useEffect, useContext } from "react";
import MainContext from "../Main/Context/MainContext";
import InspectorContext from "./Context/InspectorContext";
import ChartAppearance from "../ChartAppearance/ChartAppearance";
import ChartData from "../ChartData/ChartData";

const Inspector = () => {
  const [inputData, setInputData] = useState();

  const { charts, setCharts, selectedChart, setSelectedChart } =
    useContext(MainContext);

  useEffect(() => {
    setInputData(selectedChart);
  }, [selectedChart]);

  const updateDashboard = () => {
    const copy = [...charts];
    const index = copy.findIndex((chart) => chart.id === selectedChart.id);
    copy[index] = inputData;
    setCharts(copy);
  };

  const deleteChart = () => {
    const copy = [...charts];
    const filteredChart = copy.filter((chart) => chart.id !== selectedChart.id);
    setCharts(filteredChart);
    setSelectedChart(null);
  };

  const contextObj = { inputData, setInputData, updateDashboard };

  return (
    <div className="inspector-container">
      <h3>Inspector</h3>
      {inputData && (
        <InspectorContext.Provider value={contextObj}>
          <div className="inspector-content">
            <div onClick={deleteChart}>
              <i
                className="bi bi-trash3"
                style={{ fontSize: 24, cursor: "pointer", color: "red" }}
                title="Delete Chart"
              ></i>
            </div>
            <ChartAppearance />
            <ChartData />
          </div>
        </InspectorContext.Provider>
      )}
    </div>
  );
};

export default Inspector;
