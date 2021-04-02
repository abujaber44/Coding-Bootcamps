Rails.application.routes.draw do
  root 'pages#index'
  resources :users, only: [:create]
  post "/login", to: "auth#login"
  get "/auto_login", to: "auth#auto_login"
  get "/user_is_authed", to: "auth#user_is_authed"
  get "/profile", to: "users#profile"
  resources :schools, param: :slug
  resources :reviews, only: [:create, :destroy]

  get '*path', to: 'pages#index', via: :all 
end
