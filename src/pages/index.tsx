import React, { Fragment } from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import HomeCategories from '../components/home/categories/index'
import HomepageHeader from '../components/home/hero/index'
import Head from '@docusaurus/Head'

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext()
    return (
        <Fragment>
            <Head>
                <meta
                    name="title"
                    content="MasterJS | All you need to master javascript"
                />
                <meta
                    name="description"
                    content="All-In-One, free resources and collections related to javascript. we provide useful links to help you learn JavaScript, web development and other related stuff along with some of the best resources available online."
                />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://metatags.io/" />
                <meta
                    property="og:title"
                    content="MasterJS | All you need to master javascript"
                />
                <meta
                    property="og:description"
                    content="All-In-One, free resources and collections related to javascript. we provide useful links to help you learn JavaScript, web development and other related stuff along with some of the best resources available online."
                />
                <meta
                    property="og:image"
                    content="https://masterjs.vercel.app/img/cover.png"
                />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://metatags.io/" />
                <meta
                    property="twitter:title"
                    content="MasterJS | All you need to master javascript"
                />
                <meta
                    property="twitter:description"
                    content="All-In-One, free resources and collections related to javascript. we provide useful links to help you learn JavaScript, web development and other related stuff along with some of the best resources available online."
                />
                <meta
                    property="twitter:image"
                    content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
                ></meta>
            </Head>
            <Layout title="Home" description={siteConfig.tagline}>
                <HomepageHeader />
                <main>
                    <HomeCategories />
                </main>
            </Layout>
        </Fragment>
    )
}
