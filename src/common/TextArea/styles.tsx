import styled from "styled-components";

export const StyledContainer = styled("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`;

export const StyledTextArea = styled("textarea")`
  resize: none;
  font-size: 0.875rem;
  height: 185px;
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e9ecef;
  border-radius: 4px;
  background: #ffffff;
  transition: all 0.3s ease;
  color: #495057;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #C8102E;
    box-shadow: 0 0 0 3px rgba(200, 16, 46, 0.1);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

export const Label = styled("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
  color: #212529;
  font-weight: 600;
  font-size: 15px;
`;
