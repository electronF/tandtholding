'use client'

import { ChangeEvent, PropsWithChildren } from "react";

import HeaderBar from "@/modules/headerbar/headerbar";
import Footer from "@/modules/footer/footer";
import EmptySection from "@/modules/emptysection/emptysection";
import ImageFrame from "@/modules/imageframe/imageframe";
import FormField from "@/components/user/formfield/formfield";

import BannerInfo from "@/types/bannerinfo";
import ContactBarInfo from "@/types/contactbarinfo";
import { default as IconButtonType } from "@/types/iconbutton";
import menuBarInfo from "@/types/menubarinfo";
import Service from "@/types/service";
// import CompagnyBranding from "@/types/compagnybranding";
import Form from "@/types/form";

import "./joinourteam.scss";



// interface Props extends PropsWithChildren {
//   logo: IconButtonType;
//   menuBarInfo: menuBarInfo;
//   services: Service[];
//   socialMedia: IconButtonType[];
//   contactBarInfo: ContactBarInfo;
//   bannerInfo: BannerInfo;
//   compagnyBranding: CompagnyBranding;
// }

export default function JoinOurTeamPage() {
  var presentation = {
    title: "Nous rejoindre",
    content:
      "Chez T&T HOLDING, nous sommes constamment à la recherche de talents passionnés et ambitieux pour rejoindre notre équipe dynamique. Si vous êtes prêt à relever des défis stimulants et à faire partie d'une entreprise en pleine croissance, alors vous êtes au bon endroit. Ecrivez nous à l’adresse contact@nomdomaine.com remplissez tout simplement le formulaire ci dessous",
  };

  var form: Form = {
    fields: [
      {
        name: "username",
        placeHolder: "Nom et prenom",
        type: "text",
      },
      {
        name: "phone",
        placeHolder: "Telephone",
        type: "phone",
      },
      {
        name: "email",
        placeHolder: "Email",
        type: "email",
      },
      {
        name: "cv",
        placeHolder: "Joindre votre CV",
        type: "file",
      },
      {
        name: "cover-letter",
        placeHolder: "Lettre de motivation",
        type: "file",
      },
      {
        name: "activity",
        placeHolder: "Domaine d’activité",
        type: "text",
      },
      {
        name: "message",
        placeHolder: "Votre message",
        type: "textarea",
      },
    ],
    action: "",
    buttonName: "ENVOYER",
  };

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

  var pageRoot = "/nous-rejoindre"

  var onValueChange = (event: ChangeEvent) => {};

  return (
    <>
      <HeaderBar
        currentPageRoot = {pageRoot}
        bannerShouldBeDisplayed={false}
        bannerInfo={bannerInfo}
      />
      <main className="flex min-h-screen flex-col items-center">
        <EmptySection>
          <div className="join-our-team-information">
            <div className="join-our-team-presentation">
              <h1 className="join-our-team-presentation-title">
                {presentation.title}
              </h1>
              <p className="join-our-team-presentation-content">
                {presentation.content}
              </p>
            </div>
            <form action={form.action} className="flex flex-col join-our-team-form">
              {form.fields.map((field) => (
                <FormField
                  type={field.type}
                  name={field.name}
                  placeHolder={field.placeHolder}
                  value={""}
                  handlePress={(event: ChangeEvent) => onValueChange(event)}
                  key={"join-our-team-form-field-" + Math.random()}
                />
              ))}
              <div className="join-our-team-form-action">
                <button>{form.buttonName}</button>
              </div>
            </form>
          </div>
          <ImageFrame
            backgroundImagePath={bannerInfo.backgroundImagePath}
            backgroundColor={bannerInfo.backgroundColor}
            height="auto"
            width="100%"
          ></ImageFrame>
        </EmptySection>
      </main>
      <Footer />
    </>
  );
}
