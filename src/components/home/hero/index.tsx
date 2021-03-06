import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from '../../../css/home/index.module.css'
import clsx from 'clsx'
import Link from '@docusaurus/Link'

export default function HomepageHeader(): JSX.Element {
    const { siteConfig } = useDocusaurusContext()
    return (
        <header
            className={clsx('hero toggle-background-color', styles.heroBanner)}
        >
            <div className="container">
                <div>
                    <img
                        className={styles.heroBannerImg}
                        src="./img/logo.png"
                        alt="masterJS logo image"
                    />
                </div>
                <p className={clsx('hero__subtitle', styles.heroBannerSub)}>
                    {siteConfig.tagline}
                </p>
                <div className={styles.buttons}>
                    <Link to="#table-of-content">
                        <button className={styles.discoverBtn}>
                            <img src="/img/discover.png" />
                            Discover
                        </button>
                    </Link>

                    <Link to="https://www.buymeacoffee.com/alhashmis28">
                        <button className={styles.githubBtn} style={{wordSpacing:".1px"}}>
                            <img src="/img/coffee.png" />
                            Buy me a coffee
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    )
}
