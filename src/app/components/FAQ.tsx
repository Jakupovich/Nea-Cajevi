
"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";
import { Philosopher, Roboto } from "next/font/google";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQ({ items, title = "Često Postavljana Pitanja" }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <h2 className={`${styles.faqTitle} ${philosopher.className}`}>{title}</h2>
      
      <div className={styles.faqList}>
        {items.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.faqItem} ${openIndex === index ? styles.active : ""}`}
          >
            <button
              className={styles.faqQuestion}
              onClick={() => toggleItem(index)}
              aria-expanded={openIndex === index}
            >
              <span className={`${styles.questionText} ${philosopher.className}`}>
                {item.question}
              </span>
              <span className={styles.faqIcon}>
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            
            <div 
              className={`${styles.faqAnswer} ${openIndex === index ? styles.open : ""}`}
            >
              <p className={roboto.className}>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
