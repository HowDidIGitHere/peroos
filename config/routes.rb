Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :communities, except: [:edit, :new] do
      resources :posts, only: [:index]
    end

    get '/posts', to: 'posts#feed'

    resources :follows, only: [:create, :destroy]
    resources :posts, except: [:index, :edit, :new]
  end

  root to: 'static_pages#root'
end
