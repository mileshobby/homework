class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_credentials(
    params[:user][:username],
    params[:user][:password]
    )

    if user.nil?
      render json: 'Credentials were wrong'
    else
      render login!(user)
      redirect_to user_url
    end

  end
end
