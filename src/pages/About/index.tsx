import { lazy } from "react";
import { withTranslation, TFunction } from "react-i18next";
import {
  AboutSection,
  HeroSection,
  ContentSection,
  SectionTitle,
  SectionDescription,
  InfoGrid,
  InfoCard,
  CardTitle,
  CardDescription,
} from "./styles";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

interface AboutProps {
  t: TFunction;
}

const About = ({ t }: AboutProps) => {
  return (
    <AboutSection>
      <ScrollToTop />

      <HeroSection>
        <Container>
          <SectionTitle>{t("About Us")}</SectionTitle>
          <SectionDescription>
            {t("We are a professional company dedicated to providing top-quality services and solutions.")}
          </SectionDescription>
        </Container>
      </HeroSection>

      <ContentSection $variant="first">
        <h2>{t("Our Mission")}</h2>
        <p>
          {t("Our mission is to deliver excellence in everything we do, combining innovation with reliability to meet our clients' needs.")}
        </p>
      </ContentSection>

      <ContentSection $variant="second">
        <h2>{t("What We Offer")}</h2>
        <InfoGrid>
          <InfoCard>
            <CardTitle>{t("Quality")}</CardTitle>
            <CardDescription>
              {t("We maintain the highest standards in all our services and products.")}
            </CardDescription>
          </InfoCard>
          <InfoCard>
            <CardTitle>{t("Experience")}</CardTitle>
            <CardDescription>
              {t("Years of expertise in delivering professional solutions to our clients.")}
            </CardDescription>
          </InfoCard>
          <InfoCard>
            <CardTitle>{t("Innovation")}</CardTitle>
            <CardDescription>
              {t("We constantly evolve and adapt to bring you the latest technologies.")}
            </CardDescription>
          </InfoCard>
          <InfoCard>
            <CardTitle>{t("Support")}</CardTitle>
            <CardDescription>
              {t("Dedicated customer support available to assist you at every step.")}
            </CardDescription>
          </InfoCard>
        </InfoGrid>
      </ContentSection>

      <ContentSection $variant="third">
        <h2>{t("Our Values")}</h2>
        <p>
          {t("We believe in transparency, integrity, and building long-term relationships with our clients. Our team is committed to excellence and continuous improvement.")}
        </p>
      </ContentSection>
    </AboutSection>
  );
};

export default withTranslation()(About);
