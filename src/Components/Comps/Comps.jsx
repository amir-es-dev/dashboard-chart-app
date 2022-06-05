import "./Comps.css";
import { v4 as uuidv4 } from "uuid";
import MainContext from "../Main/Context/MainContext";
import { useContext } from "react";

const Comps = () => {
  const { charts, setCharts, setSelectedChart } = useContext(MainContext);
  const handleChart = (name) => {
    const initialData = {
      id: uuidv4(),
      type: name,
      width: "45%",
      title: "",
      data: [{ name: "", value: 0, color: "" }],
    };
    if (name === "barChart") {
      initialData.yTitle = "";
    }
    const copy = [...charts];
    copy.push(initialData);
    setCharts(copy);
  };

  const newModel = () => {
    setCharts([]);
    setSelectedChart();
  };

  return (
    <div className="comps-container">
      <div>
        <h3>Visual Components</h3>
        <i
          class="bi bi-plus-square-fill"
          style={{
            color: "#34a53a",
            fontSize: 24,
            cursor: "pointer",
          }}
          title="New Model"
          onClick={newModel}
        ></i>
      </div>
      <div>
        <div className="img-box" onClick={() => handleChart("barChart")}>
          <img src="/Images/barChart.webp" alt="" />
        </div>
        <div className="img-box" onClick={() => handleChart("pieChart")}>
          <img src="/Images/pieChart.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Comps;
