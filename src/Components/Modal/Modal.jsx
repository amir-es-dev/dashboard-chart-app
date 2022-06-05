import { useContext, useRef } from "react";
import DashContent from "../DashContent/DashContent";
import MainContext from "../Main/Context/MainContext";
import "./Modal.css";

const Modal = () => {
  const { modal, setModal, charts } = useContext(MainContext);
  const inpRef = useRef();

  const handleSave = () => {
    const inputValue = inpRef.current.value;
    if (inputValue.length === 0) {
      alert("please type anything in the input");
      return;
    }
    localStorage.setItem(`${inputValue}`, JSON.stringify(charts));
    setModal("");
  };

  return (
    <div className="modal-container">
      <div className="modal">
        {modal === "Save" && (
          <>
            <div className="modal-header">
              <span>Save Model</span>
              <button onClick={() => setModal("")}>×</button>
            </div>
            <div className="save-modal">
              <p>Please insert a name for this model</p>
              <input type="text" ref={inpRef} autoFocus minLength={1} />
              <div>
                <button onClick={handleSave}>SAVE</button>
                <button onClick={() => setModal("")}>CANCEL</button>
              </div>
            </div>
          </>
        )}
        {modal === "View Dashboard" && (
          <div className="view-box">
            <div className="modal-header">
              <span>Dashboard</span>
              <button onClick={() => setModal("")}>×</button>
            </div>
            <div className="view-modal">
              <DashContent />
            </div>
          </div>
        )}
        {modal === "JSON Code" && (
          <>
            <div className="modal-header">
              <span>JSON Code</span>
              <button onClick={() => setModal("")}>×</button>
            </div>
            <div className="code-modal">
              <p>{JSON.stringify(charts)}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
