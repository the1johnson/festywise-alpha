module Api
    class GigsController < ApplicationController
        ALLOWED_DATA = %[venue_id name payment genre description start_date end_date].freeze

        def create
            data = json_payload.select {|k| ALLOWED_DATA.include?(k)}
            venue = Venue.find(data[:venue_id])
            gig = venue.gigs.create(data)

            if gig.valid?
                render json: {gig: gig}
            else
                render json: {"message": gig.errors.full_messages.join(', ')}, status: :bad_request
            end
        end
    end
end
