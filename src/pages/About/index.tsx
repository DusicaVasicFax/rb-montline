import { lazy } from "react";
import { withTranslation, TFunction } from "react-i18next";
import {
  AboutSection,
  ContentSection,
  InfoGrid,
  InfoCard,
  CardTitle,
  CardDescription,
  ValuesList,
  ValueItem,
} from "./styles";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const Hero = lazy(() => import("../../components/Hero"));

interface AboutProps {
  t: TFunction;
}

const About = ({ t }: AboutProps) => {
  return (
    <AboutSection>
      <ScrollToTop />
      <Hero
        title="Reliable partner for building optical infrastructure"
        content="For over two decades, we have been building stable, modern, and secure networks that connect people and businesses."
        id="about-hero"
      />

      <ContentSection $variant="first">
        <h2>{t("Our Mission")}</h2>
        <p>
          {t("Through expertise, experience, and a responsible approach, we build networks that connect communities, enhance businesses, and ensure secure access to information. We believe that quality optical infrastructure is the foundation of modern society — and that is why we have been creating lasting solutions for over two decades.")}
        </p>
      </ContentSection>

      <ContentSection $variant="second">
        <h2>{t("What We Offer")}</h2>
        <InfoGrid>
          <InfoCard>
            <CardTitle>{t("Quality")}</CardTitle>
            <CardDescription>
              {t("We maintain the highest standards in all construction and installation work on optical infrastructure.")}
            </CardDescription>
          </InfoCard>
          <InfoCard>
            <CardTitle>{t("Experience")}</CardTitle>
            <CardDescription>
              {t("Over two decades of expertise in delivering professional and reliable solutions for optical networks.")}
            </CardDescription>
          </InfoCard>
          <InfoCard>
            <CardTitle>{t("Innovation")}</CardTitle>
            <CardDescription>
              {t("We apply modern technologies and working methods to ensure long-lasting and stable network infrastructure.")}
            </CardDescription>
          </InfoCard>
          <InfoCard>
            <CardTitle>{t("Support")}</CardTitle>
            <CardDescription>
              {t("Our team is always available for technical support and project coordination during all phases of work.")}
            </CardDescription>
          </InfoCard>
        </InfoGrid>
      </ContentSection>

      <ContentSection $variant="third">
        <h2>{t("Our Values")}</h2>
        <p>
          {t("Our work is based on principles that have guided us since 2005:")}
        </p>
        <ValuesList>
          <ValueItem>
            <strong>{t("Quality")}</strong> — {t("We view every project as an investment that must last. That's why we work exclusively according to high standards and proven methods.")}
          </ValueItem>
          <ValueItem>
            <strong>{t("Responsibility")}</strong> — {t("We take full responsibility for our work, deadlines, and results. We believe that transparent communication is the foundation of cooperation.")}
          </ValueItem>
          <ValueItem>
            <strong>{t("Expertise")}</strong> — {t("Our team consists of trained and experienced professionals who follow modern technologies and work techniques.")}
          </ValueItem>
          <ValueItem>
            <strong>{t("Reliability")}</strong> — {t("Partners trust us because we consistently deliver what we promise — efficiently, safely, and on time.")}
          </ValueItem>
        </ValuesList>
      </ContentSection>
    </AboutSection>
  );
};

export default withTranslation()(About);
