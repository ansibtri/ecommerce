import './herocategory.css';

const Herocategory = () => {
  return (
    <div>
        <div className="display-grid grid-3 hero-category">
          <div className="display-flex flex-column justify-content-end align-items-space-between hero-category__item" style={{"background": "url('./assets/banner-image.jpg') no-repeat right center/ cover"}}>
            <div className="hero-category__item__title text-right">WOMEN'S <br/>SECTION</div>
            <div className="hero-category__item__tagline text-right">Check out this hottest week's styles</div>
            <div className='text-right'><a href="#" className='hero-category__item__button'>SHOP NOW</a></div>
          </div>
          <div className="hero-category__item" style={{"background": "url('./assets/banner-image-2.jpg') no-repeat center center/ cover","backgroundColor": "rgba(248, 247, 216, 0.7)"}}>
            <div className="hero-category__item__title text-center text-black">NEW <br/>ARRIVAls</div>
            <div className="hero-category__item__tagline text-center text-black">Check out this hottest week's styles</div>
            <div className="text-center"><a href="#" className='hero-category__item__button'>SHOP NOW</a></div>
          </div>
          <div className="hero-category__item" style={{"background": "url('./assets/banner-image-3.jpg') no-repeat center center/ cover"}}>
            <div className="hero-category__item__title text-left">MEN'S <br/>section</div>
            <div className="hero-category__item__tagline">Check out this hottest week's styles</div>
            <div className='text-left'><a href="#" className='hero-category__item__button'>SHOP NOW</a></div>
          </div>
        </div>
    </div>
  )
}

export default Herocategory