import React, { useCallback } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import CardContainer from "./CardContainer";

const changeColor = keyframes`
  0% {
    color: var(--primary);
  }

  to {
    color: var(--secondary);
  }
`;

const changeColorOut = keyframes`
  0% {
    color: var(--primary);
  }

  to {
    color: var(--secondary);
  }
`;

const StyledUpcomingBooksContainer = styled.section`
  align-self: stretch;
  background-color: var(--grey);
  background-image: url("books-papers.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-13xl) var(--padding-71xl);
  align-items: center;
  justify-content: center;
  position: relative;
  gap: var(--gap-41xl);
  z-index: 4;
  text-align: left;
  font-size: var(--heading-large-size);
  color: var(--secondary);
  font-family: var(--title-medium);

  @media (max-width: 1400px) {
    padding: var(--padding-13xl) var(--padding-base);
  }

  @media (max-width: 768px) {
    padding: var(--padding-13xl) var(--padding-5xs);
  }
`;

const InnerContent = styled.div`
  align-self: stretch;
  background-color: rgba(218, 218, 218, 0.8);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: var(--gap-41xl);
  z-index: 4;
  text-align: left;
  font-size: var(--heading-large-size);
  color: var(--secondary);
  font-family: var(--title-medium);
  width: 100%;
  max-width: var(--max-inner-width);
  padding: 2rem;
  border-radius: 0.5rem;

  @media (max-width: 1400px) {
    flex-direction: column;
    width: 100%;
    padding: 0 var(--padding-5xs);
  }

  @media (max-width: 768px) {
    padding: 0 var(--padding-5xs);
    gap: var(--gap-xl);
  }
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 0;
`;

const Title = styled.h1`
  margin: 0;
  align-self: center;
  position: relative;
  font-size: var(--font-size-heading-large);
  line-height: var(--font-size-heading-large-height);
  font-weight: 700;
  font-family: var(--font-sans-serif);
  letter-spacing: 0.15rem;
  cursor: pointer;

  &:hover {
    animation: 0.4s ease-in-out 0s 1 forwards ${changeColor};
  }

  &:not(:hover) {
    animation: 0.2s ease-in-out 0s 1 forwards ${changeColorOut};
  }

  @media (max-width: 1400px) {
    font-size: var(--font-size-heading-medium);
    line-height: var(--font-size-heading-medium-height);
    padding-top: 2rem;
    padding-bottom: 0rem;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-heading-small);
    line-height: var(--font-size-heading-small-height);
  }
`;

const List = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  flex-direction: column;
  padding: var(--padding-xl) 0;
  justify-content: center;
  gap: 1.6rem;
  z-index: 1;
  font-size: var(--title-large-size);
  color: var(--color-black);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const UpcomingBooksContainer = () => {
  const navigate = useNavigate();

  const onRowContainerClick = useCallback(
    (bookID) => {
      navigate(`/library/${bookID}`);
    },
    [navigate]
  );

  const onTitleClick = useCallback(() => {
    navigate("/library");
  }, [navigate]);

  return (
    <StyledUpcomingBooksContainer id="library-section">
      <InnerContent>
        <Container>
          <Title id="library-heading" onClick={onTitleClick}>
            Yakında Çıkacak Kitaplar
          </Title>
        </Container>
        <List>
          <CardContainer
            bookID="1"
            title="Sessiz Tanıkların Gözüyle"
            subtitle="Bir Romanın Anlatımıyla 20. Yüzyılın Karanlık Sayfaları"
            subtitle1="Bu roman, Ermeni-Türk çatışmalarının iç yüzünü ve trajik sonuçlarını, insan hikayeleri aracılığıyla duygusal bir perspektifle anlatıyor."
            labelText="Tarih"
            labelText1="Dram"
            labelText2="Sosyal"
            labelText3="Politik"
            propBackgroundImage="url('/image-container3@3x.png')"
            onRowContainerClick={() => onRowContainerClick(1)}
          />
          <CardContainer
            bookID="2"
            title="Günışığı Gözyaşları"
            subtitle="Bir Kadının İç Dünyasına Yolculuk"
            subtitle1="Modern dünyanın meydan okumalarıyla başa çıkmaya çalışan bir kadının içsel yolculuğunu keşfedin. Aşk, aile ve özgürlük temaları etrafında dokunan bu dokunaklı hikaye, güç ve hassasiyetin kesişimini gösteriyor."
            labelText="Roman"
            labelText1="Duygusal"
            labelText2="Karakterler"
            labelText3="Aile ve İlişkiler"
            propBackgroundImage="url('/image-container3@3x.png')"
            onRowContainerClick={() => onRowContainerClick(2)}
          />
          <CardContainer
            bookID="3"
            title="Kayıp Kıta"
            subtitle="Bir Masalın İçsel Yolculuğu"
            subtitle1="Rüyaların ve gerçekliğin arasında kaybolurken, çocuğun iç dünyası büyülü bir ormanın derinliklerine dönüşüyor. Ruhunu aydınlatmak için bilinmezlerle dolu bu yolculuğa çıkın."
            labelText="Roman"
            labelText1="Spiritüel"
            labelText2="Çocuk"
            labelText3="Keşif ve Büyüme"
            propBackgroundImage="url('/image-container3@3x.png')"
            onRowContainerClick={() => onRowContainerClick(3)}
          />
          <CardContainer
            bookID="4"
            title="Sonsuzun İzinde"
            subtitle="Işığın Kalbindeki Sırrı Keşfetmek"
            subtitle1="Güneşe doğru uzanan bir hayal ile başladı her şey. Bir grup vızıldayan rüyacı, dünya dışında bir yerde olan o büyülü yerin peşine düştü."
            labelText="Roman"
            labelText1="Bilim-Fantazi "
            labelText2="Yıldızlararası "
            labelText3="Evrensel Gizemler"
            propBackgroundImage="url('/image-container4@3x.png')"
            onRowContainerClick={() => onRowContainerClick(4)}
          />
        </List>
      </InnerContent>
    </StyledUpcomingBooksContainer>
  );
};

export default UpcomingBooksContainer;
