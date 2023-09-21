import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden; /* Ensure canvas fits within the container */
`;

// Create a styled canvas element
const StyledCanvas = styled.canvas`
  width: 100%;
  height: 100%;
  /* Add additional styles here */
`;

const HeaderCanvasAgents = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    function updateCanvasDimensions() {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    }

    window.addEventListener("resize", updateCanvasDimensions);
    updateCanvasDimensions();

    const squares = [];
    const circles = [];

    function draw() {
      context.clearRect(0, 0, canvas.width, canvas.height);

      squares.forEach((square) => {
        context.beginPath();
        context.rect(square.x, square.y, square.size, square.size);
        context.strokeStyle = "white";
        context.lineWidth = 2;
        context.stroke();

        // Update square position with vibration
        square.x += square.vibrationX;
        square.y += square.vibrationY;

        // Apply random vibration to the square's position
        square.vibrationX = (Math.random() - 0.5) * square.vibrationStrength;
        square.vibrationY = (Math.random() - 0.5) * square.vibrationStrength;
      });

      circles.forEach((circle) => {
        context.beginPath();
        context.arc(
          circle.x + circle.size / 2,
          circle.y + circle.size / 2,
          circle.radius,
          0,
          2 * Math.PI
        );
        context.strokeStyle = "white";
        context.lineWidth = 2;
        context.stroke();
      });

      requestAnimationFrame(draw);
    }

    // Create 23 squares with random positions, dimensions, and vibration strength
    for (let i = 0; i < 23; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 1000 + 100; // Random size between 20 and 120
      const vibrationStrength = Math.random() * 1 + 0; // Random strength between 0 and 1
      let vibrationX = 0;
      let vibrationY = 0;

      const square = {
        x,
        y,
        size,
        vibrationStrength,
        vibrationX,
        vibrationY,
        isHovered: false,
      };

      const circle = {
        x,
        y,
        size,
        radius: 0,
      };

      // Add event listeners for mouse enter and mouse leave on each square
      canvas.addEventListener("mouseenter", () => {
        square.isHovered = true;
        circle.radius = size / 2; // Increase circle radius on hover
      });
      canvas.addEventListener("mouseleave", () => {
        square.isHovered = false;
        circle.radius = 0; // Reset circle radius
      });

      squares.push(square);
      circles.push(circle);
    }

    // Start the animation loop
    draw();

    // Cleanup event listeners if necessary
    return () => {
      window.removeEventListener("resize", updateCanvasDimensions);
    };
  }, []);

  return (
    <CanvasContainer>
      <StyledCanvas ref={canvasRef} />
    </CanvasContainer>
  );
};

export default HeaderCanvasAgents;
