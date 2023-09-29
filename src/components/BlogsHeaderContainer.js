import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url("blogs-1-back-g.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  overflow: hidden;
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const OverlayContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const OverlayImageHome = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const OverlayImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const BlogsHeaderContainer = () => {
  const canvasRef = useRef(null);
  const words = [
    "Yaşam", // Life
    "Tarih", // History
    "İlham", // Inspiration
    "Biyografi", // Biography
    "Keşif", // Discovery
    "Başarı", // Success
    "Değişim", // Change
    "Öğrenme", // Learning
    "İlerleme", // Progress
    "İnsanlık", // Humanity
    "Gelecek", // Future
    "Miras", // Heritage
    "Bilgelik", // Wisdom
    "Başkaldırı", // Rebellion
    "Aydınlanma", // Enlightenment
    "Özgürlük", // Freedom
    "Macera", // Adventure
    "Dönüşüm", // Transformation
    "İyilik", // Goodness
    "Umutsuzluk", // Despair
    "Zafer", // Victory
    "Başarı Hikayesi", // Success Story
    "Hayatın Anlamı", // Meaning of Life
    "İnsan Hakları", // Human Rights
  ];

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set the canvas width and height attributes to match the CSS size and device pixel ratio
    const dpi = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * dpi;
    canvas.height = canvas.clientHeight * dpi;

    // Adjust canvas rendering context for sharp text
    ctx.scale(dpi, dpi);
    ctx.font = "16px Arial"; // Adjust font size and family
    ctx.imageSmoothingEnabled = false; // Disable anti-aliasing

    const getRandomInt = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const wordObjects = words.map((word) => {
      const fontSize = getRandomInt(18, 72);
      const speed = getRandomInt(1, 10);
      const x = getRandomInt(0, canvas.width); // Random initial x position within the canvas
      const y = getRandomInt(0, canvas.height);

      ctx.font = `${fontSize}px Arial`;
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)"; // Adjust opacity here

      return {
        word,
        x,
        y,
        fontSize,
        speed,
      };
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      wordObjects.forEach((wordObj) => {
        ctx.font = `${wordObj.fontSize}px 'Bebas Neue', sans-serif`;
        ctx.fillText(wordObj.word, wordObj.x, wordObj.y);

        wordObj.x += wordObj.speed * 0.03;

        if (wordObj.x > canvas.width) {
          // Reset word position when it goes out of the canvas
          wordObj.x = -ctx.measureText(wordObj.word).width;
          wordObj.y = getRandomInt(0, canvas.height);
        }
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <Container
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Canvas ref={canvasRef} />
      <OverlayContainer>
        {isHovering && (
          <OverlayImageHome src="/persona-home.png" alt="Overlay Image" />
        )}
        <OverlayImage src="/blogs-1-front.png" alt="Overlay Image" />
      </OverlayContainer>
    </Container>
  );
};

export default BlogsHeaderContainer;
