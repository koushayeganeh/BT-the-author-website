import React, { useEffect, useState } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [words, setWords] = useState([]);
  const [categoryImageSrc, setCategoryImageSrc] = useState("");
  const [wordCategories] = useState([
    [
      "Çatışma",
      "Kaos",
      "İlüzyon",
      "Cehalet",
      "Bencillik",
      "Tuzak",
      "Korku",
      "Cinnet",
      "İhanet",
      "Cinayet",
      "Kitle",
      "Yalan",
      "Hüküm",
    ],
    [
      "Bireysel ders",
      "Erkek",
      "Alfa",
      "Sigma",
      "Karakter",
      "Koruyucu",
      "Saldırgan",
      "Kadın",
      "Yaralı",
      "Önderlik",
      "Kitlenin üzerinde olmak",
      "Varlık",
      "Strateji",
    ],
    [
      "Düşünme",
      "Harekete geçme",
      "Düşündürme",
      "Harekete geçirme",
      "Koruma",
      "Yok etme",
      "Yaratma",
      "Dayatma",
      "Kabul görme",
      "Hareket",
      "Kıskançlık",
      "Nefret",
      "Hata",
    ],
    [
      "Bakıcı",
      "İyileştirici",
      "Güven",
      "Şükretme",
      "Sevgi",
      "Koruyucu",
      "Kurtarıcı",
      "Huzur",
      "Ait olma",
      "Acıma",
      "Anlama",
      "Empati",
      "Bilme",
    ],
    [
      "Sebep",
      "Daha derin sebep",
      "Sonuç",
      "Dolaylı sonuç",
      "Doğru nedir?",
      "Siyasal haklılık",
      "Tarih ve gerçek",
      "Bireysel hikaye",
      "Devlet anlayışı",
      "Toprak",
      "Hakkaniyet",
      "Karar vericiler",
      "Söylev",
    ],
    [
      "Hakim",
      "Sanık",
      "Kanun",
      "Haklı",
      "Suçlu",
      "Suçsuz",
      "Tabi olmak",
      "İsyan etmek",
      "Hak iddia etmek",
      "Şiddet",
      "Toplu hasar",
      "Haksız",
    ],
    [
      "Yeni düzen",
      "Kimlik",
      "Son durum",
      "Başlanan Nokta",
      "Gelinen hal",
      "Kazanımlar",
      "Kayıplar",
      "Birleşik yapı",
      "Bölünmüş yapı",
      "Entropi",
      "Etki",
      "Tepki ",
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
        height: "100%",
        backgroundColor: "black",
        overflow: "hidden",
      }}
    >
      <div
        className="overlay-color"
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          width: "100%",
          height: "100%",
          opacity: "0.4",
          zIndex: "1",
          overflow: "hidden",
          pointerEvents: "none",
        }}
      ></div>
      <section className="hero" id="heroSection">
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
              // marginRight: "2rem",
              marginBottom: "-50px",
              cursor: "pointer",
              opacity: word.category === activeCategoryIndex ? "1" : "0.3",
            }}
          >
            {word.word}
          </span>
        ))}
      </section>

      <div className="overlay">
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
              width: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
