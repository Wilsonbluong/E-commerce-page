import styled from "styled-components/macro";

export const Form = styled.form`
  grid-area: email;
`;

export const FooterLinkTitle = styled.h2`
  grid-area: sign;
  margin-bottom: 1em;
  font-size: 0.8rem;
  color: black;
  text-transform: uppercase;
  font-weight: 400;
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
  @media (min-width: 750px) {
    max-width: 325px;
  }
`;

export const FooterSignUp = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;

  display: grid;
  grid-template-areas:
    "sign"
    "access"
    "email";

  // @media (min-width: 750px) {
  //   justify-content: flex-start;
  //   min-width: 325px;
  }
`;

export const FooterSubtext = styled.div`
  grid-area: access;

  font-size: 0.75rem;
  color: #797676;
  margin-bottom: 0.75em;

  @media (min-width: 750px) {
    width: 325px;
  }
`;

export const FormButton = styled.button`
  padding: 0.75rem;
  width: 100%;
  font-size: 0.8rem;
  text-transform: uppercase;
  background-color: #222222;
  color: #fff;
  cursor: pointer;

  @media (min-width: 750px) {
    width: 325px;
  }
`;

export const FormErrors = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5em 0;
`;

export const Errors = styled.p`
  color: #cd0707;
  font-size: 0.65rem;
  margin: 0;
  letter-spacing: 0.5px;
`;
