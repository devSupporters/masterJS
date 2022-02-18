import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomeCategories from "../components/home/categories/index";
import HomepageHeader from '../components/home/hero/index';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomeCategories />
      </main>
    </Layout>
  );
}
