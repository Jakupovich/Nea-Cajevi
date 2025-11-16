"use client";
import ImageGallery from "@/app/components/imageGallery";
import { useParams } from "next/navigation";
import styles from "../../components/page.module.css"

import slika1 from "../../components/cajevi/kamilica/slika1.jpeg";
import slika2 from "../../components/cajevi/kamilica/slika2.jpeg";
import slika3 from "../../components/cajevi/kamilica/slika3.jpeg";
import slika4 from "../../components/cajevi/menta/slika1.jpeg";
import slika5 from "../../components/cajevi/menta/slika2.jpeg";
import slika6 from "../../components/cajevi/menta/slika33.jpeg";
import slika7 from "../../components/cajevi/sipak/slika1.jpeg";
import slika8 from "../../components/cajevi/sipak/slika2.jpeg";
import slika9 from "../../components/cajevi/sipak/slika3.jpeg";

export default function DetailsPage() {
  const params = useParams();
  const id = params.id as string;

  const allImages = {
    sipak: [slika7, slika8, slika9],
    kamilica: [slika1, slika2, slika3],
    menta: [slika4, slika5, slika6],
  };

  const descriptions: Record<string, string> = {
    kamilica:
      "Kamilica je najpoznatiji umirujući čaj. Idealan je za večernje opuštanje, smiruje želudac i pomaže kod sna. Njegov blag i cvjetni okus čini ga savršenim izborom za svaki dan.",
    menta:
      "Menta osvježava i pomaže kod probave. Njen intenzivan miris i svjež okus čine svaki gutljaj prijatnim i revitalizirajućim.",
    sipak:
      "Šipak je bogat vitaminom C i odličan za jačanje imuniteta. Lagano kiseo okus čini ga izvrsnim za kombiniranje s medom ili drugim biljnim čajevima.",
  };

  const images = allImages[id as keyof typeof allImages];

  if (!images) return <div className={styles.notFound}>Nepoznat čaj.</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{id.toUpperCase()}</h1>

      <div className={styles.content}>
        <div className={styles.galleryWrapper}>
          <ImageGallery images={images} />
        </div>

        <div className={styles.descriptionWrapper}>
          <h2 className={styles.subtitle}>Opis</h2>
          <p className={styles.descriptionText}>
            {descriptions[id as keyof typeof descriptions]}
          </p>
        </div>
      </div>
    </div>
  );
}
