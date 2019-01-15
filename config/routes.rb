Rails.application.routes.draw do
  mount Spree::Core::Engine, :at => '/'

  root to: "spree/admin/orders#index"

  devise_for :users
  devise_scope :user do 
    get '/login', :to => "devise/sessions#new"
    delete '/logout', :to => "devise/sessions#destroy"
  end
end
