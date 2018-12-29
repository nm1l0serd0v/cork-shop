import React from 'react'

import Categories from '../Categories'
import SpecialOffer from '../SpecialOffer'
import Tabs from '../Tabs'

const categories = [
  {name: 'Clocks', imagePath: 'images/categories/cat01.jpg'},
  {name: 'Furniture', imagePath: 'images/categories/cat02.jpg'},
  {name: 'Lightning', imagePath: 'images/categories/cat03.jpg'},
  {name: 'Bags', imagePath: 'images/categories/cat04.jpg'},
]

const tabs = [
  { name: 'New Arrivals' },
  { name: 'Top Rated' },
  { name: 'On Sale' }
]

const products = [
  {
    id: 1,
    name: 'Storage Box',
    price: 49,
    imageUrl: 'images/shop/th01.jpg',
    discount: true,
    discountPrice: 38.00
  },
  {
    id: 2,
    name: 'Shoulder Bag',
    price: 125,
    imageUrl: 'images/shop/th02.jpg',
    discount: false,
  },
  {
    id: 3,
    name: 'Glass Vase',
    price: 62.50,
    imageUrl: 'images/shop/th03.jpg',
    discount: false,
  },
  {
    id: 4,
    name: 'Alarm Clock',
    price: 178,
    imageUrl: 'images/shop/th04.jpg',
    discount: false,
  },
  {
    id: 5,
    name: 'Wall Clock',
    price: 59,
    imageUrl: 'images/shop/th05.jpg',
    discount: false,
  },
  {
    id: 6,
    name: 'LED Lighting',
    price: 130,
    imageUrl: 'images/shop/th06.jpg',
    discount: false,
  },
  {
    id: 7,
    name: 'Sunglasses',
    price: 99,
    imageUrl: 'images/shop/th07.jpg',
    discount: false,
  },
  {
    id: 8,
    name: 'Hook Basket',
    price: 112.35,
    imageUrl: 'images/shop/th08.jpg',
    discount: false,
  },
  {
    id: 9,
    name: 'Leather Case',
    price: 118,
    imageUrl: 'images/shop/th09.jpg',
    discount: false,
    rating: 10
  },
  {
    id: 10,
    name: 'Concrete Lamp',
    price: 85.90,
    imageUrl: 'images/shop/th10.jpg',
    discount: false,
    rating: 10
  },
  {
    id: 11,
    name: 'Stylish Chair',
    price: 417,
    imageUrl: 'images/shop/th11.jpg',
    discount: false,
    rating: 9
  },
  {
    id: 12,
    name: 'Desktop Lighting',
    price: 245,
    imageUrl: 'images/shop/th12.jpg',
    discount: false,
    rating: 8
  },
  {
    id: 13,
    name: 'Storage Jar',
    price: 19.80,
    imageUrl: 'images/shop/th13.jpg',
    discount: false,
    rating: 8
  },
  {
    id: 14,
    name: 'Ceramic Watch',
    price: 299,
    imageUrl: 'images/shop/th14.jpg',
    discount: false,
    rating: 7
  },
  {
    id: 15,
    name: 'Tissue Holder',
    price: 76.40,
    imageUrl: 'images/shop/th15.jpg',
    discount: false,
    rating: 7
  },
  {
    id: 16,
    name: 'Pendant Lamp',
    price: 27,
    imageUrl: 'images/shop/th16.jpg',
    discount: false,
    rating: 6
  },
]

