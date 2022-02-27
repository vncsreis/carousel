import "./App.css";
import Carousel from "./Carousel";

function App() {
  return (
    <div className="App">
      <h1>Carousel</h1>
      <Carousel
        width={250}
        height={300}
        speed={300}
        padding={5}
        view={3}
        step={1}
      >
        <div style={{ width: 250, height: 300, backgroundColor: "green" }}>
          0
        </div>
        <div style={{ width: 250, height: 300, backgroundColor: "blue" }}>
          1
        </div>
        <div style={{ width: 250, height: 300, backgroundColor: "red" }}>2</div>
        <div style={{ width: 250, height: 300, backgroundColor: "purple" }}>
          3
        </div>
        <div style={{ width: 250, height: 300, backgroundColor: "pink" }}>
          4
        </div>
        <div
          style={{ width: 250, height: 300, backgroundColor: "rebeccapurple" }}
        >
          5
        </div>
        <div style={{ width: 250, height: 300, backgroundColor: "slateblue" }}>
          6
        </div>
        <div style={{ width: 250, height: 300, backgroundColor: "slategrey" }}>
          7
        </div>
        <div
          style={{ width: 250, height: 300, backgroundColor: "springgreen" }}
        >
          8
        </div>
      </Carousel>
    </div>
  );
}

export default App;
