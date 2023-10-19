import './herocategory.css';
import { Link } from 'react-router-dom';
const Herocategory = () => {
  return (
    <div>
        <div className="display-grid grid-3 hero-category">
          <div className="display-flex flex-column justify-content-end align-items-space-between hero-category__item" style={{"background": "url('/assets/banner-image.jpg') no-repeat right center/ cover"}}>
            <div className="hero-category__item__title text-right">WOMEN'S <br/>SECTION</div>
            <div className="hero-category__item__tagline text-right">Check out this hottest week's styles</div>
            <div className='text-right'><Link to="/shop/women" className='hero-category__item__button'>SHOP NOW</Link></div>
          </div>
          <div className="hero-category__item" style={{"background": "linear-gradient(to bottom, rgba(245, 246, 252, 0.5), rgba(245, 246, 252, 0.5)), url('/assets/banner-image-2.jpg') no-repeat center center/ cover"}}>
            <div className="hero-category__item__title text-center text-black">NEW <br/>ARRIVAls</div>
            <div className="hero-category__item__tagline text-center text-black">Check out this hottest week's styles</div>
            <div className="text-center"><Link to="/shop" className='hero-category__item__button'>SHOP NOW</Link></div>
          </div>
          <div className="hero-category__item" style={{"background": "url('/assets/banner-image-3.jpg') no-repeat center center/ cover"}}>
            <div className="hero-category__item__title text-left">MEN'S <br/>section</div>
            <div className="hero-category__item__tagline">Check out this hottest week's styles</div>
            <div className='text-left'><Link to="/shop/men" className='hero-category__item__button'>SHOP NOW</Link></div>
          </div>
        </div>
    </div>
  )
}

export default Herocategory