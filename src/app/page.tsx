"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log(process?.env?.testKey);
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Earn A Living From Your&nbsp;
          <code className={styles.code}>Creations!</code>
        </p>
        <div className="mr-auto">
          <a
            className="home-logo-initial"
            href="https://christiantannahill.azurewebsites.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/CT1021.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={75}
              height={50}
              priority
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </a>
        </div>
      </div>

      <div className="d-flex xl-3 lg-4 md-7 sm-8 xs-9">
        <Image
          id="logo"
          className={styles.logo}
          src="/ArtisticLiving.svg"
          alt="Artistic Living Logo"
          width={250}
          height={50}
          priority
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </div>
      <div className={styles.center}></div>

      <div className={styles.grid}>
        <a href="/viewart" className={styles.card} rel="noopener noreferrer">
          <h2>
            View / Buy Art <span>-&gt;</span>
          </h2>
          <p>Find art for viewing or to purchase online through our website!</p>
        </a>

        <a
          href="/viewartist"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Artists <span>-&gt;</span>
          </h2>
          <p>Learn about the artists who contribute to us all!</p>
        </a>

        <a
          href="/viewcategories"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Categories <span>-&gt;</span>
          </h2>
          <p>Explore different categories of art.</p>
        </a>

        <a
          href="viewcart"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Contribute <span>-&gt;</span>
          </h2>
          <p>
            They do great things so feel free to contribute to any of the
            artists!
          </p>
        </a>
      </div>
    </main>
  );
}
