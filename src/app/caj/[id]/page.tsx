
"use client";

import { useParams, useRouter } from "next/navigation";
import { Philosopher, Roboto } from "next/font/google";
import ImageGallery from "@/app/components/imageGallery";
import FAQ from "@/app/components/FAQ";
import Navbar from "@/app/components/Navbar";
import Button from "@/app/components/Button";
import styles from "./productDetail.module.css";

import slika1 from "../../components/cajevi/kamilica/slika1.jpeg";
import slika2 from "../../components/cajevi/kamilica/slika2.jpeg";
import slika3 from "../../components/cajevi/kamilica/slika3.jpeg";
import slika4 from "../../components/cajevi/menta/slika1.jpeg";
import slika5 from "../../components/cajevi/menta/slika2.jpeg";
import slika6 from "../../components/cajevi/menta/slika33.jpeg";
import slika7 from "../../components/cajevi/sipak/slika1.jpeg";
import slika8 from "../../components/cajevi/sipak/slika2.jpeg";
import slika9 from "../../components/cajevi/sipak/slika3.jpeg";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700"],
});

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const allImages = {
    sipak: [slika7, slika8, slika9],
    kamilica: [slika1, slika2, slika3],
    menta: [slika4, slika5, slika6],
  };

  const productData: Record<string, {
    title: string;
    description: string;
    benefits: string[];
    usage: string;
    ingredients: string;
    faqItems: Array<{ question: string; answer: string }>;
  }> = {
    kamilica: {
      title: "Kamilica",
      description: "Kamilica je najpoznatiji umirujući čaj sa blagim cvjetnim ukusom. Stoljećima se koristi u tradicionalnoj medicini zbog svojih umirujućih i antiinflamatornih svojstava.",
      benefits: [
        "Pomaže kod smanjenja stresa i anksioznosti",
        "Poboljšava kvalitet sna",
        "Olakšava probavne probleme",
        "Djeluje protuupalno",
        "Jača imunološki sistem"
      ],
      usage: "Zalijte jednu kesicu ili kašičicu kamilice sa 200ml ključale vode. Pustite da se čaj vuce 5-7 minuta. Po želji dodajte med ili limun.",
      ingredients: "100% prirodna sušena kamilica (Matricaria chamomilla)",
      faqItems: [
        {
          question: "Koliko često mogu piti čaj od kamilice?",
          answer: "Čaj od kamilice možete piti 2-3 puta dnevno. Najbolje je konzumirati ga ujutro i prije spavanja za optimalne rezultate."
        },
        {
          question: "Da li je siguran za trudnice?",
          answer: "Umjerena konzumacija kamilice je generalno sigurna, ali preporučujemo konsultaciju sa ljekarom prije redovne upotrebe tokom trudnoće."
        },
        {
          question: "Koliko traje čaj nakon otvaranja?",
          answer: "Nakon otvaranja, čaj zadržava svoju svježinu do 12 mjeseci ako se čuva na hladnom i suhom mjestu, zaštićen od direktne svjetlosti."
        },
        {
          question: "Mogu li dodavati druge začine?",
          answer: "Apsolutno! Kamilica se odlično slaže sa medom, limunom, mentom ili đumbirom. Eksperimentirajte i pronađite svoju omiljenu kombinaciju."
        }
      ]
    },
    menta: {
      title: "Menta",
      description: "Osvježavajući čaj od mente sa intenzivnim aromom i mentolskim okusom. Idealan za probavu i osvježenje u bilo koje doba dana.",
      benefits: [
        "Olakšava probavne probleme",
        "Smanjuje nadutost i mučninu",
        "Osvježava dah",
        "Pomaže kod glavobolje",
        "Poboljšava koncentraciju"
      ],
      usage: "Zalijte jednu kesicu ili kašičicu mente sa 200ml ključale vode. Pustite da se čaj vuce 3-5 minuta. Pijte toplo ili hladno sa ledom.",
      ingredients: "100% prirodna sušena menta (Mentha piperita)",
      faqItems: [
        {
          question: "Da li pomaže kod probavnih problema?",
          answer: "Da! Menta je poznata po svojoj sposobnosti da olakša probavu, smanji nadutost i ublažli grčeve u stomaku."
        },
        {
          question: "Mogu li piti mentu prije spavanja?",
          answer: "Menta generalno ne ometa san, ali neki ljudi mogu biti osjetljiviji. Preporučujemo da prvo probate manje količine navečer."
        },
        {
          question: "Da li je dobar za ljetne dane?",
          answer: "Apsolutno! Čaj od mente je savršen za toplo vrijeme - možete ga ohladiti i dodati led za prirodno osvježavajuće piće."
        },
        {
          question: "Kakav je uticaj na bubrege?",
          answer: "Menta je sigurna za bubrege i može čak pomoći kod prevencije bubrežnih kamenaca zahvaljujući svom diuretičkom djelovanju."
        }
      ]
    },
    sipak: {
      title: "Šipak",
      description: "Bogat izvor vitamina C sa prirodno kiselim ukusom. Šipak je poznat po svojim antioksidativnim svojstvima i pozitivnom uticaju na imunitet.",
      benefits: [
        "Izuzetno bogat vitaminom C",
        "Jača imunološki sistem",
        "Antioksidativna zaštita",
        "Podržava zdravlje kože",
        "Pomaže kod upale zglobova"
      ],
      usage: "Zalijte jednu kesicu ili kašičicu šipka sa 200ml ključale vode. Pustite da se čaj vuce 7-10 minuta. Po želji zaslastite medom.",
      ingredients: "100% prirodni sušeni šipak (Rosa canina)",
      faqItems: [
        {
          question: "Koliko vitamina C sadrži?",
          answer: "Šipak sadrži izuzetno visoke količine vitamina C - čak 20 puta više od narandže! Jedna šoljica može pokriti dnevne potrebe."
        },
        {
          question: "Pomaže li kod prehlade?",
          answer: "Da! Visok sadržaj vitamina C i antioksidansa čini šipak odličnim prirodnim sredstvom za jačanje imuniteta i brže oporavak od prehlade."
        },
        {
          question: "Da li je siguran za djecu?",
          answer: "Šipak je siguran za djecu stariju od 2 godine. Djeca obično vole njegov prirodno sladak i kiseo ukus."
        },
        {
          question: "Mogu li ga kombinovati sa drugim čajevima?",
          answer: "Apsolutno! Šipak se odlično kombinuje sa kamilico m, mentom, hibiskusom ili đumbirom za dodatnu aromu i zdravstvene benefite."
        }
      ]
    }
  };

  const images = allImages[id as keyof typeof allImages];
  const product = productData[id as keyof typeof productData];

  if (!images || !product) {
    return (
      <div className={styles.notFound}>
        <Navbar />
        <div className={styles.notFoundContent}>
          <h1 className={philosopher.className}>Proizvod nije pronađen</h1>
          <Button
            width="200px"
            height="50px"
            rounded="25px"
            ariaLabel="Vrati se na početnu"
            onClick={() => router.push("/")}
          >
            Nazad na Početnu
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      
      <div className={styles.container}>
        <button 
          className={`${styles.backButton} ${roboto.className}`}
          onClick={() => router.push("/")}
          aria-label="Nazad na početnu"
        >
          ← Nazad
        </button>

        <div className={styles.heroSection}>
          <div className={styles.imageSection}>
            <ImageGallery images={images} />
          </div>

          <div className={styles.infoSection}>
            <h1 className={`${styles.productTitle} ${philosopher.className}`}>
              {product.title}
            </h1>
            
            <p className={`${styles.productDescription} ${roboto.className}`}>
              {product.description}
            </p>
            <Button
              width="100%"
              height="55px"
              rounded="12px"
              ariaLabel="Kontaktiraj nas za narudžbu"
              onClick={() => router.push("/kontakt")}
            >
              Naruči Sada
            </Button>

            <div className={styles.quickInfo}>
              <div className={styles.infoItem}>
                <span className={roboto.className}>📦 Besplatna dostava</span>
              </div>
              <div className={styles.infoItem}>
                <span className={roboto.className}>✓ 100% prirodno</span>
              </div>
              <div className={styles.infoItem}>
                <span className={roboto.className}>🌿 Organsko</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.detailsSection}>
          <div className={styles.detailCard}>
            <h2 className={`${styles.sectionTitle} ${philosopher.className}`}>
              Zdravstvene Prednosti
            </h2>
            <ul className={`${styles.benefitsList} ${roboto.className}`}>
              {product.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className={styles.detailCard}>
            <h2 className={`${styles.sectionTitle} ${philosopher.className}`}>
              Način Pripreme
            </h2>
            <p className={`${styles.usageText} ${roboto.className}`}>
              {product.usage}
            </p>
          </div>

          <div className={styles.detailCard}>
            <h2 className={`${styles.sectionTitle} ${philosopher.className}`}>
              Sastojci
            </h2>
            <p className={`${styles.ingredientsText} ${roboto.className}`}>
              {product.ingredients}
            </p>
          </div>
        </div>

        <FAQ 
          items={product.faqItems}
          title="Često Postavljana Pitanja"
        />
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
