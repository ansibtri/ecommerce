import React from 'react'
import './gallery.css'
import productsData from '../../../data/Products'
import { useParams } from 'react-router-dom'
const Gallery = () => {
  const params = useParams();
  const product = productsData.filter((item) => {
    return item.product_slug === params.slug
})[0];
  return (
    <>
    <div className="gallery">
        <img src={product["product_image"]} alt="" />
    </div>
    </>
  )
}

export default Gallery