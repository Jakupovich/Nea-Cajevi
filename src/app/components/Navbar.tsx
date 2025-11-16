"use client";

import React, { useState, useEffect } from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    if (path.startsWith("#")) {
      // If we are not on the homepage, navigate there first
      if (pathname !== "/") {
        router.push("/" + path);
      } else {
        const section = document.getElementById(path.substring(1));
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      router.push(path);
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.left}>
        <Link href="/" className={styles.navlink} onClick={(e) => { e.preventDefault(); handleNavClick("/"); }}>Početak</Link>
        <Link href="/o-nama" className={styles.navlink} onClick={(e) => { e.preventDefault(); handleNavClick("/o-nama"); }}>O Nama</Link>
        <a className={styles.navlink} href="#products" onClick={(e) => { e.preventDefault(); handleNavClick("#products"); }}>Proizvodi</a>
      </nav>

      <div className={styles.center}>
        <Link href="/" className={styles.logo} onClick={(e) => { e.preventDefault(); handleNavClick("/"); }}>
          <Image src="/next.svg" alt="NEA Čajevi logo" width={695} height={350} priority />
        </Link>
      </div>

      <div className={styles.right}>
        <Button
          width="194px"
          height="50px"
          rounded="25px"
          ariaLabel="Kontaktirajte nas"
          onClick={() => handleNavClick("/kontakt")}
        >
          Kontaktirajte nas
        </Button>
      </div>

      <button
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className={`${styles.hamburgerLine} ${isOpen ? styles.open : ""}`}></span>
        <span className={`${styles.hamburgerLine} ${isOpen ? styles.open : ""}`}></span>
        <span className={`${styles.hamburgerLine} ${isOpen ? styles.open : ""}`}></span>
      </button>

      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}>
        <nav className={styles.mobileNav}>
          <Link href="/" className={styles.mobileLink} onClick={(e) => { e.preventDefault(); handleNavClick("/"); }}>Početak</Link>
          <Link href="/o-nama" className={styles.mobileLink} onClick={(e) => { e.preventDefault(); handleNavClick("/o-nama"); }}>O Nama</Link>
          <a className={styles.mobileLink} href="#products" onClick={(e) => { e.preventDefault(); handleNavClick("#products"); }}>Proizvodi</a>
          <Link href="/kontakt" className={styles.mobileLink} onClick={(e) => { e.preventDefault(); handleNavClick("/kontakt"); }}>Kontakt</Link>
        </nav>
        <div className={styles.mobileButton}>
          <Button
            width="100%"
            height="50px"
            rounded="25px"
            ariaLabel="Kontaktirajte nas"
            onClick={() => handleNavClick("/kontakt")}
          >
            Kontaktirajte nas
          </Button>
        </div>
      </div>
    </header>
  );
}
