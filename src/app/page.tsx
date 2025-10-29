"use client";

import Navbar from "./components/Navbar";
import Button from "./components/Button";
import styles from "./page.module.css";
import Image from "next/image";
import { Philosopher, Roboto } from "next/font/google";
import { url } from "inspector";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700"],
});

export default function Home() {
  return (
    <div className={styles.bgTexture}>
      <div className={styles.landing}>
        <Navbar />

        <div className={styles.contentWrap}>
          <div className={styles.textBox}>
            <h1 className={`${styles.title} ${philosopher.className}`}>
              Svježe Iz Naših Bajnih <br /> Vrtova Do Vaše Šoljice
            </h1>

            <p className={`${styles.subtitle} ${roboto.className}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo
              enim sit amet magna semper lacinia. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. In commodo enim sit amet.
            </p>

            <div className={styles.ctaRow}>
              <Button
                width="300px"
                height="50px"
                rounded="25px"
                ariaLabel="Istraži"
                onClick={() => console.log("Istraži clicked")}
              >
                Istraži
              </Button>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.benefitsSection}>
        <div className={styles.benefitsImage}></div>

        <div className={styles.benefitsText}>
          <p className={`${styles.benefitsLabel} ${roboto.className}`}>
            PREDNOSTI
          </p>

          <h2 className={`${styles.benefitsTitle} ${philosopher.className}`}>
            Skrivene Zdravstvene <br /> Prednosti Čaja
          </h2>

          <p className={`${styles.benefitsDesc} ${roboto.className}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo
            enim sit amet magna semper lacinia. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. In commodo enim sit amet.
          </p>

          <Button
            width="150px"
            height="45px"
            rounded="25px"
            ariaLabel="Istraži"
            onClick={() => console.log("Istraži clicked")}
          >
            Istraži
          </Button>
        </div>
      </section>
      <section className={styles.whyusContainer}>
        <h1 className={`${styles.whyusSince} ${roboto.className}`}>SINCE 2025</h1>
        <h1 className={`${styles.whyusTitle} ${philosopher.className}`}>Zašto Izabrati Nas</h1>
        <p className={`${styles.whyusText} ${roboto.className}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo enim sit amet magna semper lacinia. Lorem ipsum dolor sit amet.</p>
        <div className={styles.whyusPhoto}>
          <div className={styles.photoContainer}>
            <div className={styles.photo1}></div>
            <h1 className={`${styles.whyusPhotoText} ${philosopher.className}`}>Organski Proizvodi</h1>
          </div>
          <div className={styles.photoContainer}>
            <div className={styles.photo2}></div>
            <h1 className={`${styles.whyusPhotoText} ${philosopher.className}`}>Odlična usluga za korisnike</h1>
          </div>
          <div className={styles.photoContainer}>
            <div className={styles.photo3}></div>
            <h1 className={`${styles.whyusPhotoText} ${philosopher.className}`}>Prirodni sastojci</h1>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.productsContainer}>
        <div className={styles.productsSubContainer}>
          <h1 className={`${styles.productsTitle} ${philosopher.className}`} >Naše jedinstvene Arome</h1>
          <div className={styles.productPhotos}>
            <div className={styles.productPhotosSubContainer}>
              <div className={styles.productPhoto}></div>
              <p className={`${styles.productName} ${roboto.className}`}>Kamilicia</p>
            </div>
            <div className={styles.productPhotosSubContainer}>
              <div className={styles.productPhoto2}></div>
              <p className={`${styles.productName} ${roboto.className}`}>Kamilicia</p>
            </div>
            <div className={styles.productPhotosSubContainer}>
              <div className={styles.productPhoto3}></div>
              <p className={`${styles.productName} ${roboto.className}`}>Kamilicia</p>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
