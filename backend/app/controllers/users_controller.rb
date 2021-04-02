class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]

  def profile
    render json: current_user
  end

  def create
    user = User.create(user_params) 
    if user.valid?
        payload = {user_id: user.id}
        token = encode_token(payload)
        puts token
        render json: {user: user, jwt: token}
    else
        render json: {errors: user.errors.full_messages}, status: :not_acceptable
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password_digest)
  end
end
