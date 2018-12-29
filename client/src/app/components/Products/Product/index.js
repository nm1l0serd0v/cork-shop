import React from 'react'
import PropTypes from 'prop-types'

const product = (props) => {
  return(
    <div className="col-lg-3 col-sm-6">
      <div className="shop-item">
        <div className="shop-thumbnail">
          { props.discount 
            ?  <span className="shop-label text-danger">Sale</span>
            : null
          }
          <a href="shop-single.html" className="item-link"></a>
          <img src={props.imageUrl} alt="Shop item"/>
          <div className="shop-item-tools">
            <a href="#" className="add-to-whishlist" data-toggle="tooltip" data-placement="top" title="Wishlist">
              <i className="material-icons favorite_border"></i>
            </a>
            <a href="#" className="add-to-cart">
              <em>Add to Cart</em>
              <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32">
                <path stroke-dasharray="19.79 19.79" stroke-dashoffset="19.79" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="shop-item-details">
          <h3 className="shop-item-title">
            <a href="shop-single.html">{props.name}</a>
          </h3>
          <span className="shop-item-price">
            {props.discount 
              ? <span className="old-price">{props.price}</span> {props.discountPrice}
              : <span className="shop-item-price">{props.price}</span>
            }
          </span>
        </div>
      </div>
    </div>
  )
}

product.defaultProps = { discount: false }

product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  discount: PropTypes.bool.isRequired,
  discountPrice: PropTypees.number
}

export default product
