Rails.application.routes.draw do
  namespace :api do
    defaults format: :json do
      resources :gigs, shallow: true do
        resources :gig_applications
      end
      resources :users, shallow: true do
        resources :venues, :bands
      end
      post "/login", to: "users#login"
      get "/auto_login", to: "users#auto_login"
      get "/all_venues", to: "venues#all"
      get "/all_bands", to: "bands#all"
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
end
