"use client";
import React from "react";
import { Philosopher } from "next/font/google";
import styles from "../page.module.css";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  width?: string;
  height?: string;
  href?: string;
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
}: ButtonProps) {
  const style: React.CSSProperties = {
    width,
    height,
    borderRadius: rounded,
  };

  const combinedClassName = `${styles.button} ${philosopher.className} ${className}`;

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel} className={combinedClassName} style={style}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} aria-label={ariaLabel} className={combinedClassName} style={style}>
      {children}
    </button>
  );
}
