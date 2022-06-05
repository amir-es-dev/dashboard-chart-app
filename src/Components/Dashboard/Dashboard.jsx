import "./Dashboard.css";
import DashContent from "../DashContent/DashContent";
import MainContext from "../Main/Context/MainContext";
import { useContext, useState } from "react";

const Dashboard = () => {
  const { setSelectedChart, setModal, setCharts } = useContext(MainContext);
  const [menu, setMenu] = useState("");

  const icons = [
    { text: "code", value: "JSON Code" },
    { text: "eye", value: "View Dashboard" },
    { text: "pencil-square", value: "Edit" },
    { text: "save2", value: "Save" },
  ];

  const handleIconAction = (input) => {
    input === "Edit" ? showMenu() : setModal(input);
  };

  const showMenu = () => {
    if (menu) {
      setMenu("");
      return;
    }
    localStorage.length === 0
      ? setMenu(["Empty Storage"])
      : setMenu(Object.keys(localStorage));
  };

  const chooseModel = (item) => {
    if (item === "Empty Storage") {
      setMenu("");
      return;
    }
    let model = JSON.parse(localStorage.getItem(`${item}`));
    setCharts(model);
    setMenu("");
  };

  const deleteModel = (item) => {
    localStorage.removeItem(`${item}`);
    showMenu();
  };

  return (
    <div className="dashboard-container" onClick={() => setSelectedChart()}>
      <div className="dashboard-header">
        <h3>Dashboard</h3>
        <div className="icons-box">
          {icons.map((icon) => (
            <span key={icon.text} onClick={() => handleIconAction(icon.value)}>
              <i className={`bi bi-${icon.text} icon`} title={icon.value}></i>
            </span>
          ))}
          {menu && (
            <div className={`menu`}>
              {menu.map((item) => (
                <div className="menu-item">
                  <p key={item} onClick={() => chooseModel(item)}>
                    {item}
                  </p>
                  {item !== "Empty Storage" && (
                    <button
                      title="Delete Model"
                      onClick={() => deleteModel(item)}
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <DashContent />
    </div>
  );
};

export default Dashboard;
