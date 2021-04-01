import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { FaMagento } from "react-icons/fa";

export const FooterContainer = styled.div`
  background-color: #f1f1f1;
  overflow: scroll;
  padding: 1rem 0.5rem;
  display: grid;
  grid-template-areas:
    " links "
    " store "
    "."
    " connect "
    " download "
    " privacy "
    " rights ";

  @media (min-width: 930px) {
    grid-row: 2/3;
    grid-column: 3/4;
  })
`;

export const FooterLinksContainer = styled.div`
  display: flex;
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-area: links;
  margin: 16px;
  width: 145px;
  box-sizing: border-box;
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 1em;
  font-size: 0.75rem;
  color: black;
  text-transform: uppercase;
  font-weight: 400;
`;

export const FooterPrivacy = styled.div`
  grid-area: privacy;
  font-size: 0.75rem;
  color: #797676;
  margin-top: 1em;
  margin-left: 1em;
  margin-bottom: 0.75em;

  @media (min-width: 750px) {
    grid-column: 1/3;
  }

    @media (min-width: 930px) {
 grid-column: 1/4;
  })
`;

export const FooterRights = styled.div`
  grid-area: rights;
  font-size: 0.75rem;
  color: #797676;
  margin-top: 1em;
  margin-left: 1em;
  margin-bottom: 0.75em;

  @media (min-width: 750px) {
    grid-column: 1/3;

  @media (min-width: 930px) {
  grid-column: 1/4;
  })
`;

export const FooterLink = styled(Link)`
  font-size: 0.75rem;
  color: #797676;
  text-decoration: none;
  margin-bottom: 0.5rem;
  &:hover {
    text-decoration: underline;
    transition: 0.3s ease-out;
  }
`;

export const FooterStoreFinder = styled.div`
  grid-area: store;
  margin: 16px;

  @media (min-width: 750px) {
    width: 325px;
    grid-column: 2/3;
  }

  @media (min-width: 1000px) {
    grid-row: 1;
    grid-column: 3/4;
  })
`;

export const Form = styled.form`
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
`;

export const FormInput = styled.input`
  padding: 0.75rem;
  margin-bottom: 1em;
  outline: none;
  border: 1.5px solid lightgrey;
  font-size: 0.8rem;
  width: 100%;
  &::placeholder {
    color: grey;
  }
  &:hover,
  &:focus {
    border: 1px solid blue;
  }
`;

export const SocialMediaWrap = styled.div`
  grid-area: connect;
  margin-left: 16px;

  @media (min-width: 750px) {
    grid-column: 2/3;
    // grid-template-areas: " store connect ";
  }
`;

export const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

export const SocialIconLink = styled.a`
  color: gray;
  font-size: 18px;
`;

export const Download = styled.div`
  grid-area: download;
  margin: 16px 0 0 16px;

  @media (min-width: 750px) {
    grid-column: 2/3;
  }
`;

export const DownloadImgs = styled.div``;
