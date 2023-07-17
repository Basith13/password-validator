import { useCallback } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import myGif from "./assets/images/sample.gif";
function App() {
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate("/password");
  }, []);
  return (
    <div className="App">
      <div
        style={{
        position:'absolute',
        top:'300px',
        left:'15%'



        }}
      >
        <img src={myGif} alt="No Img" style={{height:'350px', width:"350px"}}/>
      </div>
      <div>
        <div className="nameClass">
          <h2 >Mohameda Basith</h2>
          <h4 >Fullstack Developer</h4>
          <button className="buttonTask" onClick={handleNavigate}>
            VIEW TASK
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
