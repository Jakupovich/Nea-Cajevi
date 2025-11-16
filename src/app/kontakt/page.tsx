
"use client";

import { Philosopher, Roboto } from "next/font/google";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./kontakt.module.css";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700"],
});

export default function KontaktPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    ime: "",
    email: "",
    telefon: "",
    poruka: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({ ime: "", email: "", telefon: "", poruka: "" });
      
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroTitle} ${philosopher.className}`}>
            Kontaktirajte Nas
          </h1>
          <p className={`${styles.heroSubtitle} ${roboto.className}`}>
            Rado ćemo odgovoriti na sva vaša pitanja
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.contentGrid}>
          <div className={styles.infoSection}>
            <h2 className={`${styles.sectionTitle} ${philosopher.className}`}>
              Stupite u Kontakt
            </h2>
            <p className={`${styles.paragraph} ${roboto.className}`}>
              Bilo da imate pitanje o našim proizvodima, želite napraviti narudžbu ili jednostavno želite podijeliti svoje mišljenje - tu smo za vas!
            </p>

            <div className={styles.contactInfoList}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📞</div>
                <div>
                  <h3 className={`${styles.contactLabel} ${philosopher.className}`}>Telefon</h3>
                  <p className={`${styles.contactValue} ${roboto.className}`}>+387 61 652 428</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>✉️</div>
                <div>
                  <h3 className={`${styles.contactLabel} ${philosopher.className}`}>Email</h3>
                  <p className={`${styles.contactValue} ${roboto.className}`}>info@neas.ba</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📍</div>
                <div>
                  <h3 className={`${styles.contactLabel} ${philosopher.className}`}>Adresa</h3>
                  <p className={`${styles.contactValue} ${roboto.className}`}>Mujnice bb, Travnik 72270<br/>Bosna i Hercegovina</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>🕐</div>
                <div>
                  <h3 className={`${styles.contactLabel} ${philosopher.className}`}>Radno Vrijeme</h3>
                  <p className={`${styles.contactValue} ${roboto.className}`}>
                    Ponedjeljak–Petak: 19:00–23:00<br/>
                    Subota-Nedelja: Neradni
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.socialSection}>
              <h3 className={`${styles.socialTitle} ${philosopher.className}`}>
                Pratite Nas
              </h3>
              <div className={styles.socialLinks}>
                <a href="https://www.facebook.com/p/NEA-%C4%8Cajevi-61580153498903/" className={styles.socialLink} aria-label="Facebook">
                  <span>Facebook</span>
                </a>
                <a href="https://www.instagram.com/nea_cajevi/" className={styles.socialLink} aria-label="Instagram">
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.mapSection}>
          <h2 className={`${styles.mapTitle} ${philosopher.className}`}>
            Naša Lokacija
          </h2>
          <div className={styles.mapPlaceholder}>
            <div className={styles.mapOverlay}>
              <p className={`${roboto.className}`}>
                📍 Mujnice bb, Travnik 72270, Bosna i Hercegovina
              </p>
            </div>
          </div>
        </div>

        <div className={styles.faqSection}>
          <h2 className={`${styles.centerTitle} ${philosopher.className}`}>
            Brza Pitanja
          </h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3 className={`${styles.faqQuestion} ${philosopher.className}`}>
                Kako mogu napraviti narudžbu?
              </h3>
              <p className={`${styles.faqAnswer} ${roboto.className}`}>
                Možete nas kontaktirati putem telefona ili email-a, a uskoro ćemo imati i online naručivanje!
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={`${styles.faqQuestion} ${philosopher.className}`}>
                Koja je minimalna narudžba?
              </h3>
              <p className={`${styles.faqAnswer} ${roboto.className}`}>
                Nemamo minimalnu narudžbu - možete naručiti čak i jedno pakovanje!
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={`${styles.faqQuestion} ${philosopher.className}`}>
                Koliko traje dostava?
              </h3>
              <p className={`${styles.faqAnswer} ${roboto.className}`}>
                Dostava širom Bosne i Hercegovine obično traje 2-5 radnih dana.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={`${styles.faqQuestion} ${philosopher.className}`}>
                Da li nudite veleprodaju?
              </h3>
              <p className={`${styles.faqAnswer} ${roboto.className}`}>
                Da! Kontaktirajte nas za posebne cijene za veće količine.
              </p>
            </div>
          </div>
        </div>
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
