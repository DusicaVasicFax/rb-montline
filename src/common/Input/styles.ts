import styled from "styled-components";

export const Container = styled("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`;

export const StyledInput = styled("input")`
  font-size: 0.875rem;
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e9ecef;
  border-radius: 4px;
  background: #ffffff;
  transition: all 0.3s ease;
  color: #495057;

  &:focus {
    outline: none;
    border-color: #C8102E;
    box-shadow: 0 0 0 3px rgba(200, 16, 46, 0.1);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;