const ProductsSummary = (props) => {
  return(
    <section className="container-fluid padding-top-3x">
      <Categories categories={categories} />

      <Tabs collection={tabs}/>

      <div className="row padding-top">
        <SpecialOffer />

        <div className="col-lg-9 col-md-8">
          <div className="col-sm-12">
            <ul className="nav-tabs text-center" role="tablist">
              <li className="active"><a href="#newcomers" role="tab" data-toggle="tab">New Arrivals</a></li>
              <li><a href="#toprated" role="tab" data-toggle="tab">Top Rated</a></li>
              <li><a href="#onsale" role="tab" data-toggle="tab">On Sale</a></li>
            </ul>

            <div className="tab-content">
              <div role="tabpanel" className="tab-pane transition fade scale in active" id="newcomers">
                <div className="row space-top-half">
                  <div className="col-lg-3 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <a href="shop-single.html" className="item-link"></a>
                        <img src="images/shop/th02.jpg" alt="Shop item"/>
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
                        <h3 className="shop-item-title"><a href="shop-single.html">Shoulder Bag</a></h3>
                        <span className="shop-item-price">
                          $125.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <a href="shop-single.html" className="item-link"></a>
                        <img src="images/shop/th03.jpg" alt="Shop item"/>
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
                        <h3 className="shop-item-title"><a href="shop-single.html">Glass Vase</a></h3>
                        <span className="shop-item-price">
                          $62.50
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <a href="shop-single.html" className="item-link"></a>
                        <img src="images/shop/th04.jpg" alt="Shop item"/>
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
                        <h3 className="shop-item-title"><a href="shop-single.html">Alarm Clock</a></h3>
                        <span className="shop-item-price">
                          $178.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <a href="shop-single.html" className="item-link"></a>
                        <img src="images/shop/th05.jpg" alt="Shop item"/>
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
                        <h3 className="shop-item-title"><a href="shop-single.html">Wall Clock</a></h3>
                        <span className="shop-item-price">
                          $69.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <a href="shop-single.html" className="item-link"></a>
                        <img src="images/shop/th06.jpg" alt="Shop item"/>
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
                        <h3 className="shop-item-title"><a href="shop-single.html">LED Lighting</a></h3>
                        <span className="shop-item-price">
                          $130.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <span className="shop-label text-warning">Popular</span>
                        <a href="shop-single.html" className="item-link"></a>
                        <img src="images/shop/th07.jpg" alt="Shop item"/>
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
                        <h3 className="shop-item-title"><a href="shop-single.html">Sunglasses</a></h3>
                        <span className="shop-item-price">
                          $99.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <a href="shop-single.html" className="item-link"></a>
                        <img src="images/shop/th08.jpg" alt="Shop item"/>
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
                        <h3 className="shop-item-title"><a href="shop-single.html">Hook Basket</a></h3>
                        <span className="shop-item-price">
                          $112.35
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div role="tabpanel" className="tab-pane transition fade scale" id="toprated">
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <span className="item-rating text-warning">
                          <i className="material-icons star"></i>
                          <i className="material-icons star"></i>
                          <i className="material-icons star"></i>
                          <i className="material-icons star"></i>
                          <i className="material-icons star"></i>
                        </span>
                        <a href="shop-single.html" className="item-link"></a>
                        <img src="images/shop/th09.jpg" alt="Shop item"/>
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
                        <h3 className="shop-item-title"><a href="shop-single.html">Leather Case</a></h3>
                        <span className="shop-item-price">
                          $118.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <span className="item-rating text-warning">
                          <i className="material-icons star"></i>
                          <i className="material-icons star"></i>
                          <i className="material-icons star"></i>
                          <i className="material-icons star"></i>
                          <i className="material-icons star"></i>
                        </span>
                        <a href="shop-single.html" className="item-link"></a>
                        <img src="images/shop/th10.jpg" alt="Shop item"/>
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
                        <h3 className="shop-item-title"><a href="shop-single.html">Concrete Lamp</a></h3>
                        <span className="shop-item-price">
                          $85.90
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <span className="item-rating text-warning">
                          <i className="material-icons star"></i>
                          <i className="material-icons star"></i>
                          <i className="material-icons star"></i>
                          <i className="material-icons star"></i>
                          <i className="material-icons star_half"></i>
                        </span>
                        <a href="shop-single.html" className="item-link"></a>
                        <img src="images/shop/th11.jpg" alt="Shop item"/>
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
                        <h3 className="shop-item-title"><a href="shop-single.html">Stylish Chair</a></h3>
                        <span className="shop-item-price">
                          $417.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <span className="item-rating text-warning">
                          <i className="material-icons star"></i>
                          <i className="material-icons star"></i>
                          <i className="material-icons star"></i>
                          <i className="material-icons star"></i>
                          <i className="material-icons star_border"></i>
                        </span>
                        <a href="shop-single.html" className="item-link"></a>
                        <img src="images/shop/th12.jpg" alt="Shop item"/>
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
                        <h3 className="shop-item-title"><a href="shop-single.html">Desktop Light</a></h3>
                        <span className="shop-item-price">
                          $245.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <span className="item-rating text-warning">
                          <i className="material-icons star"></i>
                          <i className="material-icons star"></i>
                          <i className="material-icons star"></i>
                          <i className="material-icons star"></i>
                          <i className="material-icons star_border"></i>
                        </span>
                        <a href="shop-single.html" className="item-link"></a>
                        <img src="images/shop/th13.jpg" alt="Shop item"/>
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
                        <h3 className="shop-item-title"><a href="shop-single.html">Storage Jar</a></h3>
                        <span className="shop-item-price">
                          $19.80
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <span className="item-rating text-warning">
                          <i className="material-icons star"></i>
                          <i className="material-icons star"></i>
                          <i className="material-icons star"></i>
                          <i className="material-icons star_half"></i>
                          <i className="material-icons star_border"></i>
                        </span>
                        <a href="shop-single.html" className="item-link"></a>
                        <img src="images/shop/th14.jpg" alt="Shop item"/>
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
                        <h3 className="shop-item-title"><a href="shop-single.html">Ceramic Watch</a></h3>
                        <span className="shop-item-price">
                          $299.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <span className="item-rating text-warning">
                          <i className="material-icons star"></i>
                          <i className="material-icons star"></i>
                          <i className="material-icons star"></i>
                          <i className="material-icons star_half"></i>
                          <i className="material-icons star_border"></i>
                        </span>
                        <a href="shop-single.html" className="item-link"></a>
                        <img src="images/shop/th15.jpg" alt="Shop item"/>
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
                        <h3 className="shop-item-title"><a href="shop-single.html">Tissue Holder</a></h3>
                        <span className="shop-item-price">
                          $76.40
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <span className="item-rating text-warning">
                          <i className="material-icons star"></i>
                          <i className="material-icons star"></i>
                          <i className="material-icons star"></i>
                          <i className="material-icons star_border"></i>
                          <i className="material-icons star_border"></i>
                        </span>
                        <a href="shop-single.html" className="item-link"></a>
                        <img src="images/shop/th16.jpg" alt="Shop item"/>
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
                        <h3 className="shop-item-title"><a href="shop-single.html">Pendant Lamp</a></h3>
                        <span className="shop-item-price">
                          $27.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div role="tabpanel" className="tab-pane transition fade scale" id="onsale">
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <span className="shop-label text-danger">Sale</span>
                        <a href="#" className="item-link"></a>
                        <img src="images/shop/th05.jpg" alt="Shop item"/>
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
                        <h3 className="shop-item-title"><a href="#">Wall Clock</a></h3>
                        <span className="shop-item-price">
                          <span className="old-price">$69.00</span>
                          $48.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <span className="shop-label text-danger">Sale</span>
                        <a href="#" className="item-link"></a>
                        <img src="images/shop/th06.jpg" alt="Shop item"/>
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
                        <h3 className="shop-item-title"><a href="#">LED Lighting</a></h3>
                        <span className="shop-item-price">
                          <span className="old-price">$155.00</span>
                          $130.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <span className="shop-label text-danger">Sale</span>
                        <a href="#" className="item-link"></a>
                        <img src="images/shop/th04.jpg" alt="Shop item"/>
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
                        <h3 className="shop-item-title"><a href="#">Alarm Clock</a></h3>
                        <span className="shop-item-price">
                          <span className="old-price">$225.00</span>
                          $178.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <span className="shop-label text-danger">Sale</span>
                        <a href="#" className="item-link"></a>
                        <img src="images/shop/th08.jpg" alt="Shop item"/>
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
                        <h3 className="shop-item-title"><a href="#">Hook Basket</a></h3>
                        <span className="shop-item-price">
                          <span className="old-price">$180.00</span>
                          $112.35
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <span className="shop-label text-danger">Sale</span>
                        <a href="shop-single.html" className="item-link"></a>
                        <img src="images/shop/th01.jpg" alt="Shop item"/>
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
                        <h3 className="shop-item-title"><a href="shop-single.html">Storage Box</a></h3>
                        <span className="shop-item-price">
                          <span className="old-price">$49.00</span>
                          $38.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <span className="shop-label text-danger">Sale</span>
                        <a href="shop-single.html" className="item-link"></a>
                        <img src="images/shop/th07.jpg" alt="Shop item"/>
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
                        <h3 className="shop-item-title"><a href="shop-single.html">Sunglasses</a></h3>
                        <span className="shop-item-price">
                          <span className="old-price">$122.00</span>
                          $99.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <span className="shop-label text-danger">Sale</span>
                        <a href="shop-single.html" className="item-link"></a>
                        <img src="images/shop/th09.jpg" alt="Shop item"/>
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
                        <h3 className="shop-item-title"><a href="shop-single.html">Leather Case</a></h3>
                        <span className="shop-item-price">
                          <span className="old-price">$160.00</span>
                          $118.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="shop-item">
                      <div className="shop-thumbnail">
                        <span className="shop-label text-danger">Sale</span>
                        <a href="shop-single.html" className="item-link"></a>
                        <img src="images/shop/th02.jpg" alt="Shop item"/>
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
                        <h3 className="shop-item-title"><a href="shop-single.html">Shoulder Bag</a></h3>
                        <span className="shop-item-price">
                          <span className="old-price">$199.00</span>
                          $125.00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsSummary
