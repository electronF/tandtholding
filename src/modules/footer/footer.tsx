import { PropsWithChildren } from "react";

import LabeledListOfServices from "../labeledlistofservices/labeledlistofservices";
import IconButton from "@/components/uix/iconbutton/iconbutton";

import { default as IconButtonType } from "@/types/iconbutton";
import Service from "@/types/service";

import { capitalize } from "@/utils/text";

import "./footer.scss";
import ContactBarInfo from "@/types/contactbarinfo";


interface Props extends PropsWithChildren {
  socialMedia: IconButtonType[];
  services: Service[];
}

export default function Footer() {
  var logo: IconButtonType = {
    name: "T and T Holding",
    alt: "logo",
    path: "/assets/logo/logo-square-no-bg.webp",
    link: "/",
  };

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
  
  return (
    <footer className="flex flex-row justify-start footer">
      <div className="flex flex-col contact-section">
        <IconButton
          name={logo.name}
          alt={logo.alt}
          path={logo.path}
          width={200}
          height={200}
          link={logo.link}
        />
        <div className="flex flex-row justify-center contacts">
          {socialMedia.map((menuItem) => (
            <IconButton
              name={menuItem.name}
              alt={menuItem.alt}
              path={menuItem.path}
              width={28}
              height={28}
              link={menuItem.link}
              key={"service-icon-button-" + Math.random()}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-row list-of-labeled-list-of-services">
        {services.map((service) => (
          <LabeledListOfServices
            name={service.name}
            key={"list-of-services-" + Math.random()}
          >
            {service.subServices.map((subService) =>
                <a
                  href={subService.link}
                  className="clickable-service-item"
                  key={"list-of-service-item-" + Math.random()}
                >
                  {subService.name}
                </a>
              )}
              {/* :(
                <span className="unclickable-service-item" key={"list-of-service-item-" + Math.random()}>
                   {subService.name}
                </span>
              ) */}
          </LabeledListOfServices>
        ))}
      </div>
    </footer>
  );
}
