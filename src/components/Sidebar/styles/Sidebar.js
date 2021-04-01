import styled from "styled-components";

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 85px;
  z-index: 999;
  width: 100%;
  height: calc(100vh);
  background: #fff;
  overflow-y: auto;
  transition: 0.5s ease-in-out;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  @media (min-width: 600px) {
    width: 100%;
    display: none;
  }
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (min-width: 600px) {
    display: none;
  }
`;

export const SidebarTab = styled.div`
  font-size: 0.75rem;
  padding: 1rem 2rem;
  width: 100%;
  text-decoration: none;
  list-style: none;
  transition: 1s ease-in-out;
  color: #000;
  cursor: pointer;

  @media (min-width: 600px) {
    display: none;
  }
`;
