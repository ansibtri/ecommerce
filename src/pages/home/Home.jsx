import { Suspense } from 'react'
import './home.css'
import Badge from '../../shared/components/badge/Badge'
import Divider from '../../shared/components/divider/Divider'
import Product from '../../shared/components/product/Product'
import Features from './components/features/Features'
import Herocategory from './components/herocategory/Herocategory'
import Herosection from './components/herosection/Herosection'
import Products from '../../data/Products';
const Home = () => {
  return (
    <>
      <main>
        {/* Hero section  */}
        <Suspense fallback={<h1>Loading</h1>}>
        <Herosection />
        </Suspense>

        {/* Hero category  */}
        <Herocategory />

        {/* Features section will only be included if device is of greater size than 800px  */}
        {window.innerWidth > 800 ? <Features /> : null}

        {/* product container for new arrivals */}
        <div className="product__container">
          <div className="product__container__head">
            <Divider img="sm" />
            <h2 className='text-center'>NEW ARRIVALS</h2>
            <Divider classes={"text-right"} img="sm" />
          </div>
          <div className="product__container__body">
            {Products.map((product, index) => {
              if (product['product_sale'] !== 0) {
                return <Product key={index} product={product} />
              }
              return <Badge key={index} Component={<Product product={product} />} />
            })}
          </div>
        </div>

        {/* product container for sales products */}
        <div className="product__container">
          <div className="product__container__head">
            <Divider img="sm" />
            <h2 className='text-center'>SALe products</h2>
            <Divider classes={"text-right"} img="sm" />
          </div>
          <div className="product__container__body">
            {Products.map((product, index) => {
              if (product['product_sale'] !== 0) {
                return <Badge key={index} Component={<Product product={product} />} />
              }
              if (index === 4) {
                return;
              }
            })}
          </div>
        </div>
      </main>
    </>
  )
}

export default Home