class Api::SearchController < ApplicationController
  
  def index
    query = query_params
    @communities = Community.where("sub ILIKE ?", "%#{query[:searchQuery]}%")
    print query
    render 'api/communities/index'
  end

  private
  def query_params
    params.require(:query).permit(:searchQuery)
  end

end
