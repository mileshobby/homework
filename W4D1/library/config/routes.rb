Rails.application.routes.draw do
  resources :books, only: %i[new create index destroy]
end
