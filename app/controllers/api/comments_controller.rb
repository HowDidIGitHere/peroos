class Api::CommentsController < ApplicationController

  before_action :set_page, only: [:index]

  def index
    @comments = Comment.where(post_id: params[:post_id]).limit(10).offset(@page.to_i * 10).order(created_at: :asc)
    if @comments
      render :index
    else
      render json: @comments.errors.full_messages, status: 404
    end
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.commenter_id = current_user.id
    @comment.vote_count = 1
    if @comment.save
      vote = Vote.new(user_id: current_user.id, upvote: true, parent_id: @comment.id, parent_type: 'Comment')
      vote.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 400
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      render :show
    else
      render json: @comment.errors.full_messages, status: 404
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.delete
    render :show
  end

  private
  def comment_params
    params.require(:comment).permit(:content, :post_id)
  end

  def set_page
    @page = params[:page] || 0
  end

end