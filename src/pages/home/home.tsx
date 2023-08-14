import { PropsWithChildren } from "react";

import ContactFrame from "@/modules/contactframe/contactframe";
import HeaderBar from "@/modules/headerbar/headerbar";
import Footer from "@/modules/footer/footer";
import OurCompagniesSection from "@/modules/ourcompagniessection/ourcompagniessection";
import BrandingFrame from "@/components/uix/brandingframe/brandingframe";
import EmptySection from "@/modules/emptysection/emptysection";
import BrandingAboutFrame from "@/components/uix/brandingaboutframe/brandingaboutframe";

import BannerInfo from "@/types/bannerinfo";
import ContactBarInfo from "@/types/contactbarinfo";
import { default as IconButtonType } from "@/types/iconbutton";
import menuBarInfo from "@/types/menubarinfo";
import Service from "@/types/service";
import { default as OurCompagniesType } from "@/types/ourcompagnies";
import CompagnyBranding from "@/types/compagnybranding";
import BrandingAbout from "@/types/brandingabout";
import { default as ContactFrameType } from "@/types/contactframe";

import "./home.scss";

interface Props extends PropsWithChildren {
  logo: IconButtonType;
  menuBarInfo: menuBarInfo;
  services: Service[];
  socialMedia: IconButtonType[];
  contactFrame: ContactFrameType;
  contactBarInfo: ContactBarInfo;
  bannerInfo: BannerInfo;
  ourCompagnies: OurCompagniesType;
  compagnyBranding: CompagnyBranding;
  aboutFrame: BrandingAbout;
}

export default function HomePage({
  logo,
  menuBarInfo,
  services,
  socialMedia,
  contactFrame,
  contactBarInfo,
  bannerInfo,
  ourCompagnies,
  compagnyBranding,
  aboutFrame,
}: Props) {
  return (
    <>
      <HeaderBar
        contactBarInfo={contactBarInfo}
        menuBarInfo={menuBarInfo}
        bannerShouldBeDisplayed
        bannerInfo={bannerInfo}
      />
      <main className="flex min-h-screen flex-col items-center">
        <EmptySection>
          <BrandingAboutFrame
            titleLabel={aboutFrame.titleLabel}
            title={aboutFrame.title}
            content={aboutFrame.content}
            button={aboutFrame.button}
          />
        </EmptySection>

        <OurCompagniesSection
          title={ourCompagnies.title}
          content={ourCompagnies.content}
          compagnies={ourCompagnies.compagnies}
          backgoundImagePath={ourCompagnies.backgoundImagePath}
          backgroundColor={ourCompagnies.backgroundColor}
        />

        <EmptySection>
          <h2 className="presentation-title">{compagnyBranding.title}</h2>
          <div className="flex flex-row justify-center brandings">
            {compagnyBranding.brandings.map((branding) => (
              <BrandingFrame
                name={branding.name}
                imagePath={branding.imagePath}
                content={branding.content}
                link={branding.link}
                key={"branding-frane-" + Math.random()}
              />
            ))}
          </div>
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
