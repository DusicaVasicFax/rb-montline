import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 8rem 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  background: #ffffff;
  border-bottom: 1px solid #e9ecef;
  margin-bottom: 3rem;

  @media screen and (max-width: 1024px) {
    padding: 5rem 2rem;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 768px) {
    padding: 4rem 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

export const Content = styled("p")`
  padding: 1rem 0 1.5rem;
  line-height: 1.8;
`;

export const ContentWrapper = styled("div")`
  max-width: 700px;
  padding: 0 3rem;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0 2rem;
  }

  @media only screen and (max-width: 480px) {
    padding: 0 1rem;
  }
`;
