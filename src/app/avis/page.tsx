import { PropsWithChildren } from "react";

import HeaderBar from "@/modules/headerbar/headerbar";
import Footer from "@/modules/footer/footer";
import EmptySection from "@/modules/emptysection/emptysection";

import BannerInfo from "@/types/bannerinfo";
import ContactBarInfo from "@/types/contactbarinfo";
import { default as IconButtonType } from "@/types/iconbutton";
import menuBarInfo from "@/types/menubarinfo";
import Service from "@/types/service";

import "./customeropignions.scss";
import CustomerOpigion from "@/types/customeropignion";
import CustomerOpignionFrame from "@/components/uix/customeropignionframe/customeropignionframe";

// interface Props extends PropsWithChildren {
//   logo: IconButtonType;
//   menuBarInfo: menuBarInfo;
//   services: Service[];
//   socialMedia: IconButtonType[];
//   contactBarInfo: ContactBarInfo;
//   bannerInfo: BannerInfo;
// }

export default function CustomerOpignions() {

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

  var pageRoot = "/avis"
  var title = "Ce que nos clients pensent de nous";
  var customersOpignions: CustomerOpigion[] = [
    {
      imagePath: "/assets/images/background-7.webp",
      content:
        "temoignage client sit amet, consectetur adipiscing elit. Phasellus sodales tellus eleifend massa Description ici sit amet, consectetur adipiscing elit. Phasellus sodales tellus eleifend massa",
      customerName: "Carole Jeanne",
      customerRole: "Commerciale Afrilex",
    },
    {
      imagePath: "/assets/images/background-7.webp",
      content:
        "temoignage client sit amet, consectetur adipiscing elit. Phasellus sodales tellus eleifend massa Description ici sit amet, consectetur adipiscing elit. Phasellus sodales tellus eleifend massa",
      customerName: "Jean Claude",
      customerRole: "Architecte Qzure",
    },
  ];
  ("“““‘{¶«¡Çøø}—€ôÙµ¬÷…≠÷…≤ëë“‘");

  return (
    <>
      <HeaderBar
        bannerShouldBeDisplayed={false}
        bannerInfo={bannerInfo}
        currentPageRoot = {pageRoot} 
      />
      <main className="flex min-h-screen flex-col">
        <EmptySection>
          <h1 className="customer-opignions-title">{title}</h1>
          <div className="flex flex-col customers-opignions-list">
            {customersOpignions.map((customerOpignion) => (
              <CustomerOpignionFrame
                imagePath={customerOpignion.imagePath}
                content={customerOpignion.content}
                customerName={customerOpignion.customerName}
                customerRole={customerOpignion.customerRole}
                key={"customer-opignion-" + Math.random()}
              />
            ))}
          </div>
        </EmptySection>
      </main>
      <Footer />
    </>
  );
}
