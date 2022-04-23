module Api
    class UsersController < ApplicationController
        @@user_render_except = [:password]
        ALLOWED_DATA = %[username email].freeze

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
            user = User.new(data)
            if user.save
                render json: user, except: @@user_render_except
            else
                render json: {"error": "could not create user"}
            end
        end

        def destroy
            user = User.find(params[:id])
            if user.destroy
                render json: {"success": "user: " + user.username + " destoryed"}
            else
                render json: {"error": "could not destroy user"}
            end
        end
    end
end
