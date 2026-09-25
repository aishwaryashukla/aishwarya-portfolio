import Image, { type StaticImageData } from "next/image";

import { Lock } from "@/components/Icons";
import styles from "./Frames.module.css";

type FrameProps = {
  image: StaticImageData;
  alt: string;
  sizes: string;
  className?: string;
};

export function BrowserFrame({ image, alt, sizes, domain, className = "" }: FrameProps & { domain: string }) {
  return (
    <div className={`${styles.browser} ${className}`}>
      <div className={styles.toolbar} aria-hidden="true">
        <span className={styles.lights}>
          <i />
          <i />
          <i />
        </span>
        <span className={styles.address}>
          <Lock />
          {domain}
        </span>
      </div>
      <Image src={image} alt={alt} sizes={sizes} placeholder="blur" className={styles.screen} />
    </div>
  );
}

export function PhoneFrame({ image, alt, sizes, className = "" }: FrameProps) {
  return (
    <div className={`${styles.phone} ${className}`}>
      <Image src={image} alt={alt} sizes={sizes} placeholder="blur" className={styles.phoneScreen} />
    </div>
  );
}
