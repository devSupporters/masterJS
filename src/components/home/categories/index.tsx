import React, { useLayoutEffect, useState } from 'react'
import clsx from 'clsx'
import styles from '../../../css/home/categories.module.css'
import CategoryCard from './category-card'

export default function HomeCategories(): JSX.Element {
    const [cards, setCards] = useState([])
    useLayoutEffect(() => {
        fetch('/content/categories.json')
            .then((res) => res.json())
            .then((data) => setCards(data.categories))
            .catch((err) => console.log(err.message))
    }, [])
    return (
        <section className={clsx('toggle-background-color', styles.features)}>
            <div className={styles.title}>
                <h1 className="text--center">Table of Content</h1>
            </div>
            <div className={styles.categoriesTable}>
                {cards.map((card) => (
                    <CategoryCard
                        title={card.title}
                        description={card.description}
                        img_filename={card.img_filename}
                    />
                ))}
            </div>
        </section>
    )
}
