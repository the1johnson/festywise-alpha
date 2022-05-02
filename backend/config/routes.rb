Rails.application.routes.draw do
  resources :users
  namespace :api do
    defaults format: :json do
      resources :users
      post "/login", to: "users#login"
      get "/auto_login", to: "users#auto_login"
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
end
