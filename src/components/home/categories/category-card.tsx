import React from 'react'

export default function CategoryCard({ title, description, img_filename }) {
    return (
        <div className="card">
            <h4>{title}</h4>
            <p>{description}</p>
            <img src={'/img/categories/' + img_filename} />
        </div>
    )
}
