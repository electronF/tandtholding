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

interface Props extends PropsWithChildren {
  logo: IconButtonType;
  menuBarInfo: menuBarInfo;
  services: Service[];
  socialMedia: IconButtonType[];
  contactBarInfo: ContactBarInfo;
  bannerInfo: BannerInfo;
}

export default function CustomerOpignions({
  logo,
  menuBarInfo,
  services,
  socialMedia,
  contactBarInfo,
  bannerInfo,
}: Props) {
  var title = "Ce que nos clients pensent de nous";
  var customersOpignions: CustomerOpigion[] = [
    {
      imagePath: "",
      content:
        "temoignage client sit amet, consectetur adipiscing elit. Phasellus sodales tellus eleifend massa Description ici sit amet, consectetur adipiscing elit. Phasellus sodales tellus eleifend massa",
      customerName: "Carole Jeanne",
      customerRole: "Commerciale Afrilex",
    },
    {
      imagePath: "",
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
        contactBarInfo={contactBarInfo}
        menuBarInfo={menuBarInfo}
        bannerShouldBeDisplayed={false}
        bannerInfo={bannerInfo}
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
      <Footer logo={logo} socialMedia={socialMedia} services={services} />
    </>
  );
}
