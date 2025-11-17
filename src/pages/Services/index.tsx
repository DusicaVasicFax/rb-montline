import { lazy } from "react";
import { withTranslation, TFunction } from "react-i18next";
import {
  ServicesSection,
  HeroSection,
  ContentSection,
  SectionTitle,
  SectionDescription,
  ServicesGrid,
  ServiceCard,
  CardTitle,
  CardDescription,
} from "./styles";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

interface ServicesProps {
  t: TFunction;
}

const Services = ({ t }: ServicesProps) => {
  return (
    <ServicesSection>
      <ScrollToTop />

      <HeroSection>
        <Container>
          <SectionTitle>{t("Services")}</SectionTitle>
          <SectionDescription>
            {t("Professional solutions tailored to meet your business needs")}
          </SectionDescription>
        </Container>
      </HeroSection>

      <ContentSection $variant="first">
        <Container>
          <h2>{t("What We Offer")}</h2>
          <ServicesGrid>
            <ServiceCard>
              <CardTitle>{t("Quality")}</CardTitle>
              <CardDescription>
                {t("We maintain the highest standards in all our services and products.")}
              </CardDescription>
            </ServiceCard>
            <ServiceCard>
              <CardTitle>{t("Experience")}</CardTitle>
              <CardDescription>
                {t("Years of expertise in delivering professional solutions to our clients.")}
              </CardDescription>
            </ServiceCard>
            <ServiceCard>
              <CardTitle>{t("Innovation")}</CardTitle>
              <CardDescription>
                {t("We constantly evolve and adapt to bring you the latest technologies.")}
              </CardDescription>
            </ServiceCard>
            <ServiceCard>
              <CardTitle>{t("Support")}</CardTitle>
              <CardDescription>
                {t("Dedicated customer support available to assist you at every step.")}
              </CardDescription>
            </ServiceCard>
          </ServicesGrid>
        </Container>
      </ContentSection>

      <ContentSection $variant="second">
        <Container>
          <h2>{t("Why Choose Us")}</h2>
          <p>
            {t("We believe in transparency, integrity, and building long-term relationships with our clients. Our team is committed to excellence and continuous improvement.")}
          </p>
        </Container>
      </ContentSection>
    </ServicesSection>
  );
};

export default withTranslation()(Services);
