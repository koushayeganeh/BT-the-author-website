import React, { useEffect, useRef, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import "./HeaderCanvasAgents.css";

// Define a GlobalStyle to include Google Fonts
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Schoolbell&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
`;

const CanvasContainer = styled.div`
  // Other styles for your canvas container
`;

const HeaderCanvasAgents = () => {
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
      fps: 12,
      playbackRate: "throttle",
    };

    // Your existing canvasSketch code here

    const randomRange = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    const mapRange = (value, inMin, inMax, outMin, outMax) => {
      if (inMin === inMax) {
        throw new Error("inMin and inMax can not be equale");
      }
      value = Math.min(Math.max(value, inMin), inMax);
      const normalizedValue = (value - inMin) / (inMax - inMin);
      return outMin + normalizedValue * (outMax - outMin);
    };

    const words = [
      "Bağlantı",
      "Aşk",
      "Uyum",
      "Enerji",
      "Evren",
      "Ruh",
      "Doğa",
      "Denge",
      "Kucaklama",
      "Farkındalık",
      "Ruhaniyet",
      "Teşekkür",
      "Meditasyon",
      "Empati",
      "Yolculuk",
      "Dönüşüm",
      "Huzur",
      "Kozmik",
      "Aydınlanma",
      "Birlik",
      "Barış",
      "Şuurluluk",
      "İçiçelik",
      "İyileşme",
      "Sezgi",
      "Yansıma",
      "Titreşimler",
      "Uyum",
      "Bilinç",
      "Amaç",
      "Yeniden Doğuş",
      "Rezonans",
      "Birliktelik",
      "Hazır Bulunuş",
      "Kozmik Dans",
      "Maneviyat",
      "Yansıma",
      "Büyüme",
      "Sonsuzluk",
      "İç Huzur",
      "Bağlantı",
      "Lütuf",
      "Uyum",
      "Denge",
      "Yetki",
      "Bereket",
      "Ruhani Uyanış",
      "Evrensel Sevgi",
      "İç Işık",
      "Senkronizasyon",
      "Bilgelik",
      "Teşekkür",
      "Empati",
      "İç Yolculuk",
      "Yükselme",
    ];

    // Function to get a random font family
    function getRandomFontFamily() {
      const fontFamilies = [
        "Shadows Into Light, cursive",
        "Archivo Black, cursive",
        "Permanent Marker, cursive",
        "Schoolbell, cursive",
        "Lobster, cursive",
        // "Helvetica, sans-serif",
        // "Verdana, sans-serif",
        // "Georgia, serif",
        // "Times New Roman, serif",
        // "Courier New, monospace",
      ];
      return fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
    }

    // Randomly select a word from the "words" array
    const randomWords = new Array(60)
      .fill(null)
      .map(() => words[Math.floor(Math.random() * words.length)]);

    const sketch = () => {
      let agents = [];

      for (let i = 0; i < 40; i++) {
        const x = randomRange(0, canvas.width);
        const y = randomRange(0, canvas.height);
        agents.push(new Agent(x, y));
      }

      return ({ context, width, height }) => {
        context.clearRect(0, 0, width, height);
        // context.fillStyle = "black";
        // context.fillRect(0, 0, width, height);
        context.lineWidth = width * 0.0006;

        for (let i = 0; i < agents.length; i++) {
          for (let j = i + 1; j < agents.length; j++) {
            const agent = agents[i];
            const other = agents[j];

            const dx = other.pos.x - agent.pos.x;
            const dy = other.pos.y - agent.pos.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance > 100) continue;

            context.lineWidth = mapRange(distance, 0, 100, 2, 0.5);

            context.beginPath();
            context.strokeStyle = "white";
            context.moveTo(agent.pos.x, agent.pos.y);
            context.lineTo(other.pos.x, other.pos.y);
            context.stroke();
          }
        }

        agents.forEach((agent) => {
          agent.update(width, height);
          agent.draw(context);
        });
      };
    };

    canvasSketch(sketch, settings);

    class Point {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }
    }

    class Agent {
      constructor(x, y) {
        this.pos = new Point(x, y);
        this.r = randomRange(4, 10);
        this.vel = new Point(randomRange(-1, 1), randomRange(-1, 1));
        this.fontFamily = getRandomFontFamily(); // Assign a random font family to the agent
        this.word = randomWords.pop(); // Assign a random word to the agent
      }

      update(width, height) {
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;

        if (this.pos.x <= 0 || this.pos.x >= width) {
          this.vel.x *= -1;
        }
        if (this.pos.y <= 0 || this.pos.y >= height) {
          this.vel.y *= -1;
        }
      }

      draw(context) {
        context.save();
        context.translate(this.pos.x, this.pos.y);
        context.beginPath();

        // Set the text style
        context.fillStyle = "white"; // Text color is white
        context.font = `${this.r * 2}px ${this.fontFamily}`; // Random font size and the assigned font family
        context.textAlign = "center"; // Center align the text

        context.fillText(this.word, 0, 0);
        context.lineWidth = 1;
        context.stroke();
        context.restore();
      }
    }
    // Cleanup event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateCanvasDimensions);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="interactive-visual-container">
      <GlobalStyle /> {/* Include the Google Fonts stylesheet */}
      <canvas ref={canvasRef} id="myCanvas" className="canvas"></canvas>
    </div>
  );
};

export default HeaderCanvasAgents;
