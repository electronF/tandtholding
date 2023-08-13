'use client'

import { ChangeEvent, ChangeEventHandler, PropsWithChildren } from "react";

import HeaderBar from "@/modules/headerbar/headerbar";
import ServiceFrame from "@/modules/serviceframe/serviceframe";
import CompagnyPresentation from "@/modules/compagnypresentation/compagnypresentation";

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
import TextInput from "@/components/user/textinput/textinput";
import LabeledSection from "@/modules/labeledsection/labeledsection";

interface Props extends PropsWithChildren {
  logo: IconButtonType;
  menuBarInfo: menuBarInfo;
  services: Service[];
  contacts: IconButtonType[];
  contactFrame: ContactFrameType;
  contactBarInfo: ContactBarInfo;
  bannerInfo: BannerInfo;
  ourCompagnies: OurCompagniesType;
  compagnyBranding: CompagnyBranding;
  aboutFrame: BrandingAbout;
}

export default function ContactPage({
  logo,
  menuBarInfo,
  services,
  contacts,
  contactBarInfo,
  bannerInfo,
}: Props) {
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
        contactBarInfo={contactBarInfo}
        menuBarInfo={menuBarInfo}
        bannerShouldBeDisplayed = {false}
        bannerInfo={bannerInfo}
      />
      <main className="flex min-h-screen flex-col items-center">
        <CompagnyPresentation>
          <h1 className="title">{contactUs.title}</h1>
          <p className="content">{contactUs.content}</p>
          <form action="">
            <div className="flex flex-col">
                <TextInput type="text" name="username" placeHolder={'Nom et Prenom'} value={''} handlePress={(event:any)=>onEditField(event)} />
                <TextInput type="phone" name="phone" placeHolder={'Telephone'} value={''}  handlePress={(event:any)=>onEditField(event)} />
                <TextInput type="email" name="email" placeHolder={'Email'} value={''}  handlePress={(event:any)=>onEditField(event)} />
            </div>
            <div className="flex flex-col">
                <TextInput type="text" multiline={true} name="description" placeHolder={'Decrivez votre projet ici'} value={''} handlePress={(event:any)=>onEditField(event)} />
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
        </CompagnyPresentation>
      </main>
      <ServiceFrame logo={logo} contacts={contacts} services={services} />
    </>
  );
}
