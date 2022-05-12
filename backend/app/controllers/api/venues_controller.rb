module Api
    class VenuesController < ApplicationController
        ALLOWED_DATA = %[name contact_name contact_title website phone_number email capacity performance_type genre street_address state city zip].freeze
    
        def index
            user = User.find(params[:user_id])
            render json: user.venues
        end
        def create
            user = User.find(params[:user_id])
            data = json_payload.select {|k| ALLOWED_DATA.include?(k)}
    
            venue = user.venues.create(data)
    
            if venue.valid?
                render json: {venue: venue}
            else
                render json: {"message": venue.errors.full_messages.join(', ')}, status: :bad_request
            end
        end
        def show
            venue = Venue.find(params[:id])
            render json: venue
        end
        def all
            venues = Venue.includes(:gigs).all
            render json: venues, include: ['gigs']
        end
    end
end
