import HomePage from '@/pages/home/home'
import ContactPage from '@/pages/contact/contact';


import BannerInfo from "@/types/bannerinfo";
import ContactBarInfo from "@/types/contactbarinfo";
import { default as IconButtonType } from "@/types/iconbutton";
import Link from "@/types/link";
import menuBarInfo from "@/types/menubarinfo";
import Service from "@/types/service";
import { default as OurCompagniesType } from "@/types/ourcompagnies";
import Branding from "@/types/branding";
import CompagnyBranding from "@/types/compagnybranding";
import BrandingAbout from "@/types/brandingabout";
import {default as ContactFrameType} from '@/types/contactframe';


export default function Home() {
  var logo: IconButtonType = {
    name: "T and T Holding",
    alt: "logo",
    path: "/assets/logo/logo-square-no-bg.webp",
    link: "/",
  };
  var services: Service[] = [
    {
      name: "services management",
      links: [
        {
          name: "Consultation stratégique",
          link: "",
          clickable: true,
        },
        {
          name: "Planification financière",
          link: "",
          clickable: true,
        },
        {
          name: "Developpement",
          link: "",
          clickable: true,
        },
        {
          name: "Commercial",
          link: "",
          clickable: true,
        },
      ],
    },
    {
      name: "services immo",
      links: [
        {
          name: "Placement de terrain",
          link: "",
          clickable: true,
        },
        {
          name: "Placement de logement",
          link: "",
          clickable: true,
        },
        {
          name: "Vente de terrain",
          link: "",
          clickable: true,
        },
        {
          name: "Location immobiliere",
          link: "",
          clickable: true,
        },
      ],
    },
    {
      name: "nous contactez",
      links: [
        {
          name: "Adresse entreprise",
          link: "",
          clickable: false,
        },
        {
          name: "+237 XXX XXX XXX",
          link: "",
          clickable: false,
        },
        {
          name: "email@ttholding.com",
          link: "",
          clickable: true,
        },
      ],
    },
  ];
  var contacts: IconButtonType[] = [
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
    contacts: contacts,
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
          clickable: true,
        },
      },
      {
        name: "T&T Immo",
        logoPath: "/assets/logo/logo-immo-no-bg.webp",
        content:
          "T&T Imo se spécialise dans les placements immobiliers, offrant des opportunités uniques pour l'achat, la vente et la location de biens immobiliers",
        button: {
          name: "Voir nos services",
          link: "/",
          clickable: true,
        },
      },
    ],
  };

  var menuBarInfo: menuBarInfo = {
    logo: logo,
    tabs: [
      {
        name: "acceuil",
        link: "/",
      },
      {
        name: "contact",
        link: "/",
      },
      {
        name: "qui sommes nous ?",
        link: "/",
      },
      {
        name: "nos entreprises",
        link: "/",
      },
      {
        name: "avis",
        link: "/",
      },
    ],
  };

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
      {/* <HomePage 
        logo = {logo}
        menuBarInfo = {menuBarInfo}
        services = {services}
        contacts = {contacts}
        contactFrame = {contactFrame}
        contactBarInfo = {contactBarInfo}
        bannerInfo = {bannerInfo}
        ourCompagnies = {ourCompagnies}
        compagnyBranding = {compagnyBranding}
        aboutFrame = {aboutFrame}
      /> */}
      <ContactPage 
        logo = {logo}
        menuBarInfo = {menuBarInfo}
        services = {services}
        contacts = {contacts}
        contactFrame = {contactFrame}
        contactBarInfo = {contactBarInfo}
        bannerInfo = {bannerInfo}
        ourCompagnies = {ourCompagnies}
        compagnyBranding = {compagnyBranding}
        aboutFrame = {aboutFrame}
      />
    </>
    
  )
}
