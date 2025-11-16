"use client";

import Navbar from "./components/Navbar";
import Button from "./components/Button";
import styles from "./page.module.css";
import { Philosopher, Roboto } from "next/font/google";
import InfiniteCarousel from "@azfar_razzaq/react-infinite-carousel";

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
            Šipak<br></br>
            Šipkov čaj je bogat vitaminom C i prirodnim antioksidansima. Podržava imunitet, doprinosi smanjenju umora i pomaže tijelu u borbi protiv oksidativnog stresa.<br></br>
            <br></br>
            Kamilica<br></br>
            Kamilica je poznata po svom umirujućem djelovanju. Pomaže u opuštanju, poboljšanju sna i smanjenju stresa. Nježno podržava probavu i može umanjiti nadutost i nelagodu u stomaku.<br></br>
            <br></br>
            Menta<br></br>
            Čaj od mente osvježava i doprinosi lakšem disanju. Posebno je cijenjen za olakšavanje probavnih tegoba poput nadutosti, mučnine i grčeva.<br></br>
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
        <p className={`${styles.whyusText} ${roboto.className}`}>Kao mali porodični biznis, posvećeni smo kvaliteti i iskrenom pristupu. Svaki naš čaj nastaje s pažnjom, od prirodnih sastojaka, a naši kupci su uvijek na prvom mjestu. Kod nas dobijaš proizvode iza kojih stoji ljubav, tradicija i briga.</p>
        <div className={styles.whyusPhoto}>
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
      <section className={styles.menuSection}>
        <div className={styles.menuFlower}></div>
        <div className={styles.menuWrapper}>

          {/* CVIJET UKRAS – LIJEVA STRANA */}

          {/* TEKSTUALNI MENI */}
          <div className={styles.menuText}>
            <h2 className={`${styles.menuTitle} ${philosopher.className}`}>
              Naš Najbolji Meni
            </h2>

            <div className={styles.menuList}>
              <div className={styles.menuItem}>
                <div>
                  <h3 className={philosopher.className}>Šipak</h3>
                  <p className={roboto.className}>Prirodna energija i snažan izvor vitamina C.</p>
                </div>
              </div>

              <div className={styles.menuItem}>
                <div>
                  <h3 className={philosopher.className}>Kamilica</h3>
                  <p className={roboto.className}>Umirujući čaj za opuštanje i bolji san.</p>
                </div>
              </div>

              <div className={styles.menuItem}>
                <div>
                  <h3 className={philosopher.className}>Menta</h3>
                  <p className={roboto.className}>Osvježavajući ukus koji olakšava probavu.</p>
                </div>
              </div>
            </div>
          </div>

          {/* DESNA SLIKA */}
          <div className={styles.menuImage}></div>
        </div>

      </section>
      <section className={styles.organicSection}>
        <div className={styles.organicFlower}></div>

        <h2 className={`${styles.organicQuote} ${philosopher.className}`}>
          “Ponekad Sve Što Trebaš Stane <br /> U Jednu Šolju Mira.”
        </h2>

        <div className={styles.organicContent}>
          <div className={styles.organicLeft}>
            <div className={styles.organicImg1}></div>
            <div className={styles.organicImg2}></div>
          </div>

          <div className={styles.organicRight}>
            <div>
              <h3 className={`${styles.organicTitle} ${philosopher.className}`}>Visoka Kvaliteta</h3>
              <p className={`${styles.organicText} ${roboto.className}`}>
              Koristimo samo pažljivo odabrane sastojke kako bismo osigurali vrhunsku aromu i pouzdanu kvalitetu svakog proizvoda.
              </p>
            </div>

            <div>
              <h3 className={`${styles.organicTitle} ${philosopher.className}`}>Uvijek Svježe</h3>
              <p className={`${styles.organicText} ${roboto.className}`}>
              Naši čajevi se pripremaju od svježih i prirodnih biljaka, čuvajući njihov puni miris i bogat ukus.
              </p>
            </div>
          </div>
        </div>

        <p className={`${styles.bestSeller} ${roboto.className}`}>BEST SELLER</p>

        <h2 className={`${styles.organicBottomTitle} ${philosopher.className}`}>
          Vjerujemo U Umjetnost<br />Stvaranja Savršenog Napitka.
        </h2>
      </section>
      <section className={styles.iconsSection}>
        {/* Lijeva kolona */}
        <div className={styles.iconsColumn}>
          <div className={styles.iconItem}>
            <div className={styles.starIcon}></div>
            <p className={roboto.className}>Najbolji Kvalitet</p>
          </div>

          <div className={styles.iconItem}>
            <div className={styles.tagIcon}></div>
            <p className={roboto.className}>Slanje Sirom Bosne</p>
          </div>

          <div className={styles.iconItem}>
            <div className={styles.bagIcon}></div>
            <p className={roboto.className}>Best Seller</p>
          </div>
        </div>

        {/* Srednja slika šipka */}
        <div className={styles.centerBox}></div>

        {/* Desna kolona */}
        <div className={styles.iconsColumn}>
          <div className={styles.iconItem}>
            <p className={roboto.className}>Organski Proizvod</p>
            <div className={styles.leafIcon}></div>
          </div>

          <div className={styles.iconItem}>
            <p className={roboto.className}>Loyal-Tea Nagrade</p>
            <div className={styles.presentIcon}></div>
          </div>

          <div className={styles.iconItem}>
            <p className={roboto.className}>Eko Pakovanje</p>
            <div className={styles.boxIcon}></div>
          </div>
        </div>
      </section>
      <section className={styles.gallery}>
        <h4>NAŠA GALERIJA</h4>
        <h2>Uvjerite Se Da Smo Stvarno Najbolji</h2>

        <div className={styles.galleryTop}></div>

        <div className={styles.galleryBottom}>
          <div className={styles.smallImg}></div>
          <div className={styles.bigImg}></div>
        </div>
      </section>
      <section className={styles.carouselWrapper}>
        <div className={styles.carouselTrack}>
          <div className={`${styles.carouselItem} ${styles.carousel7}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel2}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel14}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel4}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel11}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel1}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel9}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel15}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel6}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel12}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel3}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel17}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel8}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel13}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel5}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel10}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel16}`}></div>

          {/* Drugi set (duplicirano, ali izmiješano drugačije da izgleda prirodno) */}

          <div className={`${styles.carouselItem} ${styles.carousel11}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel3}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel9}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel5}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel14}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel2}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel8}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel16}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel1}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel12}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel6}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel13}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel17}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel4}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel7}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel10}`}></div>
          <div className={`${styles.carouselItem} ${styles.carousel15}`}></div>

        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.container}>

          {/* Left */}
          <div className={styles.section}>
            <h3 className={`${styles.footerTitle} ${philosopher.className}`}>Kontaktirajte Nas</h3>
            <p className={`${styles.underLine} ${styles.footerText} ${roboto.className}`}>+387 61 652 428</p>
            <p className={`${styles.underLine} ${styles.footerText} ${roboto.className}`}>info@neas.ba</p>
            <p className={`${styles.footerText} ${roboto.className}`}>Mujnice bb, Travnik 72270</p>
          </div>

          {/* Center */}
          <div className={styles.center}>
            <div className={styles.divider}></div>
            <div className={styles.logo2}></div>
            <div className={styles.divider}></div>
          </div>

          {/* Right */}
          <div className={styles.section}>
            <h3 className={`${styles.footerTitle} ${philosopher.className}`}>Radni Sati</h3>
            <p className={`${styles.footerText} ${roboto.className}`}>Ponedjeljak–Petak: 19:00–23:00</p>
            <p className={`${styles.footerText} ${roboto.className}`}>Subota-Nedelja: Neradni</p>
          </div>

        </div>

        <div className={`${styles.footerText} ${roboto.className}`}>
          Copyright Nea
        </div>
      </footer>
    </div>
  );
}
