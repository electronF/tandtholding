import { PropsWithChildren } from "react";
import Image from "next/image";

import "./serviceframe.scss";

interface Props extends PropsWithChildren {
  imagePath: string;
  name: string;
  subServices: string[];
}

export default function ServiceFrame({ name, imagePath, subServices }: Props) {
  return (
    <div className="flex flex-col justify-center service-frame">
      <Image
        src={imagePath}
        alt={name.substring(0, 20)}
        width={100}
        height={50}
        className="service-frame-image"
      />
      <span className="service-frame-title">{name}</span>
      <ul className="flex flex-col">
        {subServices.map((service) => (
          <li key={"service-frame-service"}>{service}</li>
        ))}
      </ul>
    </div>
  );
}
