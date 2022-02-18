import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero toggle-background-color", styles.heroBanner)}>
      <div className="container">
        <div>
          <img className={styles.heroBannerImg} src="./img/logo.png" alt="masterJS logo image" />
        </div>
        <p className={clsx("hero__subtitle", styles.heroBannerSub)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link to="/docs/intro">
            <button className={styles.discoverBtn}>
              <img src="/img/discover.png" />
              Discover
            </button>
          </Link>

          <Link to="https://github.com/devSupporters/masterJS">
            <button className={styles.githubBtn}>
              <img src="/img/github.png" />
              GitHub
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
