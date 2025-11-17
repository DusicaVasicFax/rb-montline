import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { Button } from "../../common/Button";
import {
  HeroSection,
  HeroBackground,
  HeroContent,
  HeroTitle,
  HeroText,
  ButtonWrapper,
} from "./styles";

interface HeroProps {
  title: string;
  content: string;
  button?: Array<{
    color?: string;
    title: string;
  }>;
  t: any;
  id?: string;
}

const Hero = ({ title, content, button, t, id }: HeroProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <HeroSection id={id}>
      <HeroBackground />
      <Fade direction="up" triggerOnce>
        <HeroContent>
          <Row justify="center" align="middle">
            <Col lg={16} md={18} sm={20} xs={22}>
              <HeroTitle>{t(title)}</HeroTitle>
              <HeroText>{t(content)}</HeroText>
              {button && button.length > 0 && (
                <ButtonWrapper>
                  {button.map(
                    (
                      item: {
                        color?: string;
                        title: string;
                      },
                      id: number
                    ) => {
                      return (
                        <Button
                          key={id}
                          color={item.color}
                          onClick={() => scrollTo("about")}
                        >
                          {t(item.title)}
                        </Button>
                      );
                    }
                  )}
                </ButtonWrapper>
              )}
            </Col>
          </Row>
        </HeroContent>
      </Fade>
    </HeroSection>
  );
};

export default withTranslation()(Hero);
