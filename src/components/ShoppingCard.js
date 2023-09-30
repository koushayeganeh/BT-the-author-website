import { useCallback } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import bookData from "../pages/bookData.js";

const ShoppingCardContainer = styled.div``;

const IconsOuterContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  padding: var(--padding-9xs) 0;
  z-index: 0;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.5rem;
  }
`;

const IconsInnerContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  border-radius: var(--br-7xs);
  background-color: var(--white);
  padding: var(--padding-22xl) var(--padding-12xl);

  @media (max-width: 960px) {
    padding: var(--padding-13xl) 1rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const FrameGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: var(--gap-15xl);

  @media (max-width: 768px) {
    gap: var(--gap-5xl);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--gap-xs);
  }
`;

const IconImg = styled.img`
  position: relative;
  width: 6.25rem;
  height: 6.25rem;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    border: 4px solid var(--color-black);
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    position: relative;
    width: 4.25rem;
    height: 4.25rem;
    object-fit: cover;
  }
`;

const IconLabel = styled.div`
  position: relative;
  letter-spacing: 0.1px;
  line-height: 1.25rem;
  font-weight: 500;
`;

const ShoppingCard = () => {
  const { bookID } = useParams();

  // Find the book object with a matching ID
  const book = bookData.find((item) => item.id === parseInt(bookID));

  const onImage27Click = useCallback(() => {
    window.open(book.amazon);
  }, []);

  const onImage28Click = useCallback(() => {
    window.open(book.ebay);
  }, []);

  const onImage29Click = useCallback(() => {
    window.open(book.aliexpress);
  }, []);

  const onImage30Click = useCallback(() => {
    window.open(book.bookshop);
  }, []);

  return (
    <ShoppingCardContainer>
      <IconsOuterContainer>
        <IconsInnerContainer>
          <FrameGroup>
            <IconWrapper>
              <IconImg
                alt=""
                src="/image-271@2x.png"
                onClick={onImage27Click}
              />
              <IconLabel>Amazon</IconLabel>
            </IconWrapper>
            <IconWrapper>
              <IconImg
                alt=""
                src="/image-281@2x.png"
                onClick={onImage28Click}
              />
              <IconLabel>eBay</IconLabel>
            </IconWrapper>
            <IconWrapper>
              <IconImg alt="" src="/image-29@2x.png" onClick={onImage29Click} />
              <IconLabel>Aliexpress</IconLabel>
            </IconWrapper>
            <IconWrapper>
              <IconImg alt="" src="/image-30@2x.png" onClick={onImage30Click} />
              <IconLabel>Bookshop</IconLabel>
            </IconWrapper>
          </FrameGroup>
        </IconsInnerContainer>
      </IconsOuterContainer>
    </ShoppingCardContainer>
  );
};

export default ShoppingCard;
