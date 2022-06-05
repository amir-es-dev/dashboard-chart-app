import "./ChartAppearance.css";
import { useContext } from "react";
import InspectorContext from "../Inspector/Context/InspectorContext";

const ChartAppearance = () => {
  const { inputData, setInputData, updateDashboard } =
    useContext(InspectorContext);

  const inputLabel = [
    { text: "Length", label: "width" },
    { text: "Chart Title", label: "title" },
  ];
  if (inputData.type === "barChart") {
    inputLabel[2] = { text: "Y-Axis Title", label: "yTitle" };
  }

  const handleChange = (e) => {
    setInputData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  return (
    <div className="appearance-container">
      {inputLabel.map((obj) => (
        <div key={obj.label} className="item-box">
          <span>{obj.text}:</span>
          <span>
            <input
              type="text"
              name={obj.label}
              value={inputData && inputData[obj.label]}
              onBlur={updateDashboard}
              onChange={handleChange}
            />
          </span>
        </div>
      ))}
    </div>
  );
};

export default ChartAppearance;
