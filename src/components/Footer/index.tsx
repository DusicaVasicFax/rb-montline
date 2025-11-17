import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  Para,
  Large,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <FooterSection>
      <Container>
        <Row justify="space-between">
          <Col lg={6} md={12} sm={12} xs={24}>
            <Language>{t("Contact")}</Language>
            <Para>{t("+381 21 6362 712")}</Para>
            <Para>{t("+381 69 300 7879")}</Para>
            <br />
            <Para>
              {t(`Do you have any question? Feel free to reach out.`)}
            </Para>
          </Col>
          <Col lg={6} md={12} sm={12} xs={24}>
            <Title>{t("Company")}</Title>
            <Large to="/">{t("About")}</Large>
            <Large to="/">{t("Blog")}</Large>
          </Col>
          <Col lg={6} md={12} sm={12} xs={24}>
            <Language>{t("Address")}</Language>
            <Para>Bulevar Evrope 28A</Para>
            <Para>21000 Novi Sad</Para>
            <Para>Republika Srbija</Para>
          </Col>
          <Col lg={6} md={12} sm={12} xs={24}>
            <Label htmlFor="select-lang">{t("Language")}</Label>
            <LanguageSwitchContainer>
              <LanguageSwitch onClick={() => handleChange("en")}>
                <SvgIcon
                  src="united-kingdom.svg"
                  aria-label="homepage"
                  width="30px"
                  height="30px"
                />
              </LanguageSwitch>
              <LanguageSwitch onClick={() => handleChange("sr")}>
                <SvgIcon
                  src="serbia.svg"
                  aria-label="homepage"
                  width="30px"
                  height="30px"
                />
              </LanguageSwitch>
            </LanguageSwitchContainer>
            <br />
            <Label>{t("Follow Us")}</Label>
            <FooterContainer>
              <SocialLink
                href="https://www.instagram.com/rbmont.line/"
                src="instagram-white-icon.webp"
              />
            </FooterContainer>
          </Col>
        </Row>
        <Row
          justify="center"
          align="middle"
          style={{ paddingTop: "3rem", marginTop: "2rem", borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}
        >
          <Para>© {new Date().getFullYear()} RB Mont Line. {t("All rights reserved")}.</Para>
        </Row>
      </Container>
    </FooterSection>
  );
};

export default withTranslation()(Footer);
