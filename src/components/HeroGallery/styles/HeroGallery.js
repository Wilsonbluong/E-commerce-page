import styled from "styled-components/macro";

export const HeroGalleryContainer = styled.div`
  max-width: 87%;
  margin: 0 auto;
`;

export const HeroGalleryMain = styled.div``;

export const HeroGalleryTop = styled.div`
  @media (min-width: 750px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5em;
    margin-bottom: 2.75rem;
  }
`;

export const HeroGalleryBottom = styled.div`
  @media (min-width: 750px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
  }
`;
