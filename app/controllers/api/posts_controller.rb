class Api::PostsController < ApplicationController

  def index
    @posts = Post.all
    render :index
  end

  def show
    @post = Post.find(params[:id])
    if @post
      render :show
    else
      render json: @post.errors.full_messages, status: 404
    end
  end

  def create
    @post = Post.new(post_params)
    @post.poster_id = current_user.id
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 400
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 404
    end
  end

  def delete
    @post = Post.find(params[:id])
    @post.delete
    render :show
  end

  private
  def post_params
    params.require(:post).permit(:title, :body, :media, :link, :community_id)
  end

end