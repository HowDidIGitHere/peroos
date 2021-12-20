class Api::SearchController < ApplicationController
  
  def index
    query = params[:query]
    @communities = Community.where("sub ILIKE ?", "%#{query}%")
    # @users = User.where()
    render :index
  end

end
