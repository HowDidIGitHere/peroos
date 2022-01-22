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
      render :show
    else
      render json: @vote.errors.full_messages, status:401
    end
  end

  def update
    @vote = Vote.find_by(user_id: current_user.id, parent_id: params[:vote][:parent_id], parent_type: params[:vote][:parent_type])
    if @vote.update(vote_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 404
    end
  end

  # def update
  #   @vote = Vote.find_by(user_id: current_user.id, parent_id: params[:vote][:parent_id], parent_type: params[:vote][:parent_type])
  #   if @vote.update(vote_params)
  #     currPage = params[:vote][:parent_type]
  #     if currPage == 'Post'
  #       currPage = 'post'
  #       @post = Post.find(params[:vote][:parent_id])
  #       if @vote.upvote == true
  #         @post.vote_count += 1
  #       else
  #         @post.vote_count -= 1
  #       end
  #       if @post.save
  #         render 'api/' + currPage + 's/show'
  #       end
  #     elsif currPage == 'Comment'
  #       currPage = 'comment'
  #       @comment = Comment.find(params[:vote][:parent_id])
  #       if @vote.upvote == true
  #         @comment.vote_count += 1
  #       else
  #         @comment.vote_count -= 1
  #       end
  #       if @comment.save
  #         render 'api/' + currPage + 's/show'
  #       end
  #     end
  #   else
  #     render json: @post.errors.full_messages, status: 404
  #   end
  # end

  def destroy
    @vote = Vote.find_by(user_id: current_user.id, parent_id: params[:vote][:parent_id], parent_type: params[:vote][:parent_type])
    if @vote
      @vote.delete
      render :show
    else
      render json: @vote.errors.full_messages, status: 404
    end
  end

  private
  def vote_params
    params.require(:vote).permit(:upvote, :parent_id, :parent_type)
  end

end