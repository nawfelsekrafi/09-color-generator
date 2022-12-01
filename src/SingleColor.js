import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ item }) => {
  const { rgb, type, hex, weight } = item;
  const color = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  return (
    <div
      className={type === "shade" ? "color color-light" : "color"}
      style={{ background: color }}
    >
      <p className="percent-value">{weight + "%"}</p>
      <p className="color-value">{"#" + hex}</p>
    </div>
  );
};

export default SingleColor;
