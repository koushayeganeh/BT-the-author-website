import React, { useEffect, useRef, useState } from "react";
import "./HeaderCanvasRects.css";

const HeaderCanvasRects = () => {
  const canvasRef = useRef(null);
  const canvasSketch = require("canvas-sketch");
  const [canvasDimensions, setCanvasDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current; // Get the custom canvas element
    const context = canvas.getContext("2d");

    // Update canvas dimensions when the window is resized
    const updateCanvasDimensions = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      setCanvasDimensions({ width: canvas.width, height: canvas.height });
    };

    window.addEventListener("resize", updateCanvasDimensions);
    updateCanvasDimensions(); // Initial setup

    const settings = {
      context, // Pass the custom canvas context
      dimensions: [canvas.width, canvas.height], // Use canvas width and height
      animate: true,
      fps: 0.5,
      playbackRate: "throttle",
    };

    // Your existing canvasSketch code here

    const sketch = () => {
      return ({ context, width, height }) => {
        context.clearRect(0, 0, width, height);
        // context.fillStyle = "black";
        // context.fillRect(0, 0, width, height);
        context.lineWidth = width * 0.0006;

        const w = 40;
        const h = 50;
        const gap = 10;
        const ix = width * 0;
        const iy = height * 0;
        const off = 6;

        let x, y;

        // Generate random i and j values between 0 and 49 for i, 0 and 9 for j
        const randomI = Math.floor(Math.random() * 50);
        const randomJ = Math.floor(Math.random() * 4);

        for (let i = 0; i < 50; i++) {
          for (let j = 0; j < 10; j++) {
            x = ix + (w + gap) * i;
            y = iy + (h + gap) * j;

            context.strokeStyle = "white";
            if (i == randomI && j == randomJ) {
              context.strokeStyle = "red";
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
    // Cleanup event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateCanvasDimensions);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="interactive-visual-container">
      <canvas ref={canvasRef} id="myCanvas" className="canvas"></canvas>
    </div>
  );
};

export default HeaderCanvasRects;
