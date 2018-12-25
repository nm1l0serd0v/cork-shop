import React from 'react'

import Column from './column'

const footer = (props) => {
  return(
    <footer class="footer">

      <div class="column">
        <p class="text-sm">Need support? Call <span class="text-primary">001 (917) 555-4836</span></p>
        <div class="social-bar text-center space-bottom">
          <a href="#" class="sb-skype" data-toggle="tooltip" data-placement="top" title="Skype">
            <i class="socicon-skype"></i>
          </a>
          <a href="#" class="sb-facebook" data-toggle="tooltip" data-placement="top" title="Facebook">
            <i class="socicon-facebook"></i>
          </a>
          <a href="#" class="sb-google-plus" data-toggle="tooltip" data-placement="top" title="" data-original-title="Google+">
            <i class="socicon-googleplus"></i>
          </a>
          <a href="#" class="sb-twitter" data-toggle="tooltip" data-placement="top" title="Twitter">
            <i class="socicon-twitter"></i>
          </a>
          <a href="#" class="sb-instagram" data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram">
            <i class="socicon-instagram"></i>
          </a>
        </div>
        <p class="copyright">&copy; 2016. Made with <i class="text-danger material-icons favorite"></i> by rokaux.</p>
      </div>

      <Column leadTitle="Subscription" smallTitle="To receive latest offers and discounts from the shop.">
        <form action="#" method="post" target="_blank" class="subscribe-form" novalidate>
          <input type="email" class="form-control" name="EMAIL" placeholder="Your e-mail"/>
          <button type="submit"><i class="material-icons send"></i></button>
        </form>
      </Column>

      <Column leadTitle="Payment Methods" smallTitle="We support one of the following payment methods.">
        <div class="cards">
          <img src="images/cards.png" alt="Cards"/>
        </div>
        <div class="scroll-to-top-btn"><i class="material-icons trending_flat"></i></div>
      </Column>

    </footer>
  )
};

export default footer
