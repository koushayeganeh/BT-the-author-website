import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [words, setWords] = useState([]);
  const [categoryImageSrc, setCategoryImageSrc] = useState("");
  const [wordCategories] = useState([
    [
      "apple",
      "banana",
      "cherry",
      "orange",
      "grape",
      "pear",
      "pineapple",
      "strawberry",
      "blueberry",
      "watermelon",
      "kiwi",
      "mango",
      "peach",
    ],
    [
      "potato",
      "tomato",
      "eggplant",
      "bell pepper",
      "onion",
      "garlic",
      "spinach",
      "lettuce",
      "kale",
      "cabbage",
      "broccoli",
      "cauliflower",
      "peas",
    ],
    [
      "cat",
      "dog",
      "rabbit",
      "hamster",
      "parrot",
      "goldfish",
      "turtle",
      "guinea pig",
      "ferret",
      "canary",
      "gerbil",
      "hedgehog",
      "chinchilla",
    ],
    [
      "book",
      "pen",
      "paper",
      "pencil",
      "notebook",
      "marker",
      "eraser",
      "crayon",
      "ruler",
      "scissors",
      "glue",
      "stapler",
      "calculator",
    ],
    [
      "mountain",
      "ocean",
      "river",
      "lake",
      "forest",
      "desert",
      "valley",
      "canyon",
      "beach",
      "island",
      "volcano",
      "waterfall",
      "cave",
    ],
    [
      "car",
      "bicycle",
      "motorcycle",
      "bus",
      "train",
      "airplane",
      "ship",
      "truck",
      "taxi",
      "scooter",
      "helicopter",
      "subway",
      "boat",
    ],
    [
      "music",
      "art",
      "dance",
      "theater",
      "film",
      "literature",
      "photography",
      "sculpture",
      "architecture",
      "poetry",
      "design",
      "ceramics",
      "fashion",
    ],
  ]);

  const [hovering, setHovering] = useState(false);

  const imageUrls = [
    "https://images.unsplash.com/photo-1625504159043-46db66f25136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    "https://images.unsplash.com/photo-1543280207-5f62a4c20be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    "https://images.unsplash.com/photo-1484406566174-9da000fda645?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1978&q=80",
    "https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    "https://images.unsplash.com/photo-1682685794304-99d3d07c57d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
    "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1937&q=80",
    "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    // ... (add URLs for other images)
  ];

  useEffect(() => {
    const generateRandomWords = () => {
      if (words.length === 0) {
        let randomWords = [];
        for (let i = 0; i < 600; i++) {
          const randomCategoryIndex = Math.floor(
            Math.random() * wordCategories.length
          );
          const randomCategory = wordCategories[randomCategoryIndex];
          const randomWordIndex = Math.floor(
            Math.random() * randomCategory.length
          );
          randomWords.push({
            word: randomCategory[randomWordIndex],
            category: randomCategoryIndex,
          });
        }
        setWords(randomWords);
      }
    };

    generateRandomWords();

    const categoryChangeInterval = setInterval(() => {
      if (!hovering) {
        setActiveCategoryIndex(
          (prevIndex) => (prevIndex + 1) % wordCategories.length
        );
        setCategoryImageSrc(imageUrls[activeCategoryIndex]);
      }
    }, 3000);

    // Initialize the category image on the first load
    setCategoryImageSrc(imageUrls[activeCategoryIndex]);

    return () => {
      clearInterval(categoryChangeInterval);
    };
  }, [wordCategories, hovering, words, activeCategoryIndex, imageUrls]);

  const handleWordMouseOver = (word) => {
    setHovering(true);
    setActiveCategoryIndex(word.category);
    setCategoryImageSrc(imageUrls[word.category]);
  };

  const handleWordMouseOut = () => {
    setHovering(false);
    setCategoryImageSrc(imageUrls[activeCategoryIndex]);
  };

  return (
    <div
      className="hero-container"
      style={{
        position: "relative",
        width: "100%",
        height: "1080px",
        backgroundColor: "black",
      }}
    >
      <section
        className="hero"
        id="heroSection"
        style={{
          position: "relative",
          width: "120%",
          height: "1080px",
          backgroundColor: "#44adff",
          display: "flex",
          flexWrap: "wrap",
          alignContent: "flex-start",
          color: "white",
          fontFamily: "Arial, sans-serif",
          fontSize: "4rem",
          margin: "-100px",
          overflow: "hidden",
        }}
      >
        {words.map((word, index) => (
          <span
            className={`word ${
              word.category === activeCategoryIndex ? "active" : ""
            }`}
            key={index}
            onMouseEnter={() => handleWordMouseOver(word)}
            onMouseLeave={handleWordMouseOut}
            style={{
              transition: "opacity 0.3s ease",
              marginRight: "2rem",
              marginBottom: "10px",
              cursor: "pointer",
              opacity: word.category === activeCategoryIndex ? "1" : "0.3",
            }}
          >
            {word.word}
          </span>
        ))}
      </section>
      <div
        className="overlay"
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          width: "40%",
          height: "100%",
          opacity: "0.8",
          zIndex: "2",
          overflow: "hidden",
        }}
      >
        <div
          className="image-container"
          id="categoryImage"
          style={{ width: "100%", height: "100%", overflow: "hidden" }}
        >
          <img
            src={categoryImageSrc}
            alt="Category Image"
            style={{
              maxWidth: "none",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
