Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do 
      resources :photos, only: [:index, :show, :create]
      resources :favorites_repos, only: [:index, :show]
    end
  end

end
