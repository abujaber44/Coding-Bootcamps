class ReviewsController < ApplicationController

    def create
        review = Review.new(review_params)
        if review.save 
            render json: ReviewSerializer.new(review).serialized_json
        else
            render json: { error: review.errors.messages }, status: 404
        end
    end

    def destroy
        review = Review.find(params[:id])
        if review.destroy
            head :no_content 
        else
            render json: { error: review.errors.messages }, status: 404
        end
    end

    private

    def review_params
        params.require(:review).permit(:title, :description, :score, :school_id)
    end
end
