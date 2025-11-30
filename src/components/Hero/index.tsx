import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
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
    action?: string;
    target?: string;
  }>;
  t: any;
  id?: string;
}

const Hero = ({ title, content, button, t, id }: HeroProps) => {
  const history = useHistory();

  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId) as HTMLDivElement;
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleButtonClick = (item: { action?: string; target?: string }) => {
    if (item.action === "navigate" && item.target) {
      history.push(item.target);
    } else if (item.action === "scroll" && item.target) {
      scrollTo(item.target);
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
                        action?: string;
                        target?: string;
                      },
                      idx: number
                    ) => {
                      return (
                        <Button
                          key={idx}
                          color={item.color}
                          onClick={() => handleButtonClick(item)}
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
