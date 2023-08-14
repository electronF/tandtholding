import Image from "next/image";
import { PropsWithChildren } from "react";

import "./customeropignionframe.scss";

interface Props extends PropsWithChildren {
  imagePath: string;
  content: string;
  customerName: string;
  customerRole: string;
}

export default function CustomerOpignionFrame({
  imagePath,
  content,
  customerName,
  customerRole,
}: Props) {
  return (
    <div className="flex flex-row customer-opignion-frame">
      <Image
        src={imagePath}
        width={150}
        height={150}
        alt={customerName.substring(0, 20)}
        className="customer-image"
      />
      <div className="flex flex-col customer-opignion">
        <Image
          src={"/assets/icons/quotation-icon.webp"}
          width={64}
          height={64}
          alt="“"
          className="quotation"
        />
        <p className="customer-opignion">{content}</p>
        <span className="customer-name">{customerName}</span>
        <span className="customer-role">{customerRole}</span>
      </div>
    </div>
  );
}
