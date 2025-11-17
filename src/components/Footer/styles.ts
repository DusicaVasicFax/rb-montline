import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled("footer")`
  position: relative;
  padding: 4rem 0 3rem;
  color: #ffffff;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/img/kabl.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(10px);
    transform: scale(1.1);
    z-index: -1;
  }

  h4, label {
    color: #ffffff !important;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
`;

export const Title = styled("h4")`
  font-size: 18px;
  text-transform: uppercase;
  color: #C8102E;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;
  color: #ffffff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);

  &:hover,
  &:active,
  &:focus {
    color: #C8102E;
  }
`;

export const Extra = styled("section")`
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-top: -4rem;
  padding: 2rem 0;
  padding-top: 6rem;
  color: #ffffff;
  overflow: hidden;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% + 4rem);
    background-image: url('/img/kabl.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(10px);
    transform: scale(1.1);
    z-index: -1;
  }

  a {
    color: #ffffff;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    &:hover {
      color: #C8102E;
    }
  }
`;

export const LogoContainer = styled("div")`
  display: flex;
  position: relative;
`;

export const Para = styled("div")`
  color: #ffffff;
  font-size: 15px;
  line-height: 1.7;
  margin-bottom: 0.5rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
`;

export const Large = styled(Link)`
  font-size: 15px;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  line-height: 1.7;
  display: block;
  margin-bottom: 0.75rem;
  max-width: max-content;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);

  &:hover {
    color: #C8102E;
    text-decoration: none;
    transform: translateX(3px);
  }
`;

export const Chat = styled("p")`
  color: #C8102E;
  max-width: fit-content;
  border-bottom: 1px solid #C8102E;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-bottom: 1px solid #FFD700;
    color: #FFD700;
  }
`;

export const Empty = styled("div")`
  position: relative;
  height: 53px;
`;

export const FooterContainer = styled("div")`
  max-width: 510px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  transition: all 0.1s ease-in-out;

  a {
    &:hover,
    &:active,
    &:focus {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 769px) {
    width: auto;

    a:not(:last-child) {
      display: none;
    }
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: #FFD700;
    }
  }
`;

export const Language = styled("h4")`
  font-size: 18px;
  text-transform: uppercase;
  color: #C8102E;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const Label = styled("label")`
  font-size: 18px;
  text-transform: uppercase;
  color: #C8102E;
  display: block;
  margin-bottom: 1.5rem;
  font-family: "Motiva Sans Bold", serif;
  font-weight: 700;
  letter-spacing: 0.5px;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
    margin-bottom: 1rem;
  }
`;

export const LanguageSwitch = styled("div")`
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const LanguageSwitchContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 85px;
`;