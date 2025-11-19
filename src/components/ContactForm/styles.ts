import styled from "styled-components";

export const ContactContainer = styled("div")`
  padding: 8rem 3rem;
  background: #ffffff;
  overflow: 'hidden';
  border-top: 3px solid #C8102E;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 1024px) {
    padding: 5rem 2rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

export const FormGroup = styled("form")`
  width: 100%;
  max-width: 560px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2.5rem;
  }
`;

export const Span = styled("span")`
  display: block;
  font-weight: 600;
  color: #C8102E;
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;
