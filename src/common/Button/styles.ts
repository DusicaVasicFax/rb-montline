import styled from "styled-components";

export const StyledButton = styled("button")<{ color?: string }>`
  background: ${(p) => p.color || "#C8102E"};
  color: ${(p) => (p.color ? "#C8102E" : "#fff")};
  font-size: 15px;
  font-weight: 600;
  width: 100%;
  border: 2px solid ${(p) => p.color || "#C8102E"};
  border-radius: 2px;
  padding: 14px 32px;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 200px;
  transition: all 0.25s ease-in-out;
  box-shadow: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover,
  &:active,
  &:focus {
    color: ${(p) => (p.color ? "#C8102E" : "#fff")};
    border: 2px solid ${(p) => p.color || "#C8102E"};
    background: ${(p) => p.color || "#C8102E"};
    transform: translateY(-2px);
  }
`;
