
"use client";

import { Philosopher, Roboto } from "next/font/google";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useRouter } from "next/navigation";
import styles from "./oNama.module.css";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700"],
});

export default function ONamePage() {
  const router = useRouter();

  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroTitle} ${philosopher.className}`}>
            Naša Priča
          </h1>
          <p className={`${styles.heroSubtitle} ${roboto.className}`}>
            Tradicija, Kvalitet i Ljubav u Svakoj Šoljici
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <section className={styles.storySection}>
          <div className={styles.storyContent}>
            <h2 className={`${styles.sectionTitle} ${philosopher.className}`}>
              Kako Je Sve Počelo
            </h2>
            <p className={`${styles.paragraph} ${roboto.className}`}>
              Naša priča počinje u malenom selu Mujnice, smještenom u srcu Bosne i Hercegovine, gdje su planine još zelene, a zrak čist. Osnivač kompanije Nea, odrastao je u porodici koja je generacijama njegovala tradiciju sakupljanja i sušenja divljeg bilja.
            </p>
            <p className={`${styles.paragraph} ${roboto.className}`}>
              Svaka šoljica našeg čaja nosi priču - priču o ranim jutarnjim šetnjama planinama, o pažljivom biranju najkvalitetnijih biljaka, i o ljubavi prema prirodi koju prenosimo kroz generacije.
            </p>
          </div>
        </section>

        <section className={styles.valuesSection}>
          <h2 className={`${styles.centerTitle} ${philosopher.className}`}>
            Naše Vrijednosti
          </h2>
          
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🌿</div>
              <h3 className={`${styles.valueTitle} ${philosopher.className}`}>
                Prirodno & Organsko
              </h3>
              <p className={`${styles.valueText} ${roboto.className}`}>
                Svi naši čajevi dolaze iz prirodnih izvora, bez ikakvih hemijskih dodataka. Samo ono što nam priroda pokloni.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>👨‍👩‍👧‍👦</div>
              <h3 className={`${styles.valueTitle} ${philosopher.className}`}>
                Porodični Biznis
              </h3>
              <p className={`${styles.valueText} ${roboto.className}`}>
                Kao mali porodični biznis, svaki proizvod tretiramo sa posebnom pažnjom i ljubavlju, kao da ga pravimo za vlastitu porodicu.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>⭐</div>
              <h3 className={`${styles.valueTitle} ${philosopher.className}`}>
                Vrhunska Kvaliteta
              </h3>
              <p className={`${styles.valueText} ${roboto.className}`}>
                Pažljivo biramo i obrađujemo samo najbolje biljke, osiguravajući da svaka šoljica pruži potpuni užitak.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h3 className={`${styles.valueTitle} ${philosopher.className}`}>
                Podrška Zajednici
              </h3>
              <p className={`${styles.valueText} ${roboto.className}`}>
                Sarađujemo sa lokalnim proizvođačima, podržavajući ekonomiju naše zajednice i čuvajući tradicionalne metode.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.processSection}>
          <h2 className={`${styles.centerTitle} ${philosopher.className}`}>
            Naš Proces
          </h2>
          
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>01</div>
              <h3 className={`${styles.stepTitle} ${philosopher.className}`}>
                Sakupljanje
              </h3>
              <p className={`${styles.stepText} ${roboto.className}`}>
                Ručno birame najkvalitetnije biljke u optimalnom periodu cvatnje, kada je njihova ljekovitost na vrhuncu.
              </p>
            </div>

            <div className={styles.processStep}>
              <div className={styles.stepNumber}>02</div>
              <h3 className={`${styles.stepTitle} ${philosopher.className}`}>
                Sušenje
              </h3>
              <p className={`${styles.stepText} ${roboto.className}`}>
                Koristimo tradicionalne metode sušenja koje čuvaju sve prirodne blagodati i aromu bilja.
              </p>
            </div>

            <div className={styles.processStep}>
              <div className={styles.stepNumber}>03</div>
              <h3 className={`${styles.stepTitle} ${philosopher.className}`}>
                Pakovanje
              </h3>
              <p className={`${styles.stepText} ${roboto.className}`}>
                Svaki čaj pažljivo pakujemo u eko-friendly materijale koji čuvaju svježinu i kvalitetu.
              </p>
            </div>

            <div className={styles.processStep}>
              <div className={styles.stepNumber}>04</div>
              <h3 className={`${styles.stepTitle} ${philosopher.className}`}>
                Dostava
              </h3>
              <p className={`${styles.stepText} ${roboto.className}`}>
                Brza i sigurna dostava direktno na vašu adresu, kako biste što prije uživali u našim čajevima.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <h2 className={`${styles.ctaTitle} ${philosopher.className}`}>
            Pridružite Se Našoj Porodici
          </h2>
          <p className={`${styles.ctaText} ${roboto.className}`}>
            Otkrijte čaroliju prirodnih čajeva i postanite dio naše priče
          </p>
          <div className={styles.ctaButtons}>
            <Button
              width="200px"
              height="55px"
              rounded="12px"
              ariaLabel="Pregledaj proizvode"
              onClick={() => {
                router.push("/");
                setTimeout(() => {
                  const productsSection = document.getElementById("products");
                  productsSection?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
            >
              Pregledaj Proizvode
            </Button>
            <Button
              width="200px"
              height="55px"
              rounded="12px"
              ariaLabel="Kontaktiraj nas"
              onClick={() => router.push("/kontakt")}
            >
              Kontaktiraj Nas
            </Button>
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={`${styles.footerTitle} ${philosopher.className}`}>Kontaktirajte Nas</h3>
            <p className={`${styles.footerText} ${roboto.className}`}>+387 61 652 428</p>
            <p className={`${styles.footerText} ${roboto.className}`}>info@neas.ba</p>
            <p className={`${styles.footerText} ${roboto.className}`}>Mujnice bb, Travnik 72270</p>
          </div>

          <div className={styles.footerSection}>
            <h3 className={`${styles.footerTitle} ${philosopher.className}`}>Radni Sati</h3>
            <p className={`${styles.footerText} ${roboto.className}`}>Ponedjeljak–Petak: 19:00–23:00</p>
            <p className={`${styles.footerText} ${roboto.className}`}>Subota-Nedelja: Neradni</p>
          </div>
        </div>

        <div className={`${styles.footerCopyright} ${roboto.className}`}>
          Copyright © 2025 Nea. Sva prava zadržana.
        </div>
      </footer>
    </div>
  );
}
