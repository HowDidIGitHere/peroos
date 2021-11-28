json.extract! community, :sub, :id, :about, :icon, :banner, :creator_id
json.follower_count community.followers.count
json.followed_by_current_user !!community.follows.find_by(user_id: current_user ? current_user.id : '')