import React from 'react'
import './herosection.css'
import Divider from '../../../../shared/components/divider/Divider'
const Herosection = () => {
  return (
    <section>
        <div className="display-grid herosection" style={{"--hero-image": "url('./assets/herosection-background.jpg')"}}>
            <div className="herosection__content p-5">
                <p className='herosection__content-tagline'>New ecommerce experience</p>
                <h1 className="herosection__content-title py-4">Summer Sale</h1>
                <p className="herosection__content-tagline-2 py-4">50% OFF</p>
                <p className='mb-4 herosection__description text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur libero cumque ex neque ipsum perspiciatis eum facere officia, sint modi minus reprehenderit saepe quas, iste autem debitis laboriosam? Eaque omnis minima sit illo perferendis qui laborum, recusandae commodi quaerat autem sint impedit, maiores maxime eum, tenetur vero reprehenderit totam ea!</p>
                <Divider classes="mb-4"/>
                <div className="gap-5 herosection__bottom">
                    <p className="herosection__bottom-content">starting at <span>$199</span></p>
                <button className="btn btn-primary herosection__button">SHOP NOW</button>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Herosection