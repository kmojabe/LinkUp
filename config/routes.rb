Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
   namespace :api, defaults: {format: :json} do
     resources :users, only: [:create, :show]
     resource :session, only: [:create, :destroy]
     resources :groups, only: [:create, :show, :index]
     resources :group_members, only: [:create, :destroy]
     resources :events, only: [ :show ]
     resources :event_attendee, only: [:create, :destroy]
   end
end
