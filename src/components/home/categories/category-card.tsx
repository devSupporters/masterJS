import React, { useMemo } from 'react'
import Link from '@docusaurus/Link'
import styles from '../../../css/home/card.module.css'
import clsx from 'clsx'

interface CardProps {
    title: string
    description: string
    img_filename: string
    path: string
}

export default function CategoryCard({
    title,
    description,
    img_filename,
    path
}: CardProps) {
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
            <Link
                to={'/docs/' + path}
                className={clsx(styles.linkButton, randomColor)}
            >
                start discover
            </Link>
        </div>
    )
}
