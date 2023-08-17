import { PropsWithChildren } from "react";

import HeaderBar from "@/modules/headerbar/headerbar";
import Footer from "@/modules/footer/footer";
import EmptySection from "@/modules/emptysection/emptysection";
import ContactFrame from "@/modules/contactframe/contactframe";
import CompagnyFrame from "@/components/uix/compagnyframe/compagnyframe";

import BannerInfo from "@/types/bannerinfo";
import ContactBarInfo from "@/types/contactbarinfo";
import { default as IconButtonType } from "@/types/iconbutton";
import menuBarInfo from "@/types/menubarinfo";
import Service from "@/types/service";
import { default as ContactFrameType } from "@/types/contactframe";

import "./ourcompagnies.scss";
import SubServiceFrame from "@/components/uix/subserviceframe/subserviceframe";

// interface Props extends PropsWithChildren {
//   logo: IconButtonType;
//   menuBarInfo: menuBarInfo;
//   services: Service[];
//   socialMedia: IconButtonType[];
//   contactFrame: ContactFrameType;
//   contactBarInfo: ContactBarInfo;
//   bannerInfo: BannerInfo;
// }

export default function OurCompagnies() {
  var presentation = {
    title: "Nos entreprises",
    content:
      "Nous sommes fiers de vous présenter T&T Imo et T&T Management, deux entités complémentaires qui travaillent de concert pour répondre à vos besoins.",
  };

  var servicesPresentation = [
    {
      title: "Nos services en immobilier",
      compagny: {
        name: "T&T Immo",
        logoPath: "/assets/logo/logo-immo-no-bg.webp",
        content:
          "T&T Imo se spécialise dans les placements immobiliers, offrant des opportunités uniques pour l'achat, la vente et la location de biens immobiliers.",
      },
      subServices: [
        {
          imagePath: "",
          name: "Placement de terrain",
          content:
            "Description ici sit amet, consectetur adipiscing elit. Phasellus sodales tellus eleifend massa",
        },
        {
          imagePath: "",
          name: "Placement de logement",
          content:
            "Description ici sit amet, consectetur adipiscing elit. Phasellus sodales tellus",
        },
        {
          imagePath: "",
          name: "Vente de terrain",
          content:
            "Description ici sit amet, consectetur adipiscing elit. Phasellus sodales tellus eleifend massa",
        },
        {
          imagePath: "",
          name: "Location immobilière",
          content:
            "Description ici sit amet, consectetur adipiscing elit. Phasellus sodales tellus",
        },
      ],
    },
    {
      title: "Nos services en immobilier",
      compagny: {
        name: "T&T management",
        logoPath: "/assets/logo/logo-management-no-bg.webp",
        content:
          "T&T Management, quant à elle, met à votre disposition son expertise en conseil et en gestion pour soutenir votre entreprise et stimuler sa croissance.",
      },
      subServices: [
        {
          imagePath: "",
          name: "Consultation stratégique",
          content:
            "Description ici sit amet, consectetur adipiscing elit. Phasellus sodales tellus eleifend massa",
        },
        {
          imagePath: "",
          name: "Planification financière",
          content:
            "Description ici sit amet, consectetur adipiscing elit. Phasellus sodales tellus",
        },
        {
          imagePath: "",
          name: "Développement commercial",
          content:
            "Description ici sit amet, consectetur adipiscing elit. Phasellus sodales tellus eleifend massa",
        },
        {
          imagePath: "",
          name: "Service management 4",
          content:
            "Description ici sit amet, consectetur adipiscing elit. Phasellus sodales tellus",
        },
      ],
    },
  ];

  var logo: IconButtonType = {
    name: "T and T Holding",
    alt: "logo",
    path: "/assets/logo/logo-square-no-bg.webp",
    link: "/",
  };
  var services: Service[] = [
    {
      name: "services management",
      subServices: [
        {
          name: "Consultation stratégique",
          link: "",
        },
        {
          name: "Planification financière",
          link: "",
        },
        {
          name: "Developpement",
          link: "",
        },
        {
          name: "Commercial",
          link: "",
        },
      ],
    },
    {
      name: "services immo",
      subServices: [
        {
          name: "Placement de terrain",
          link: "",
        },
        {
          name: "Placement de logement",
          link: "",
        },
        {
          name: "Vente de terrain",
          link: "",
        },
        {
          name: "Location immobiliere",
          link: "",
        },
      ],
    },
  ];
  
  var socialMedia: IconButtonType[] = [
    {
      name: "facebook",
      alt: "facebook",
      path: "/assets/icons/facebook-icon.webp",
      link: "",
    },
    {
      name: "whatsapp",
      alt: "whatsapp",
      path: "/assets/icons/whatsapp-icon.webp",
      link: "",
    },
    {
      name: "twitter",
      alt: "twitter",
      path: "/assets/icons/twitter-icon.webp",
      link: "",
    },
  ];

  var pageRoot = "/nos-entreprises"

  var contactFrame:ContactFrameType = {
    title: "Nous sommes à votre écoute",
    content:
      "Contactez-nous dès maintenant pour discuter de vos besoins spécifiques",
    link: {
      name: "contactez-nous",
      link: "",
    },
  };

  var contactBarInfo: ContactBarInfo = {
    phone: "+237 XXX XXX XXX",
    email: "contact@nomdedomaine.com",
    socialMedia: socialMedia,
  };

  

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

  return (
    <>
      <HeaderBar
        currentPageRoot = {pageRoot}
        bannerShouldBeDisplayed={false}
        bannerInfo={bannerInfo}
      />
      <main className="flex min-h-screen flex-col">
        <EmptySection>
          <div className="flex flex-col compagny-presentation">
            <h1 className="compagny-presentation-title">
              {presentation.title}
            </h1>
            <p className="compagny-presentation-content">
              {presentation.content}
            </p>
          </div>
          {servicesPresentation.map((service) => (
            <div
              className="flex flex-col compagny-service-presentation"
              key={"compagny-service-presentation-" + Math.random()}
            >
              <CompagnyFrame
                name={service.compagny.name}
                logoPath={service.compagny.logoPath}
                content={service.compagny.content}
                orientation="horizontal"
              />
              <span className="subservices-presentation-section-title">
                {service.title}
              </span>
              <div className="flex flex-row justify-start subservices-presentation-section-sub-services">
                {service.subServices.map((subService) => (
                  <SubServiceFrame
                    imagePath={subService.imagePath}
                    name={subService.name}
                    content={subService.content}
                    key={
                      service.compagny.name +
                      "-sub-service-frame-" +
                      Math.random()
                    }
                  />
                ))}
              </div>
            </div>
          ))}
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
