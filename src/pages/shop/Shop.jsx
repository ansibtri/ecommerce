import React from 'react'
import { useParams } from 'react-router-dom';
import './shop.css'
import Banner from './component/banner/Banner';
import Filter from './component/filter/Filter';
import ProductsData from '../../data/Products';
import Product from '../../shared/components/product/Product';
import Badge from '../../shared/components/badge/Badge';
const Shop = () => {
  const params = useParams();
  const title = params.category;
  return (
    <>
    <main>
    <Banner title={title ? title+"'s category".toUpperCase(): "50% SUMMER SALE"}/>
    <section>
      <div className="shop-section">
      <Filter />
      <div className="shop-section__product">

      {ProductsData.map((product, index) => {
              if (product['product_sale'] !== 0) {
                return <Product key={index} product={product} />
              }
              return <Badge key={index} Component={<Product product={product} />} />
            })}
      </div>
      </div>
    </section>
    </main>
    </>
  )
}

export default Shop