module Api
    class BandsController < ApplicationController
        ALLOWED_DATA = %[name performance_type genre performance_duration member_count website phone_number email social_facebook social_youtube social_soundcloud social_bandcamp location_preference].freeze
    
        def index
            user = User.find(params[:user_id])
            render json: user.bands
        end
        def create
            user = User.find(params[:user_id])
            data = json_payload.select {|k| ALLOWED_DATA.include?(k)}
    
            band = user.bands.create(data)
    
            if band.valid?
                render json: {band: band}
            else
                render json: {"message": band.errors.full_messages.join(', ')}, status: :bad_request
            end
        end
        def show
            band = Band.find(params[:id])
            render json: band
        end
        def all
            bands = Band.all
            render json: bands
        end
    end
end
