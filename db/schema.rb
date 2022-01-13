# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_13_002755) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.text "content", null: false
    t.integer "commenter_id", null: false
    t.integer "post_id", null: false
    t.integer "parent_comment_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "vote_count"
    t.index ["commenter_id"], name: "index_comments_on_commenter_id"
    t.index ["parent_comment_id"], name: "index_comments_on_parent_comment_id"
    t.index ["post_id"], name: "index_comments_on_post_id"
  end

  create_table "communities", force: :cascade do |t|
    t.string "sub", null: false
    t.string "icon"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "creator_id", null: false
    t.string "about"
    t.string "banner"
    t.index ["creator_id"], name: "index_communities_on_creator_id"
    t.index ["sub"], name: "index_communities_on_sub", unique: true
  end

  create_table "follows", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "community_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["community_id"], name: "index_follows_on_community_id"
    t.index ["user_id"], name: "index_follows_on_user_id"
  end

  create_table "posts", force: :cascade do |t|
    t.string "title", null: false
    t.text "body"
    t.string "media"
    t.string "link"
    t.integer "poster_id", null: false
    t.integer "community_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "vote_count"
    t.index ["community_id"], name: "index_posts_on_community_id"
    t.index ["poster_id"], name: "index_posts_on_poster_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  create_table "votes", force: :cascade do |t|
    t.boolean "upvote", null: false
    t.integer "user_id", null: false
    t.integer "parent_id", null: false
    t.string "parent_type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["parent_id"], name: "index_votes_on_parent_id"
    t.index ["user_id"], name: "index_votes_on_user_id"
  end

end
