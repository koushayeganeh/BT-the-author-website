import React, { useEffect, useRef } from "react";
import "./InteractiveVisual.css";

const InteractiveVisual = () => {
  const canvasRef = useRef(null);
  const canvasSketch = require("canvas-sketch");

  useEffect(() => {
    const canvas = document.getElementById("myCanvas"); // Get the custom canvas element by its ID
    const context = canvas.getContext("2d");

    const settings = {
      context, // Pass the custom canvas context
      dimensions: [2048, 2048],
      animate: true,
    };

    // Your existing canvasSketch code here

    const sketch = () => {
      return ({ context, width, height }) => {
        context.fillStyle = "black";
        context.fillRect(0, 0, width, height);
        context.lineWidth = width * 0.006;

        const w = width * 0.1;
        const h = height * 0.1;
        const gap = width * 0.03;
        const ix = width * 0.17;
        const iy = height * 0.17;
        const off = width * 0.02;

        let x, y;

        for (let i = 0; i < 5; i++) {
          for (let j = 0; j < 5; j++) {
            x = ix + (w + gap) * i;
            y = iy + (h + gap) * j;

            context.strokeStyle = "white";
            if (i == 0 && j == 0) {
              context.strokeStyle = "yellow";
            }
            context.beginPath();
            context.rect(x, y, w, h);
            context.stroke();

            if (Math.random() > 0.5) {
              context.beginPath();
              context.rect(x + off / 2, y + off / 2, w - off, h - off);
              context.stroke();
            }
          }
        }
      };
    };

    canvasSketch(sketch, settings);
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="interactive-visual-container">
      <canvas ref={canvasRef} id="myCanvas" width="100%" height="100%"></canvas>
    </div>
  );
};

export default InteractiveVisual;
