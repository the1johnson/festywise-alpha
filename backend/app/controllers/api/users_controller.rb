module Api
    class UsersController < ApplicationController
        before_action :authorized, only: [:auto_login]

        @@user_render_except = [:password_digest]
        ALLOWED_DATA = %[username email first_name last_name password].freeze

        def index
            users = User.all
            render json: users, except: @@user_render_except
        end

        def show
            user = User.find(params[:id])
            render json: user, except: @@user_render_except
        end

        def create
            data = json_payload.select {|k| ALLOWED_DATA.include?(k)}
            @user = User.create(data)
            
            if @user.valid?
                token = encode_token({user_id: @user.id})
                render json: {user: @user, token: token}
            else
                render json: {"message": @user.errors.full_messages.join(', ')}, status: :bad_request
            end
        end

        def destroy
            user = User.find(params[:id])
            if user.destroy
                render json: {"message": "user: #{user.username} destoryed"}
            else
                render json: {"message": "could not destroy user"}, status: :internal_server_error
            end
        end

        def login
            @user = User.find_by(username: params[:username])

            if @user && @user.authenticate(params[:password])
                token = encode_token({user_id: @user.id})
                render json: {user: @user, token: token}
            else
                render json: {"message": "Wrong login"}, status: :bad_request
            end
        end

        def auto_login
            render json: @user
        end
    end
end
