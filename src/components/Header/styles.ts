import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")<{ $isHomePage?: boolean }>`
  padding: 1.5rem 0;
  background: ${(props) => (props.$isHomePage ? "transparent" : "#ffffff")};
  box-shadow: ${(props) =>
    props.$isHomePage ? "none" : "0 2px 8px rgba(0, 0, 0, 0.05)"};
  position: relative;
  z-index: 999;

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const Burger = styled("div")<{ $isHomePage?: boolean }>`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;

  svg {
    fill: ${(props) => (props.$isHomePage ? "#ffffff" : "#C8102E")};
    filter: ${(props) =>
      props.$isHomePage ? "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))" : "none"};
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
  color: #333333;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const CustomNavLinkSmall = styled(NavLink)<{ $isHomePage?: boolean }>`
  font-size: 15px;
  color: ${(props) => (props.$isHomePage ? "#ffffff" : "#333333")};
  transition: all 0.2s ease-in;
  margin: 0.5rem 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-shadow: ${(props) =>
    props.$isHomePage ? "0 2px 4px rgba(0, 0, 0, 0.3)" : "none"};

  &:hover {
    color: #C8102E;
  }

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
    font-size: 16px;
  }

  @media only screen and (max-width: 890px) {
    .ant-drawer & {
      color: #333333;
      text-shadow: none;
    }
  }
`;

export const Label = styled("span")`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #C8102E;
  }
`;
