
"use client";
import React from "react";
import { Philosopher } from "next/font/google";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  className?: string;
  width?: string;
  height?: string;
  ariaLabel?: string;
  rounded?: string;
}

export default function Button({
  children,
  onClick,
  className = "",
  width,
  height,
  href,
  ariaLabel,
  rounded,
  type,
  ...rest
}: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 500,
    boxShadow: "0 1px 2px rgba(0,0,0,.05)",
    transition: "transform .1s ease-in-out, box-shadow .1s ease-in-out",
    outline: "none",
    border: "none",
    fontSize: "clamp(16px, 2vw, 20px)",
    backgroundColor: "#7D806A",
    color: "#fff",
    padding: "12px 28px",
    borderRadius: rounded || "8px",
    cursor: "pointer",
    width: width || "auto",
    height: height || "auto",
    textDecoration: "none",
  };

  const combinedClassName = `${philosopher.className} ${className}`;

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget as HTMLElement;
    target.style.transform = "translateY(-2px)";
    target.style.boxShadow = "0 4px 12px rgba(0,0,0,.15)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget as HTMLElement;
    target.style.transform = "translateY(0)";
    target.style.boxShadow = "0 1px 2px rgba(0,0,0,.05)";
  };

  if (href) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={combinedClassName}
        style={baseStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={combinedClassName}
      style={baseStyle}
      type={type}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
    </button>
  );
}
