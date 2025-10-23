class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def create # register
    logger.info " ################ Begin register action"
    # Support both top-level email param and nested user[email]
    incoming_email = params[:email] || params.dig(:user, :email)
    existing_user = User.find_by(email: incoming_email)
    if existing_user
      logger.info " ################ Registration failed: User already exists ################"
      render json: { errorMessage: "User already exists" }, status: :unprocessable_entity
      return
    end

    user = User.new(user_params)
    if user.save
      logger.info "################ User has been registered ################"
      render json: user, status: :created
    else
      logger.info "################ User registration failed ################"
      render json: { errorMessage: "User registration failed" }, status: :unprocessable_entity
    end
  end

  def login
    @user = User.find_by email: params[:email]
    if @user != nil and @user.password == params[:password]
      logger.info  "################  User has logged in ################  "
    else
      logger.info "################ User has failed logged in ################  "
      render json: {errorMessage: "User login failed"}, status: :unprocessable_entity
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password)
  end

end
