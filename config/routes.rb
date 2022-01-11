Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :communities, except: [:edit, :new] do
      resources :posts, only: [:index]
    end

    get '/posts', to: 'posts#feed'

    get '/search', to: 'search#index'

    resources :follows, only: [:create, :destroy]
    resources :posts, except: [:index, :edit, :new] do
      resources :comments, only: [:index]
    end

    resources :votes, only: [:create, :destroy]

    resources :comments, only: [:create, :update, :destroy]
  end

  root to: 'static_pages#root'
end
