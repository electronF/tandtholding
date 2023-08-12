import { PropsWithChildren } from "react";

import Compagny from "@/types/compagny";

import "./ourcompagnies.scss";
import CompagnyFrame from "@/components/uix/compagnyframe/compagnyframe";

interface Props extends PropsWithChildren {
  title: string;
  content: string;
  backgoundImagePath: string;
  backgroundColor: string;
  compagnies: Compagny[];
}

export default function OurCompagnies({
  title,
  content,
  compagnies,
  backgoundImagePath,
  backgroundColor,
}: Props) {
  return (
    <section
      className="flex flex-col justify-center our-compagnies"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgoundImagePath})`,
        backgroundColor: backgroundColor,
      }}
    >
      <h2 className="title">{title}</h2>
      <p className="content">{content}</p>
      <div className="flex flex-row justify-around compagnies">
        {compagnies.map((compagny) => (
          <CompagnyFrame
            key={"compagny-frame-" + Math.random()}
            name={compagny.name}
            logoPath={compagny.logoPath}
            content={compagny.content}
            button={compagny.button}
          />
        ))}
      </div>
    </section>
  );
}
