import { PropsWithChildren } from "react";

import HeaderBar from "@/modules/headerbar/headerbar";
import Footer from "@/modules/footer/footer";
import BrandingFrame from "@/components/uix/brandingframe/brandingframe";
import EmptySection from "@/modules/emptysection/emptysection";
import ImageFrame from "@/modules/imageframe/imageframe";

import BannerInfo from "@/types/bannerinfo";
import ContactBarInfo from "@/types/contactbarinfo";
import { default as IconButtonType } from "@/types/iconbutton";
import menuBarInfo from "@/types/menubarinfo";
import Service from "@/types/service";
import CompagnyBranding from "@/types/compagnybranding";
import IconButton from "@/components/uix/iconbutton/iconbutton";
import ServiceFrame from "@/components/uix/serviceframe/serviceframe";

import "./aboutus.scss";


interface Props extends PropsWithChildren {
  logo: IconButtonType;
  menuBarInfo: menuBarInfo;
  services: Service[];
  socialMedia: IconButtonType[];
  contactBarInfo: ContactBarInfo;
  bannerInfo: BannerInfo;
  compagnyBranding: CompagnyBranding;
}

export default function AboutUsPage() {

  var bannerInfo: BannerInfo = {
    backgroundImagePath: "../assets/images/background-6.webp",
    backgroundColor: "#002F17",
    title: "BIENVENU CHEZ T & T HOLDING",
    content: "L'expérience et l'expertise qui font la difference",
    button: {
      name: "DECOUVRIR NOS SERVICES",
      link: "/",
    },
  };

  var pageRoot = "/qui-sommes-nous"

  var compagnyBranding: CompagnyBranding = {
    title: "Notre engagement est votre satisfaction",
    brandings: [
      {
        name: "Notre philosophie",
        imagePath: "/assets/images/background-5.webp",
        content:
          "Ut amet necessitatibus ut placeat galisum sed incidunt error. Et vero corporis et enim quis quo sequi asperiores",
      },
      {
        name: "Perspectives",
        imagePath: "/assets/images/background-5.webp",
        content:
          "Ut amet necessitatibus ut placeat galisum sed incidunt error. Et vero corporis et enim quis quo sequi asperiores",
      },
      {
        name: "Nos valeurs",
        imagePath: "/assets/images/background-5.webp",
        content:
          "Ut amet necessitatibus ut placeat galisum sed incidunt error. Et vero corporis et enim quis quo sequi asperiores",
      },
    ],
  };

  var aboutUs = {
    title: "A propos de T&T HOLDING GROUP",
    content:
      " Une présentation de l'histoire et des valeurs de T&T HOLDING, mettant l'accent sur son engagement envers l'excellence et la satisfaction des clients. orem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales tellus eleifend massa tincidunt sodales. Ut mi enim, luctus vel nibh tincidunt, facilisis luctus elit.",
  };
  var servicesFrameSection = {
    title: "Services de nos differentes entreprises",
    services: [
      {
        name: "T&T Management",
        imagePath: "/assets/images/background-4.webp",
        subServices: [
          "Consultation stratégique",
          "Planification financière",
          "Développement commercial",
          "Service 4",
        ],
      },
      {
        name: "T&T Immo",
        imagePath: "/assets/images/background-3.webp",
        subServices: [
          "Placement de terrain",
          "Placement de logement",
          "Vente de terrain",
          "Location immobilière",
        ],
      },
    ],
  };

  var partnerships = {
    title: "Nos references et partenaires",
    content: "Ils nous font confiance...",
    partners: [
      {
        name: "",
        alt: "",
        path: "/assets/images/background-4.webp",
        link: "",
      },
      {
        name: "",
        alt: "",
        path: "/assets/images/background-4.webp",
        link: "",
      },
      {
        name: "",
        alt: "",
        path: "/assets/images/background-7.webp",
        link: "",
      },
      {
        name: "",
        alt: "",
        path: "/assets/images/background-4.webp",
        link: "",
      },
    ],
  };

  return (
    <>
      <HeaderBar
        currentPageRoot = {pageRoot}
        bannerShouldBeDisplayed={false}
        bannerInfo={bannerInfo}
      />
      <main className="flex min-h-screen flex-col items-center">
        <ImageFrame
          backgroundImagePath={bannerInfo.backgroundImagePath}
          backgroundColor={bannerInfo.backgroundColor}
        ></ImageFrame>

        <EmptySection>
          <div className="flex flex-col justify-center presentation">
            <h1 className="presentation-title">{aboutUs.title}</h1>
            <p className="presentation-content">{aboutUs.content}</p>
          </div>
          <div className="flex flex-col justify-center services-frame">
            <h2 className="services-frame-title">
              {servicesFrameSection.title}
            </h2>
            <div className="flex flex-row justify-center services-frame-services">
              {servicesFrameSection.services.map((service) => (
                <ServiceFrame
                  name={service.name}
                  imagePath={service.imagePath}
                  subServices={service.subServices}
                  key={"service-frame-"+Math.random()}
                />
              ))}
            </div>
          </div>
        </EmptySection>
        <EmptySection>
          <div className="flex flex-col partnership">
            <h2 className="partnership-title">{partnerships.title}</h2>
            <p className="partnership-content">{partnerships.content}</p>
            <div className="flex flex-row justify-center partnership-partners">
              {partnerships.partners.map((partner) => (
                <IconButton
                  name={partner.name}
                  alt={partner.name}
                  path={partner.path}
                  width={64}
                  height={64}
                  link={partner.link}
                  key={"partnership-partner-" + Math.random()}
                />
              ))}
            </div>
          </div>
        </EmptySection>
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
      </main>
      <Footer />
    </>
  );
}
