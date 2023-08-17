'use client'

import { ChangeEvent, ChangeEventHandler, PropsWithChildren } from "react";

import HeaderBar from "@/modules/headerbar/headerbar";
import Footer from "@/modules/footer/footer";
import EmptySection from "@/modules/emptysection/emptysection";
import FormField from "@/components/user/formfield/formfield";
import LabeledSection from "@/modules/labeledsection/labeledsection";

import BannerInfo from "@/types/bannerinfo";
import ContactBarInfo from "@/types/contactbarinfo";
import { default as IconButtonType } from "@/types/iconbutton";
import menuBarInfo from "@/types/menubarinfo";
import Service from "@/types/service";
import { default as OurCompagniesType } from "@/types/ourcompagnies";
import CompagnyBranding from "@/types/compagnybranding";
import BrandingAbout from "@/types/brandingabout";
import { default as ContactFrameType } from "@/types/contactframe";

import "./contact.scss";


// interface Props extends PropsWithChildren {
//   logo: IconButtonType;
//   menuBarInfo: menuBarInfo;
//   services: Service[];
//   socialMedia: IconButtonType[];
//   contactFrame: ContactFrameType;
//   contactBarInfo: ContactBarInfo;
//   bannerInfo: BannerInfo;
//   ourCompagnies: OurCompagniesType;
//   compagnyBranding: CompagnyBranding;
//   aboutFrame: BrandingAbout;
// }

export default function ContactPage() {
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

  var pageRoot = '/contact'
  
  var contactUs = {
    'title':'Nous contacter',
    'content':'Vous pouvez nous ecrire en remplissant le formulaire ci dessous. Nous allons vous recontacter au plus vite',
    'contacts': [
      {
        'title': 'Email',
        'content': 'contact@nomdomaine.com'
      },
      {
        'title': 'Telephone',
        'content': '+237 676 xxx xxx'
      },
      {
        'title': 'Adresse',
        'content': 'Adresse de localisation ici'
      },
    ]
  }

  var onEditField = (event:ChangeEvent<HTMLTextAreaElement>) =>{
  }

  return (
    <>
      <HeaderBar
        currentPageRoot = {pageRoot}
        bannerShouldBeDisplayed = {false}
        bannerInfo={bannerInfo}
      />
      <main className="flex min-h-screen flex-col items-center">
        <EmptySection>
          <h1 className="title">{contactUs.title}</h1>
          <p className="content">{contactUs.content}</p>
          <form action="">
            <div className="flex flex-col">
                <FormField type="text" name="username" placeHolder={'Nom et Prenom'} value={''} handlePress={(event:any)=>onEditField(event)} />
                <FormField type="phone" name="phone" placeHolder={'Telephone'} value={''}  handlePress={(event:any)=>onEditField(event)} />
                <FormField type="email" name="email" placeHolder={'Email'} value={''}  handlePress={(event:any)=>onEditField(event)} />
            </div>
            <div className="flex flex-col">
                <FormField type={"textarea"} name="description" placeHolder={'Decrivez votre projet ici'} value={''} handlePress={(event:any)=>onEditField(event)} />
                <button type="submit">{'ENVOYER'}</button>
            </div>
          </form>

          <h2 className="sub-title">{'Autres informations de contact'}</h2>
          <div className="flex flex-row">
            {
              contactUs.contacts.map((item)=> <LabeledSection title={item.title} content={item.content} key={'labeled-section-'+Math.random()}/>)
            }
          </div>
          <div className="contact-map">

          </div>
        </EmptySection>
      </main>
      <Footer />
    </>
  );
}
