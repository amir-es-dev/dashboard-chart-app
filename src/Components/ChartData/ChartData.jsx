import InspectorContext from "../Inspector/Context/InspectorContext";
import { useContext, useEffect, useState } from "react";
import "./ChartData.css";
import { HexColorInput } from "react-colorful";

const ChartData = () => {
  const { inputData, setInputData, updateDashboard } =
    useContext(InspectorContext);
  const [btn, setBtn] = useState({ add: false, del: false });

  const dataLabel = ["name", "value", "color"];

  useEffect(() => {
    updateDashboard();
  }, [btn]);

  const addItem = () => {
    const copy = [...inputData.data];
    copy.push({ name: "", value: "", color: "" });
    setInputData((p) => ({ ...p, data: copy }));
    setBtn((p) => ({ ...p, add: !p.add }));
  };

  const handleData = (e, i) => {
    const copy = [...inputData.data];

    !e.target
      ? (copy[i]["color"] = e)
      : (copy[i][e.target.name] =
          e.target.name === "value" ? +e.target.value : e.target.value);

    setInputData((p) => ({ ...p, data: copy }));
  };

  const delItem = (i) => {
    let copy = [...inputData.data];

    copy.length === 1
      ? (copy = [{ name: "", value: 0, color: "" }])
      : copy.splice(i, 1);

    setInputData((p) => ({ ...p, data: copy }));
    setBtn((p) => ({ ...p, del: !p.del }));
  };

  return (
    <div className="data-container ">
      <div className="data-header">
        <h4>Data Items</h4>
        <div onClick={addItem}>
          <i
            class="bi bi-plus-circle"
            style={{ fontSize: 24, cursor: "pointer", color: "#2fc402" }}
            title="Add Item"
          ></i>
        </div>
      </div>
      <div className="table-box">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Value</th>
              <th>Color</th>
              <th>Del</th>
            </tr>
          </thead>
          <tbody>
            {inputData?.data?.map((el, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                {dataLabel.map((label) => {
                  return (
                    <td key={label}>
                      {label === "color" ? (
                        <HexColorInput
                          color={el[label]}
                          onChange={(e) => handleData(e, i)}
                          onBlur={updateDashboard}
                        />
                      ) : (
                        <input
                          type="text"
                          name={label}
                          value={el[label]}
                          onChange={(e) => handleData(e, i)}
                          onBlur={updateDashboard}
                        />
                      )}
                    </td>
                  );
                })}
                <td>
                  <div onClick={() => delItem(i)}>
                    <i
                      className="bi bi-x-lg"
                      style={{ fontSize: 20, cursor: "pointer", color: "red" }}
                      title="Delete Item"
                    ></i>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChartData;
