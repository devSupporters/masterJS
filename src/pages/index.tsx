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
                <meta property="og:url" content="https://masterjs.vercel.app/" />
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

                <meta property="twitter:card" content="https://masterjs.vercel.app/img/cover.png" />
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
                    content="https://masterjs.vercel.app/img/cover.png"
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
