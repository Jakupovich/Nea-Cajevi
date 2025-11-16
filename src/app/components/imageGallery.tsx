"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./page.module.css";

export default function ImageGallery({ images }: { images: StaticImageData[] }) {
  const [mainImage, setMainImage] = useState<StaticImageData>(images[0]);

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
        {images.map((src, index) => (
          <button
            key={index}
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
