import { useState } from "react";
import Comps from "../Comps/Comps";
import Dashboard from "../Dashboard/Dashboard";
import Inspector from "../Inspector/Inspector";
import MainContext from "./Context/MainContext";
import Modal from "../Modal/Modal";
import "./Main.css";

const Main = () => {
  const [charts, setCharts] = useState([]);
  const [selectedChart, setSelectedChart] = useState();
  const [modal, setModal] = useState("");

  const contextObj = {
    charts,
    setCharts,
    selectedChart,
    setSelectedChart,
    modal,
    setModal,
  };

  return (
    <MainContext.Provider value={contextObj}>
      <div className="main-container">
        <Inspector />
        <Dashboard />
        <Comps />
      </div>
      {modal && <Modal />}
    </MainContext.Provider>
  );
};

export default Main;
