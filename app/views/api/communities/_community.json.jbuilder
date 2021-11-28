json.extract! community, :sub, :id, :about, :icon, :banner, :creator_id
json.follower_count community.followers.count
json.followed_by_current_user !!community.follows.find_by(user_id: current_user ? current_user.id : '')
json.cake_date "#{community.created_at.strftime('%b')} #{community.created_at.strftime('%-d')}, #{community.created_at.strftime('%Y')}"