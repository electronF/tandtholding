"use client";

import { PropsWithChildren } from "react";

import "./textinput.scss";

interface Props extends PropsWithChildren {
  multiline?: boolean;
  name: string;
  type: "text" | "email" | "phone";
  placeHolder?: string;
  value?: string;
  handlePress: any;
}

export default function TextInput({
  multiline,
  name,
  type,
  placeHolder,
  value,
  handlePress,
}: Props) {
  return multiline == true ? (
    <textarea
      className="text-input"
      name={name}
      defaultValue={value}
      placeholder={placeHolder}
      onChange={handlePress}
    />
  ) : (
    <input
      type={type}
      className="text-input"
      name={name}
      defaultValue={value}
      placeholder={placeHolder}
      onChange={handlePress}
    />
  );
}
