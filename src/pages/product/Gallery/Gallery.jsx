import React, {useState} from 'react'
import './gallery.css'
import productsData from '../../../data/Products'
import { useParams } from 'react-router-dom'
const Gallery = () => {
  const params = useParams();
  const product = productsData.filter((item) => {
    return item.product_slug === params.slug
})[0];
const [slideImage, setImage] = useState(product["product_image"])
const changeSlide = (e) => {
  const image = e.target.src;
  setImage(image)
}

  return (
    <>
    <div className="product_showcase">
        <img src={slideImage} alt="" />
    </div>
    <div className="gallery">
      <div className="images">
      <div className="img" onClick={changeSlide}>
        <img src="/assets/11_4.jpg" alt="" />
        </div>
        <div className="img" onClick={changeSlide}>
        <img src="/assets/11_2.jpg" alt="" />
        </div>
        <div className="img" onClick={changeSlide}>
        <img src="/assets/11_3.jpg" alt="" />
        </div>
        <div className="img" onClick={changeSlide}>
        <img src="/assets/11_1.jpg" alt="" />
        </div>
        <div className="img" onClick={changeSlide}>
        <img src="/assets/9_1.jpg" alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Gallery