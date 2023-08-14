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

interface Props extends PropsWithChildren {
  logo: IconButtonType;
  menuBarInfo: menuBarInfo;
  services: Service[];
  socialMedia: IconButtonType[];
  contactFrame: ContactFrameType;
  contactBarInfo: ContactBarInfo;
  bannerInfo: BannerInfo;
}

export default function OurCompagnies({
  logo,
  menuBarInfo,
  services,
  socialMedia,
  contactFrame,
  contactBarInfo,
  bannerInfo,
}: Props) {
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

  return (
    <>
      <HeaderBar
        contactBarInfo={contactBarInfo}
        menuBarInfo={menuBarInfo}
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
      <Footer logo={logo} socialMedia={socialMedia} services={services} />
    </>
  );
}
