"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function ImageGallery({ images }: { images: string[] }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className={styles.galleryContainer}>
      {/* Glavna slika */}
      <div className={styles.mainImageWrapper}>
        <Image
          src={mainImage}
          alt="Main"
          fill
          style={{ objectFit: "cover" }}
          className={styles.mainImage}
        />
      </div>

      {/* Thumbnails */}
      <div className={styles.thumbnailGrid}>
        {images.map((src) => (
          <button
            key={src}
            onClick={() => setMainImage(src)}
            className={styles.thumbnailButton}
          >
            <Image
              src={src}
              alt="Thumbnail"
              width={200}
              height={150}
              className={styles.thumbnailImage}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
