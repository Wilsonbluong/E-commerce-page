import styled from "styled-components/macro";

export const HeroGridContainer = styled.div`
  display: grid;
  grid-template: 1fr;
  grid-gap: 0.75em;
  margin: 0 auto 1.5em auto;
  max-width: 87%;
  padding: 0;
  @media (min-width: 1150px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const HeroGridCard = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ebebeb;
  padding: 1.5em;
  cursor: pointer;

  @media (min-width: 1150px) {
    padding: 1.5em;
    margin: 0.15em;
  }
`;

export const HeroGridLeft = styled.div``;

export const HeroGridRight = styled.div``;

export const HeroGridTitle = styled.div`
  font-weight: 900;
  font-size: clamp(0.5rem, 0.7rem 0.8rem);
`;

export const HeroGridLink = styled.div`
  font-weight: 900;
  font-size: clamp(0.5rem, 0.7rem 0.8rem);
  text-align: center;
  color: #b4b4b4;
  text-decoration: underline;
`;
