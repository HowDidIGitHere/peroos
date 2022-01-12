class Api::VotesController < ApplicationController

  # Need to work on
  def index
    @votes = Vote.where(user_id: current_user.id)
    render :index
  end

  def create
    @vote = Vote.new(vote_params)
    @vote.user_id = current_user.id
    if @vote.save
      currPage = params[:vote][:parent_type]
      if currPage == 'Post'
        currPage = 'post'
        @post = Post.find(params[:vote][:parent_id])
      elsif currPage == 'Comment'
        currPage = 'comment'
        @comment = Comment.find(params[:vote][:parent_id])
      end
      render 'api/' + currPage + 's/show'
    else
      render json: @vote.errors.full_messages, status:401
    end
  end

  def destroy
    @vote = Vote.find_by(user_id: current_user.id, parent_id: params[:vote][:parent_id], parent_type: params[:vote][:parent_type])
    @vote.delete
    currPage = params[:vote][:parent_type] # Will say 'api/posts/show' or 'api/comments/show'
    if currPage == 'Post'
      currPage = 'post'
    elsif currPage == 'Comment'
      currPage = 'comment'
    end
    render 'api/' + currPage + 's/show'
  end

  private
  def vote_params
    params.require(:vote).permit(:upvote, :parent_id, :parent_type)
  end

end