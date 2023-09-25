import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url("library-1-back.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  overflow: hidden;
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 60%;
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
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const LibraryHeaderContainer = () => {
  const canvasRef = useRef(null);
  const words = [
    "Hayatın anlamı sorgulanır.",
    "İnsanlar özgür iradeye sahiptir.",
    "Gerçeklik subjektif bir kavramdır.",
    "Aşkın sırrı her zaman çözülemez.",
    "Bilgi sonsuz bir okyanustur.",
    "Sanat duyguların diliyle konuşur.",
    "Doğa insanın bir parçasıdır.",
    "Zaman her şeyin ilacıdır.",
    "Adalet kör olmalıdır.",
    "Umut sonsuz bir kaynaktır.",
    "İyilik her zaman karşılık beklemez.",
    "Bireysellik ve toplumsal bağlar arasındaki denge hassastır.",
    "Sessizlik de bir cevaptır.",
    "Müzik ruhun gıdasıdır.",
    "Düşler gerçeklerin öncüsüdür.",
    "Güzellik gözde değil, ruhta bulunur.",
    "Duygular karmaşık bir labirenttir.",
    "Bilgelik yaşamın özüdür.",
    "Sorular düşünmenin başlangıcıdır.",
    "Kaosun içindeki düzeni bulmak bir sanattır.",
    "Karanlıkta bile umut vardır.",
    "Bir kitap bir dünyayı değiştirebilir.",
    "Sözler bir köprüdür insanlar arasında.",
    "Bir gülümseme bin kelimeye bedeldir.",
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
      const fontSize = getRandomInt(12, 32);
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

        wordObj.x -= wordObj.speed * 0.04;

        if (wordObj.x + ctx.measureText(wordObj.word).width < 0) {
          // Reset word position when it goes out of the canvas to the left
          wordObj.x = canvas.width;
          wordObj.y = getRandomInt(0, canvas.height);
        }
        ctx.fillText(wordObj.word, wordObj.x, wordObj.y);
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
        <OverlayImage src="/library-1-front.png" alt="Overlay Image" />
      </OverlayContainer>
    </Container>
  );
};

export default LibraryHeaderContainer;
