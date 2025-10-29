import React from "react";
import Button from "./Button";
import Image from "next/image";
import styles from "../page.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.left}>
        <a className={styles.navlink} href="#">Početak</a>
        <a className={styles.navlink} href="#">O Nama</a>
        <a className={styles.navlink} href="#">Proizvodi</a>
      </nav>

      <div className={styles.center}>
        {/* Logo (možeš zamijeniti sa Image ili tekstom) */}
        <div className={styles.logo}>
          <Image src="/next.svg" alt="NEA logo" width={695} height={350} />
        </div>
      </div>

      <div className={styles.right}>
      <Button
              width="194px"
              height="50px"
              rounded="25px"
              ariaLabel="Kontaktirajte nas"
              onClick={() => console.log("Istrazi clicked")}
            >
              Kontaktirajte nas
            </Button>
      </div>
    </header>
  );
}
