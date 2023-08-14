import { PropsWithChildren } from "react";

import HeaderBar from "@/modules/headerbar/headerbar";
import Footer from "@/modules/footer/footer";
import EmptySection from "@/modules/emptysection/emptysection";
import IconButton from "@/components/uix/iconbutton/iconbutton";
import ServiceFrame from "@/components/uix/serviceframe/serviceframe";
import ContactFrame from "@/modules/contactframe/contactframe";

import BannerInfo from "@/types/bannerinfo";
import ContactBarInfo from "@/types/contactbarinfo";
import { default as IconButtonType } from "@/types/iconbutton";
import menuBarInfo from "@/types/menubarinfo";
import Service from "@/types/service";
import { default as ContactFrameType } from "@/types/contactframe";

import "./ourcompagnies.scss";



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
  bannerInfo
}: Props) {
  

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
