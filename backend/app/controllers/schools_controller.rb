class SchoolsController < ApplicationController

    def index
        schools = School.all
        render json: SchoolSerializer.new(schools, reviews).serialized_json
    end

    def show
        school = School.find_by(slug: params[:slug])
        render json: SchoolSerializer.new(school, reviews).serialized_json
    end

    def create
        school = School.new(school_params)
        if school.save 
            render json: SchoolSerializer.new(school).serialized_json
        else
            render json: { error: school.errors.messages }
        end
    end

    def update
        school = School.find_by(slug: params[:slug])
        if school.update(school_params)
            render json: SchoolSerializer.new(school, reviews).serialized_json
        else
            render json: { error: school.errors.messages }
        end
    end

    def destroy
        school = School.find_by(slug: params[:slug])
        if school.destroy
            head :no_content 
        else
            render json: { error: school.errors.messages }
        end
    end

    private

    def school_params
        params.require(:school).permit(:name, :image_url)
    end

    def reviews
        @reviews = { include: %i[reviews]}
    end
end
