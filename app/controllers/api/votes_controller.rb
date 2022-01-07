class Api::FollowsController < ApplicationController

  def create
    @vote = Vote.new(vote_params)
    @vote.user_id = current_user.id
    if @vote.save
      # check which page you're on
    else
      render json: @vote.errors.full_messages, status:401
    end
  end

  def destroy
    @vote = Vote.find_by(user_id: current_user.id, parent_id: params[:vote][:parent_id], parent_type: params[:vote][:parent_type])
    @vote.delete
    # check which page you're on
  end

  private
  def vote_params
    params.require(:vote).permit(:upvote, :parent_id, :parent_type)
  end

end