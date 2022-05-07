Rails.application.routes.draw do
  resources :bands
  namespace :api do
    defaults format: :json do
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
