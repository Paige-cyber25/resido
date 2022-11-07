import React from "react";

interface BtnProps {
  classes?: string;
  type?: "filled" | "bordered";
  tag?: React.ElementType;
  children: React.ReactNode;
  text: string;
  bgColor?: "light_green" | "white";
  color?: string;
  borderColor?: "light_green" | "white";
  [x: string]: any;
}

const Button = React.forwardRef(
  (
    {
      classes,
      type,
      children,
      text,
      tag,
      bgColor,
      color,
      borderColor,
      ...restProps
    }: BtnProps,
    ref
  ) => {
    let Tag = tag ? tag : "button";

    return (
      <Tag {...restProps} className={`${classes}`} ref={ref}>
        {text ? text : children}
      </Tag>
    );
  }
);

export default Button;