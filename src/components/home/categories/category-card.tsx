import React, { useMemo } from 'react'
import Link from '@docusaurus/Link'
import styles from '../../../css/home/card.module.css'
import clsx from 'clsx'

export default function CategoryCard({ title, description, img_filename }) {
    const randomColor = useMemo(() => {
        return [
            styles.cyan,
            styles.red,
            styles.blue,
            styles.orange,
            styles.purple,
            styles.green
        ][Math.floor(Math.random() * 6)]
    }, [])
    return (
        <div className={clsx(styles.card, randomColor)}>
            <img src={'/img/categories/' + img_filename} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={'test'} className={clsx(styles.linkButton, randomColor)}>
                start discover
            </Link>
        </div>
    )
}
