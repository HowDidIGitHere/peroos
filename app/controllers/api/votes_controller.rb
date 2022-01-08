class Api::FollowsController < ApplicationController

  def create
    @vote = Vote.new(vote_params)
    @vote.user_id = current_user.id
    if @vote.save
      currPage = params[:vote][:currPage]
      if currPage == 'post'
        # @post = 
      elsif currPage == 'comment'
        # @comment = 
      end
      render 'api/' + currPage + 's/show'
    else
      render json: @vote.errors.full_messages, status:401
    end
  end

  def destroy
    @vote = Vote.find_by(user_id: current_user.id, parent_id: params[:vote][:parent_id], parent_type: params[:vote][:parent_type])
    @vote.delete
    currPage = params[:vote][:parenttype] # Will say 'api/posts/show' or 'api/comments/show'
    if currPage == 'post'
      # @post = 
    elsif currPage == 'comment'
      # @comment = 
    end
    render 'api/' + currPage + 's/show'
  end

  private
  def vote_params
    params.require(:vote).permit(:upvote, :parent_id, :parent_type)
  end

end