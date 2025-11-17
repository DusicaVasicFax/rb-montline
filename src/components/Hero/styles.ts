import styled from "styled-components";

export const HeroSection = styled("section")`
  position: relative;
  min-height: 100vh;
  margin-top: -88px;
  padding-top: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    min-height: 80vh;
    margin-top: -70px;
    padding-top: 70px;
  }
`;

export const HeroBackground = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url('/img/kabl.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(10px);
  transform: scale(1.1);
  z-index: -1;
`;

// export const HeroOverlay = styled("div")`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(
//     135deg,
//     rgba(200, 16, 46, 0.85) 0%,
//     rgba(160, 14, 38, 0.85) 100%
//   );
//   z-index: 1;
// `;

export const HeroContent = styled("div")`
  position: relative;
  z-index: 3;
  color: #ffffff;
  text-align: center;
  padding: 4rem 2rem;

  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const HeroTitle = styled("h1")`
  font-size: 64px;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #ffffff !important;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media only screen and (max-width: 1024px) {
    font-size: 48px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 36px;
  }

  @media only screen and (max-width: 414px) {
    font-size: 28px;
  }
`;

export const HeroText = styled("p")`
  font-size: 22px;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.95) !important;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 414px) {
    font-size: 16px;
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 2rem;

  button {
    min-width: 150px;
  }
`;
