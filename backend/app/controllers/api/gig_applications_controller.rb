module Api
    class GigApplicationsController < ApplicationController
        ALLOWED_DATA = %[band_id status].freeze
        def index
            gigs = Gig.find(params[:gig_id])
            applications = gigs.gig_applications
            render json: applications, include: ['band']
        end
        def create
            data = json_payload.select {|k| ALLOWED_DATA.include?(k)}
            gig = Gig.find(params[:gig_id])
            application = gig.gig_applications.create(data)

            if application.valid?
                render json: {application: application}
            else
                render json: {"message": application.errors.full_messages.join(', ')}, status: :bad_request
            end
        end
        def update
            data = json_payload.select {|k| ALLOWED_DATA.include?(k)}
            application = GigApplication.find(params[:id])
            application.status = data[:status]
            if application.save
                render json: {application: application}
            else
                render json: {"message": application.errors.full_messages.join(', ')}, status: :bad_request
            end
        end
    end
end

