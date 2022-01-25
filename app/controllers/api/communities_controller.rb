class Api::CommunitiesController < ApplicationController

  def index
    @communities = Community.all
    render :index
  end

  def show
    @community = Community.find_by(sub: params[:id])
    if @community
      render :show
    else
      render json: @community.errors.full_messages, status: 404
    end
  end

  def create
    @community = Community.new(community_params)
    # @community.creator_id = current_user.id
    if @community.save
      render :show
    else
      render json: @community.errors.full_messages, status: 400
    end
  end

  def update
    @community = Community.find_by(sub: params[:id])
    if @community.update(community_params)
      render :show
    else
      render json: @community.errors.full_messages, status: 404
    end
  end

  def destroy
    @community = Community.find_by(sub: params[:id])
    if current_user.id == @community.creator_id
      @community.delete
      render :show
    else
      render json: ['Only creator can delete community'], status: 400
    end
  end

  private
  def community_params
    params.require(:community).permit(:sub, :about, :icon, :creator_id, :color)
  end
end