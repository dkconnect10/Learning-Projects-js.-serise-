import React, { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed  flex flex-wrapd justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              style={{ backgroundColor: "red" }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            >
              Red
            </button>
            <button
              onClick={() => setColor("Green")}
              style={{ backgroundColor: "Green" }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            >
              Green
            </button>
            <button
              onClick={() => setColor("Blue")}
              style={{ backgroundColor: "Blue" }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            >
              Blue
            </button>
            <button
              onClick={() => setColor("Olive")}
              style={{ backgroundColor: "Olive" }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            >
              Olive
            </button>
            <button
              onClick={() => setColor("Yellow")}
              style={{ backgroundColor: "Yellow" }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("Pink")}
              style={{ backgroundColor: "Pink" }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            >
              Pink
            </button>
            <button
              onClick={() => setColor("Purple")}
              style={{ backgroundColor: "Purple" }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            >
              Purple
            </button>
            <button
              onClick={() => setColor("Lavender")}
              style={{ backgroundColor: "Lavender" }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            >
              Lavender
            </button>
            <button
              onClick={() => setColor("Black")}
              style={{ backgroundColor: "Black" }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            >
              Black
            </button>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
