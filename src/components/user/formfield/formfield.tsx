"use client";

import { PropsWithChildren } from "react";

import "./formfield.scss";

interface Props extends PropsWithChildren {
  name: string;
  type: "text" | "email" | "phone" | "file" | "date" | "time" | "textarea" | "select";
  placeHolder?: string;
  value?: string;
  handlePress: any;
}

export default function FormField({
  name,
  type,
  placeHolder,
  value,
  handlePress,
}: Props) {
  return type == "textarea" ? (
    <textarea
      className="form-field"
      name={name}
      defaultValue={value}
      placeholder={placeHolder}
      onChange={handlePress}
    />
  ) : (
    <input
      type={type}
      className="form-field"
      name={name}
      defaultValue={value}
      placeholder={placeHolder}
      onChange={handlePress}
      accept="
              image/*,
              application/pdf,
              application/vnd.openxmlformats-officedocument.wordprocessingml.document,
              application/vnd.openxmlformats-officedocument.wordprocessingml.template,
              application/vnd.ms-word.document.macroEnabled.12,
              application/vnd.ms-word.template.macroEnabled.12
          "
    />
  );
}
