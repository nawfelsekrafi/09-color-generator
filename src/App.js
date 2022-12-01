import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [error, setError] = useState(false);
  const [color, setColor] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setColor(e.target.value)}
            value={color}
            placeholder="#f15025"
            className={error ? "error" : ""}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor item={color} key={index} />;
        })}
      </section>
    </>
  );
}

export default App;
