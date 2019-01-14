class Spree::HomeController < ApplicationController
  def forbidden
    render text: 'Not allouwed'
  end
end
