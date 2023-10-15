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
      <Herosection />
      <Herocategory />
      {window.innerWidth > 800 ? <Features /> : null}
      <div className="product__container">
        <div className="product__container__head">
          <Divider img="sm"/>
          <h2 className='text-center'>NEW ARRIVALS</h2>
          <Divider classes={"text-right"} img="sm"/>
        </div>
        <div className="product__container__body">
          {Products.map((product, index) => {
            if(product['product_sale'] === 0){
              return <Product key={index} product={product}/>
            }
            return <Badge key={index} Component={<Product product={product}/>} />
          })}
        </div>
      </div>
    </>
  )
}

export default Home