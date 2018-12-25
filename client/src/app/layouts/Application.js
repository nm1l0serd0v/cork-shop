import React, { Component } from 'react'

import Header from '../components/shared/header'
import Footer from '../components/shared/footer'

export default class Application extends Component {
  render() {
    return(
      <React.Fragment>

        <div class="page-preloader">
          <div class="preloader">
            <img src="images/preloader.gif" alt="Preloader" />
          </div>
        </div>

        <div class="page-wrapper">
          <Header />
          <Footer />
        </div>

      </React.Fragment>
    )
  }
}
