import React from 'react'
import clsx from 'clsx'
import styles from '../../../css/home/categories.module.css'

export default function HomeCategories(): JSX.Element {
    return (
        <section className={clsx('toggle-background-color', styles.features)}>
            <div className="container">
                <h1 className="text--center">Table of Content</h1>
            </div>
        </section>
    )
}
