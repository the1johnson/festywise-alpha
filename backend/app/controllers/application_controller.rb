class ApplicationController < ActionController::API
    @@jwt_secret = 'TODO:bakuBot2022'
    before_action :authorized, only: [:auto_login]

    def json_payload
        HashWithIndifferentAccess.new(JSON.parse(request.raw_post))
    end

    def encode_token(payload)
        JWT.encode(payload, @@jwt_secret)
    end

    def auth_header
        request.headers['Authorization']
    end

    def decoded_token
        if auth_header
            token = auth_header.split(' ')[1]
            begin
                JWT.decode(token, @@jwt_secret, true, algorith: 'HS256')
            rescue JWT::DecodeError
                nil
            end
        end
    end

    def logged_in_user
        if decoded_token
            user_id = decoded_token[0]['user_id']
            @user = User.find(user_id)
        end
    end

    def logged_in?
        !!logged_in_user
    end

    def authorized
        render json: { message: 'Log in' }, status: :unauthorized unless logged_in?
    end
end
