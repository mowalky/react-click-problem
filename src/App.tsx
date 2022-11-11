import React, { useState } from "react";
import "./App.css";

function App() {
  const [circles, setCircles] = useState<any>([]);
  const [history, setHistory] = useState<any>([]);

  const getClickedPosition = (event: React.MouseEvent) => {
    const { screenX, screenY } = event;
    // get x and y of screen clicked
    console.log(event);
    setCircles([...circles, { x: screenX, y: screenY }]);
  };

  const undoCircle = () => {
    let currentCircles = circles;
    const undo = currentCircles.pop();
    let currentHistory = history;
    currentHistory.push(undo);
    setHistory([...currentHistory]);
    console.log(currentCircles);
    setCircles([...currentCircles]);
  };

  const redoCircle = () => {
    let currentHistory = history;
    let lastUndo = currentHistory.pop();
    setHistory(currentHistory);
    setCircles([...circles, lastUndo]);
  };

  return (
    <>
      <button onClick={() => undoCircle()}>Undo</button>
      <button onClick={() => redoCircle()}>Redo</button>
      <div className="App" onClick={(e) => getClickedPosition(e)}>
        {circles.length > 0 &&
          circles.map((circle: any, idx: number) => (
            <div
              key={idx}
              style={{
                position: "absolute",
                width: "50px",
                height: "50px",
                background: "red",
                borderRadius: "50px",
                top: `${circle.y - 150}px`,
                left: `${circle.x - 55}px`,
              }}
            ></div>
          ))}
      </div>
    </>
  );
}

export default App;
