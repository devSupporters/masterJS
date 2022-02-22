import Link from '@docusaurus/Link'
import React from 'react'
import styles from '../../../css/home/card.module.css'

export default function CategoryCard({ title, description, img_filename }) {
    const randomBorderColor = () => {
        return [styles.cyan, styles.red, styles.blue, styles.orange][
            Math.floor(Math.random() * 4)
        ]
    }
    return (
        <div className={`${styles.card} ${randomBorderColor()}`}>
            <img src={'/img/categories/' + img_filename} />
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={"test"}>start discover</Link>
        </div>
    )
}
