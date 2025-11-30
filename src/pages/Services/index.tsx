import { lazy } from "react";
import { withTranslation, TFunction } from "react-i18next";
import {
  ServicesSection,
  ContentSection,
  ServicesList,
  ServiceItem,
  ServicesGrid,
  ServiceCard,
  CardDescription,
} from "./styles";

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const Hero = lazy(() => import("../../components/Hero"));

interface ServicesProps {
  t: TFunction;
}

const Services = ({ t }: ServicesProps) => {
  return (
    <ServicesSection>
      <ScrollToTop />
      <Hero
        title="Complete optical network construction services"
        content="From site preparation to final installation — we deliver solutions that last."
        id="services-hero"
      />

      <ContentSection $variant="first">
        <h2>{t("What We Offer")}</h2>
        <p>
          {t("Services What We Offer Intro")}
        </p>
        <ServicesGrid>
          <ServiceCard>
            <CardDescription>{t("Services Item 1")}</CardDescription>
          </ServiceCard>
          <ServiceCard>
            <CardDescription>{t("Services Item 2")}</CardDescription>
          </ServiceCard>
          <ServiceCard>
            <CardDescription>{t("Services Item 3")}</CardDescription>
          </ServiceCard>
          <ServiceCard>
            <CardDescription>{t("Services Item 4")}</CardDescription>
          </ServiceCard>
          <ServiceCard>
            <CardDescription>{t("Services Item 5")}</CardDescription>
          </ServiceCard>
          <ServiceCard>
            <CardDescription>{t("Services Item 6")}</CardDescription>
          </ServiceCard>
          <ServiceCard>
            <CardDescription>{t("Services Item 7")}</CardDescription>
          </ServiceCard>
        </ServicesGrid>
      </ContentSection>

      <ContentSection $variant="second">
        <h2>{t("Why Choose Us")}</h2>
        <p>
          {t("Services Why Choose Us Intro")}
        </p>
        <p>
          {t("Services Why Choose Us Subtitle")}
        </p>
        <ServicesList>
          <ServiceItem><strong>{t("Reliability")}</strong> — {t("Services Why Item 1")}</ServiceItem>
          <ServiceItem><strong>{t("Experience")}</strong> — {t("Services Why Item 2")}</ServiceItem>
          <ServiceItem><strong>{t("Expertise")}</strong> — {t("Services Why Item 3")}</ServiceItem>
          <ServiceItem><strong>{t("Quality")}</strong> — {t("Services Why Item 4")}</ServiceItem>
          <ServiceItem><strong>{t("Transparency")}</strong> — {t("Services Why Item 5")}</ServiceItem>
          <ServiceItem><strong>{t("Flexibility")}</strong> — {t("Services Why Item 6")}</ServiceItem>
        </ServicesList>
        <p>
          {t("Services Why Choose Us Outro")}
        </p>
      </ContentSection>
    </ServicesSection>
  );
};

export default withTranslation()(Services);
