import React, { Component } from 'react'

import Header from '../components/shared/header'
import Footer from '../components/shared/footer'
import Slider from '../components/Slider'
import ProductsSummary from '../components/ProductsSummary'

export default class Application extends Component {
  render() {
    return(
      <React.Fragment>
        <div className="page-preloader">
          <div className="preloader">
            <img src="images/preloader.gif" alt="Preloader" />
          </div>
        </div>

        <div className="page-wrapper">
          <Header />
          <Slider />
          <ProductsSummary />
          <Footer />
        </div>

      </React.Fragment>
    )
  }
}
