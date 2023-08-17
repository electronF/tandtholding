import { PropsWithChildren } from "react";

import ContactFrame from "@/modules/contactframe/contactframe";
import HeaderBar from "@/modules/headerbar/headerbar";
import Footer from "@/modules/footer/footer";
import OurCompagniesSection from "@/modules/ourcompagniessection/ourcompagniessection";
import BrandingFrame from "@/components/uix/brandingframe/brandingframe";
import EmptySection from "@/modules/emptysection/emptysection";
import BrandingAboutFrame from "@/components/uix/brandingaboutframe/brandingaboutframe";

import BannerInfo from "@/types/bannerinfo";
import ContactBarInfo from "@/types/contactbarinfo";
import { default as IconButtonType } from "@/types/iconbutton";
import menuBarInfo from "@/types/menubarinfo";
import Service from "@/types/service";
import { default as OurCompagniesType } from "@/types/ourcompagnies";
import CompagnyBranding from "@/types/compagnybranding";
import BrandingAbout from "@/types/brandingabout";
import { default as ContactFrameType } from "@/types/contactframe";

import "./home.scss";

interface Props extends PropsWithChildren {
  logo: IconButtonType;
  menuBarInfo: menuBarInfo;
  services: Service[];
  socialMedia: IconButtonType[];
  contactFrame: ContactFrameType;
  contactBarInfo: ContactBarInfo;
  bannerInfo: BannerInfo;
  ourCompagnies: OurCompagniesType;
  compagnyBranding: CompagnyBranding;
  aboutFrame: BrandingAbout;
}

export default function HomePage() {

  var contactFrame:ContactFrameType = {
    title: "Nous sommes à votre écoute",
    content:
      "Contactez-nous dès maintenant pour discuter de vos besoins spécifiques",
    link: {
      name: "contactez-nous",
      link: "",
    },
  };

  var bannerInfo: BannerInfo = {
    backgroundImagePath: "../assets/images/background.webp",
    backgroundColor: "#002F17",
    title: "BIENVENU CHEZ T & T HOLDING",
    content: "L'expérience et l'expertise qui font la difference",
    button: {
      name: "DECOUVRIR NOS SERVICES",
      link: "/",
    },
  };

  var ourCompagnies: OurCompagniesType = {
    title: "Nos entreprises à votre service",
    content:
      "Deux entités complémentaires qui travaillent de concert pour repondre à vos besoins.",
    backgoundImagePath: "../assets/images/background-5.webp",
    backgroundColor: "#D5D5D5",
    compagnies: [
      {
        name: "T&T Management",
        logoPath: "/assets/logo/logo-management-no-bg.webp",
        content:
          "T&T Management met à votre disposition son expertise en conseil et en gestion pour soutenir votre entreprise et stimuler sa croissance",
        button: {
          name: "Voir nos services",
          link: "/",
        },
      },
      {
        name: "T&T Immo",
        logoPath: "/assets/logo/logo-immo-no-bg.webp",
        content:
          "T&T Imo se spécialise dans les placements immobiliers, offrant des opportunités uniques pour l'achat, la vente et la location de biens immobiliers",
        button: {
          name: "Voir nos services",
          link: "/"
        },
      },
    ],
  };

  var pageRoot = "/"

  var compagnyBranding: CompagnyBranding = {
    title: "Notre engagement est votre satisfaction",
    brandings: [
      {
        name: "Notre philosophie",
        imagePath: "/assets/",
        content:
          "Ut amet necessitatibus ut placeat galisum sed incidunt error. Et vero corporis et enim quis quo sequi asperiores",
      },
      {
        name: "Perspectives",
        imagePath: "/assets/",
        content:
          "Ut amet necessitatibus ut placeat galisum sed incidunt error. Et vero corporis et enim quis quo sequi asperiores",
      },
      {
        name: "Nos valeurs",
        imagePath: "/assets/",
        content:
          "Ut amet necessitatibus ut placeat galisum sed incidunt error. Et vero corporis et enim quis quo sequi asperiores",
      },
    ],
  };

  var aboutFrame: BrandingAbout = {
    titleLabel: "T&T HOLDING",
    title: "Un symbole d'excellence et d'innovation dans le monde des affaires",
    content:
      "Une introduction captivante présentant T&T HOLDING. Est modi veritatis ut dolores libero ab omnis voluptatibus sed possimus obcaecati.",
    button: {
      name: "A propos de nous",
      link: "",
    },
  };
  return (
    <>
      <HeaderBar
        bannerShouldBeDisplayed
        bannerInfo={bannerInfo}
        currentPageRoot = {pageRoot} 
      />
      <main className="flex min-h-screen flex-col items-center">
        <EmptySection>
          <BrandingAboutFrame
            titleLabel={aboutFrame.titleLabel}
            title={aboutFrame.title}
            content={aboutFrame.content}
            button={aboutFrame.button}
          />
        </EmptySection>

        <OurCompagniesSection
          title={ourCompagnies.title}
          content={ourCompagnies.content}
          compagnies={ourCompagnies.compagnies}
          backgoundImagePath={ourCompagnies.backgoundImagePath}
          backgroundColor={ourCompagnies.backgroundColor}
        />

        <EmptySection>
          <h2 className="presentation-title">{compagnyBranding.title}</h2>
          <div className="flex flex-row justify-center brandings">
            {compagnyBranding.brandings.map((branding) => (
              <BrandingFrame
                name={branding.name}
                imagePath={branding.imagePath}
                content={branding.content}
                link={branding.link}
                key={"branding-frane-" + Math.random()}
              />
            ))}
          </div>
        </EmptySection>

        <ContactFrame
          title={contactFrame.title}
          content={contactFrame.content}
          link={contactFrame.link}
        />
      </main>
      <Footer />
    </>
  );
}
