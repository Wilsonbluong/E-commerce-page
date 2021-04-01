import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  padding: 1rem;
  width: 100%;
  border-bottom: 1px solid #d3d3d3;
  text-decoration: none;
  list-style: none;
  transition: 1s ease-in-out;
  color: #000;
  cursor: pointer;

  @media (min-width: 600px) {
    display: none;
  }
`;

export const SidebarLabel = styled.span`
  margin-left: 16px;
`;

export const DropdownLink = styled(Link)`
  background: #fff;
  height: 40px;
  padding-left: 3rem;
  border-bottom: 1px solid #d3d3d3;
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  font-size: 0.75rem;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 600px) {
    display: none;
  }
`;
