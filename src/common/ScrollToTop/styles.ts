import styled from "styled-components";

export const ScrollUpContainer = styled("div")<{
  show: boolean;
}>`
  padding: 12px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 1000;
  cursor: pointer;
  background: #C8102E;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  box-shadow: 0 4px 12px rgba(200, 16, 46, 0.4);
  transition: all 0.3s ease-in-out;
  visibility: ${(p) => (p.show ? "visible" : "hidden")};
  opacity: ${(p) => (p.show ? "1" : "0")};
  transform: ${(p) => (p.show ? "translateY(0)" : "translateY(100px)")};
  display: flex;

  svg {
    fill: #ffffff;
  }

  &:hover,
  &:active,
  &:focus {
    background: #a00d25;
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(200, 16, 46, 0.5);
  }

  @media screen and (max-width: 768px) {
    right: 20px;
    bottom: 20px;
    width: 45px;
    height: 45px;
    padding: 10px;
  }
`;
