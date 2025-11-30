import styled from "styled-components";

export const ServicesSection = styled("div")`
  min-height: 100vh;
  position: relative;

  &::before {
    content: '';
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
  }
`;

export const HeroSection = styled("section")`
  position: relative;
  padding: 8rem 0 6rem;
  margin-top: -100px;
  padding-top: calc(8rem + 100px);
  color: #ffffff;
  text-align: center;
  min-height: 100vh;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 5rem 0 3rem;
    padding-top: calc(5rem + 100px);
  }
`;

export const ContentSection = styled("section")<{ $variant?: 'first' | 'second' | 'third' }>`
  position: relative;
  padding: 8rem 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  background: ${props => props.$variant === 'second' ? 'rgba(248, 249, 250, 0.9)' : 'rgba(255, 255, 255, 0.9)'};
  border-bottom: 1px solid rgba(233, 236, 239, 0.5);
  margin-bottom: 3rem;
  backdrop-filter: blur(5px);

  &:last-of-type {
    border-bottom: none;
    margin-bottom: 0;
  }

  h2 {
    margin-bottom: 2rem;
    text-align: center;
    color: #212529;
    font-size: 36px;
    font-weight: 700;
  }

  p {
    max-width: 800px;
    margin: 0 auto 2rem;
    text-align: center;
    font-size: 17px;
    line-height: 1.8;
    color: #495057;
  }

  @media only screen and (max-width: 1024px) {
    padding: 5rem 2rem;
    margin-bottom: 2rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 1.5rem;
    margin-bottom: 1.5rem;

    &:last-of-type {
      margin-bottom: 0;
    }

    h2 {
      font-size: 28px;
    }
  }
`;

export const SectionTitle = styled("h1")`
  color: #ffffff !important;
  margin-bottom: 1.5rem;
  font-size: 56px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  @media only screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

export const SectionDescription = styled("p")`
  color: rgba(255, 255, 255, 0.95) !important;
  font-size: 20px;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);

  @media only screen and (max-width: 768px) {
    font-size: 17px;
  }
`;

export const ServicesGrid = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ServiceCard = styled("div")`
  padding: 2.5rem 2rem;
  background: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    border-color: #C8102E;
  }
`;

export const CardTitle = styled("h3")`
  color: #C8102E !important;
  margin-bottom: 1rem;
  font-size: 22px;
  font-weight: 700;
`;

export const CardDescription = styled("p")`
  color: #495057;
  font-size: 15px;
  line-height: 1.7;
  margin: 0;
`;
