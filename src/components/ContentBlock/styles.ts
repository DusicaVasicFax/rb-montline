import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")<{ id?: string }>`
  position: relative;
  padding: 8rem 3rem;
  background: ${(props) =>
    props.id === "about" ? "#ffffff" :
    props.id === "mission" ? "#f8f9fa" :
    props.id === "product" ? "#ffffff" : "#ffffff"};
  border-bottom: ${(props) =>
    props.id === "product" ? "none" : "1px solid #e9ecef"};
  margin-bottom: ${(props) =>
    props.id === "about" || props.id === "mission" ? "3rem" : "0"};
  opacity: 0.9;

  @media only screen and (max-width: 1024px) {
    padding: 5rem 2rem;
    margin-bottom: ${(props) =>
      props.id === "about" || props.id === "mission" ? "2rem" : "0"};
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 1.5rem;
    margin-bottom: ${(props) =>
      props.id === "about" || props.id === "mission" ? "1.5rem" : "0"};
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2.5rem 0;
  max-width: 600px;
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 600px;
  padding: 2rem 1.5rem;

  @media only screen and (max-width: 575px) {
    padding: 3rem 1rem 2rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #C8102E;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;
