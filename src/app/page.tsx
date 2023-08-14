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
import AboutUsPage from '@/pages/aboutus/aboutus';
import OurCompagnies from '@/pages/ourcompagnies/ourcompagnies';
import CustomerOpignions from '@/pages/customeropignions/customeropignions';


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
  var contacts =  {
    title: "nous contactez",
    contacts: [
      {
        content: "Adresse entreprise",
        type: "adress",
      },
      {
        content: "+237 XXX XXX XXX",
        link: "phone",
      },
      {
        content: "email@ttholding.com",
        link: "email",
      },
    ],
  }

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
        socialMedia = {socialMedia}
        contactFrame = {contactFrame}
        contactBarInfo = {contactBarInfo}
        bannerInfo = {bannerInfo}
        ourCompagnies = {ourCompagnies}
        compagnyBranding = {compagnyBranding}
        aboutFrame = {aboutFrame}
      /> */}
      {/* <ContactPage 
        logo = {logo}
        menuBarInfo = {menuBarInfo}
        services = {services}
        socialMedia = {socialMedia}
        contactFrame = {contactFrame}
        contactBarInfo = {contactBarInfo}
        bannerInfo = {bannerInfo}
        ourCompagnies = {ourCompagnies}
        compagnyBranding = {compagnyBranding}
        aboutFrame = {aboutFrame}
      /> */}
      {/* <AboutUsPage 
        logo = {logo}
        menuBarInfo = {menuBarInfo}
        services = {services}
        socialMedia = {socialMedia}
        contactBarInfo = {contactBarInfo}
        bannerInfo = {bannerInfo}
        compagnyBranding = {compagnyBranding}
      /> */}
      {/* <OurCompagnies
        logo = {logo}
        menuBarInfo = {menuBarInfo}
        services = {services}
        socialMedia = {socialMedia}
        contactFrame = {contactFrame}
        contactBarInfo = {contactBarInfo}
        bannerInfo = {bannerInfo}
      /> */}
      <CustomerOpignions
        logo = {logo}
        menuBarInfo = {menuBarInfo}
        services = {services}
        socialMedia = {socialMedia}
        contactBarInfo = {contactBarInfo}
        bannerInfo = {bannerInfo}
      />
    </>
    
  )
}
