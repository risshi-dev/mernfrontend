import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {top_products} from '../actions/productActions'
function Caraousel({history}) {
    
    const dispatch = useDispatch()

    useEffect(() => {
		dispatch(top_products())
	}, [dispatch]);

    const {topProducts} = useSelector(state => state.productList)

    return (
      <div className='product-container'>
          <div>Top Products Today</div>
        <Carousel fade>   {topProducts && topProducts.map( product => {return (
               <Carousel.Item>
    <img
      className="d-block w-100"
      src={product.image}
      alt={product.name}
      style={{height:'40vh',boxShadow: '9px 12px 10px #eff2f7'}}
      onClick={()=>history.push(`products/${product._id}`)}
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>

        )}
     )
    }
</Carousel></div>
    )
}

export default withRouter(Caraousel)
