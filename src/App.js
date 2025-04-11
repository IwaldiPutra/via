import "./App.css";
import Ballpit from "./Ballpit";
import Book from "./Book";
import GradientText from "./GradientText";
import flag from "./flag.png";

function App() {
  return (
    <div className="page">
      <div className="ball">
        <Ballpit
          count={75}
          gravity={0.6}
          friction={1}
          wallBounce={1}
          followCursor={false}
          colors={["#6c9dc6", "black", "#6c9dc6"]}
          lightIntensity={10}
          maxSize={0.9}
          minSize={0.4}
        />
      </div>

      <div className="container ">
        <img
          src={flag}
          className="w-100 rounded d-flex mx-auto"
          style={{ maxWidth: "600px", height: "auto" }}
        />

        <GradientText
          colors={["#52b1ff", "#0e76cb", "#52b1ff", "#0e76cb"]}
          animationSpeed={4}
          showBorder={false}
          className="textTitle mt-2"
        >
          Happy Birthday{" "}
        </GradientText>
        <GradientText
          colors={["#52b1ff", "#0e76cb", "#52b1ff", "#0e76cb"]}
          animationSpeed={4}
          showBorder={false}
          className="textTitle2"
        >
          27 TH{" "}
        </GradientText>
        <br />
        <Book />
      </div>
    </div>
  );
}

export default App;
