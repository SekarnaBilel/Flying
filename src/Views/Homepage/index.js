import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Left from "../../img/left.png";
import "./style.css";

const HomepageContainer = () => {
  const navigate = useNavigate();
  const [youShouldNotPass, setYouShouldNotPass] = useState("NOPE");
  const [tryAgain, setTryAgain] = useState(false);

  const mellon = () => {
    if (youShouldNotPass === "NOPE") {
      tryAgain ? navigate("/login") : setTryAgain(true);
    }
  };


  return (
<>

    {/* <img className="left" src={require("../../img/left.png")} />
    <img className="right" src={require("../../img/left.png")} /> */}
      <div
        style={{
          display: "flex",
          flex: 1,
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            alignSelf: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div style={{ marginBottom: 70, fontSize: 30, color:"white" }}>
            Test technique alternant Flying For You
          </div>
          <button
            style={{
              backgroundColor: "#546fe4",
              border: "none",
              padding: "10px 30px",
              borderRadius: 20,
              cursor: "pointer",
              color:"white"
            }}
            onClick={() => mellon()}
          >
            {tryAgain ? "Connecte moi ! (page login)" : "Commencer le test"}
          </button>
          {tryAgain && (
            <div style={{color:"white"}}>Tu ne pensais pas que ce serait si simple ? ...</div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomepageContainer;
